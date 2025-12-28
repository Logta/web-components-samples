# Dropdown の disabled 属性が効かない問題

## 問題の概要

React と Svelte の Dropdown コンポーネントで、`disabled` 属性を設定しても無効化状態にならない問題が発生しました：

```html
<!-- disabled属性を設定しても無効化されない -->
<react-dropdown options='[...]' disabled></react-dropdown>
<svelte-dropdown options='[...]' disabled></svelte-dropdown>
```

期待する動作：
- ボタンがグレーアウト表示される
- クリックしても反応しない
- カーソルが `not-allowed` になる

実際の動作：
- 通常通りクリック可能な状態のまま

## 発生状況

- **環境**: すべての環境（Storybook、React demo、VanillaJS demo、Rails/Go demo）
- **影響範囲**: React と Svelte の Dropdown コンポーネント
- **タイミング**: `disabled` 属性を設定した時
- **症状**: 属性が認識されず、無効化されない

## 根本原因

### Svelte の場合

Web Components では、boolean 属性（`disabled`、`checked` など）は以下のルールに従います：

- **属性が存在する** = `true`（値は空文字列 `""` または `"true"`）
- **属性が存在しない** = `false`

```html
<!-- これらはすべて disabled = true を意味する -->
<element disabled></element>
<element disabled=""></element>
<element disabled="true"></element>

<!-- これは disabled = false を意味する -->
<element></element>
```

しかし、Svelte の `$props()` で受け取る値は以下のようになります：

```typescript
// ❌ 問題のあるコード
let { disabled = $bindable(false) } = $props();
// disabled="" の場合、disabled === "" （空文字列）
// if (disabled) は true だが、型が boolean ではない
```

### React の場合（@r2wc/react-to-web-component）

`@r2wc/react-to-web-component` ライブラリには、boolean 属性の処理に重大な問題があります：

```typescript
// props 定義
const ReactDropdownElement = r2wc(ReactDropdown, {
  props: {
    disabled: 'boolean',  // boolean型として定義
  }
});
```

**問題点**：

1. HTML 属性 `disabled=""` が React props に渡される際、`@r2wc` が誤って `false` に変換する
2. デバッグログの結果：
   ```javascript
   {
     disabled: false,           // @r2wcが渡す値（誤り）
     hasAttribute: true,        // DOM上では属性が存在
     getAttribute: ""           // 属性の値は空文字列
   }
   ```

3. つまり、DOM 上では属性が正しく存在しているが、React component に渡される props では `false` になってしまう

## 解決策

### Svelte の解決策

`disabled` prop を `string | boolean` として受け取り、`$derived` で boolean に変換：

```typescript
// ✅ 正しいコード
let {
  options = $bindable<string | DropdownOption[]>([]),
  selected = $bindable(''),
  placeholder = $bindable('Select an option'),
  disabled = $bindable<string | boolean>(false)
} = $props();

// HTML属性として渡されるdisabledをbooleanに変換
// Web Componentsでは、disabled属性が存在する場合は空文字列または'true'が渡される
let isDisabled = $derived<boolean>(
  typeof disabled === 'boolean' ? disabled : (disabled === 'true' || disabled === '')
);
```

**使用箇所の更新**：

```svelte
<button
  class="dropdown__button {isDisabled ? 'dropdown__button--disabled' : ''}"
  onclick={handleToggle}
  disabled={isDisabled}
  type="button"
>

<script>
function handleToggle(event: MouseEvent) {
  if (!isDisabled) {
    event.stopPropagation();
    isOpen = !isOpen;
  }
}

function handleSelect(event: MouseEvent, option: DropdownOption) {
  if (!isDisabled) {
    event.stopPropagation();
    selected = option.value;
    isOpen = false;
  }
}
</script>
```

### React の解決策（MutationObserver を使用）

`@r2wc` の props システムを完全にバイパスし、DOM 属性を直接監視する：

```typescript
// ✅ 正しいコード
function ReactDropdown({
  options = '[]',
  selected = '',
  placeholder = 'Select an option',
  disabled = false,  // この値は @r2wc が誤変換するので使わない
  onChange
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selected);
  const [parsedOptions, setParsedOptions] = useState<DropdownOption[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);  // 独自の state を使用
  const dropdownRef = useRef<HTMLDivElement>(null);

  // @r2wc が disabled 属性を正しく渡さないため、直接属性をチェック
  useEffect(() => {
    // Web Component 要素を取得
    const container = dropdownRef.current?.closest('react-dropdown');
    if (!container) return;

    // 初期状態をチェック
    setIsDisabled(container.hasAttribute('disabled'));

    // 属性の変更を監視
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'disabled') {
          setIsDisabled(container.hasAttribute('disabled'));
        }
      });
    });

    observer.observe(container, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    if (!isDisabled) {
      e.stopPropagation();
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (e: React.MouseEvent, option: DropdownOption) => {
    if (!isDisabled) {
      e.stopPropagation();
      setSelectedValue(option.value);
      setIsOpen(false);
      if (onChange) {
        onChange(option.value, option);
      }
    }
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={`${styles.button} ${isDisabled ? styles.buttonDisabled : ''}`}
        onClick={handleToggle}
        disabled={isDisabled}
        type="button"
      >
        {/* ... */}
      </button>
      {/* ... */}
    </div>
  );
}
```

## 技術的な詳細

### MutationObserver とは

MutationObserver は、DOM の変更を監視するブラウザ API です：

```typescript
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'disabled') {
      // disabled 属性が変更された
      const isDisabled = (mutation.target as HTMLElement).hasAttribute('disabled');
      console.log('disabled changed:', isDisabled);
    }
  });
});

// 監視開始
observer.observe(element, { attributes: true });

// 監視停止
observer.disconnect();
```

### なぜ MutationObserver が必要なのか

**@r2wc の問題点**：

1. HTML 属性 → React props の変換処理にバグがある
2. boolean 属性 `disabled=""` を `false` に変換してしまう
3. ライブラリ側の問題なので、コンポーネント側で対処する必要がある

**MutationObserver の利点**：

1. DOM 属性を直接監視できる（ライブラリの変換を経由しない）
2. 属性の変更をリアルタイムで検知できる
3. React の state と同期できる

### HTML Boolean 属性の仕様

W3C の仕様では、boolean 属性は以下のように定義されています：

> The presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.

つまり：
- 属性が**存在する** = `true`（値は何でもよい）
- 属性が**存在しない** = `false`

```html
<!-- すべて disabled = true -->
<input disabled>
<input disabled="">
<input disabled="disabled">
<input disabled="true">

<!-- disabled = false -->
<input>
```

JavaScript での確認方法：

```javascript
element.hasAttribute('disabled')  // ✅ 正しい方法
element.getAttribute('disabled')  // ⚠️ 値を取得（空文字列の場合あり）
element.disabled                  // ⚠️ IDL属性（ライブラリの処理を経由）
```

## 動作確認

修正後、以下の動作を確認：

### Storybook での確認

1. ✅ Default ストーリー: ドロップダウンが正常に動作
2. ✅ Disabled ストーリー: ドロップダウンが無効化される
   - ボタンがグレーアウト
   - クリックしても反応しない
   - カーソルが `not-allowed`

### 各デモでの確認

1. ✅ React demo: `disabled` 属性が正しく機能
2. ✅ VanillaJS demo: `disabled` 属性が正しく機能
3. ✅ Rails demo: `disabled` 属性が正しく機能
4. ✅ Go demo: `disabled` 属性が正しく機能

### JavaScript での動的な切り替え

```javascript
const dropdown = document.querySelector('react-dropdown');

// 無効化
dropdown.setAttribute('disabled', '');

// 有効化
dropdown.removeAttribute('disabled');
```

## まとめ

### Svelte の問題

- **問題**: `disabled` prop が文字列として渡されるが、boolean として処理していた
- **原因**: Web Components の boolean 属性は文字列で渡される
- **解決**: `$derived` で明示的に boolean に変換

### React の問題

- **問題**: `@r2wc` が boolean 属性を誤変換する
- **原因**: `@r2wc/react-to-web-component` ライブラリのバグ
- **解決**: MutationObserver で DOM 属性を直接監視

### 学んだこと

1. **Web Components の boolean 属性は特殊**：存在/非存在で true/false を表現
2. **ライブラリの変換処理に依存しない**：必要に応じて DOM 属性を直接チェック
3. **MutationObserver は強力**：DOM の変更を確実に検知できる
4. **W3C 仕様の理解が重要**：フレームワークのドキュメントだけでは不十分

## 関連ドキュメント

- [React Web Component Props](./react-webcomponent-props.md) - React の props 設定問題
- [Dropdown イベント伝播問題](./dropdown-event-propagation.md) - stopPropagation の使用方法
- [HTML Boolean Attributes - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes)
- [MutationObserver - MDN](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
