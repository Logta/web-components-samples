# Dropdown でクリックしても選択肢が表示されない

## 問題の概要

React と Svelte の Dropdown コンポーネントで、ドロップダウンボタンをクリックしても選択肢が表示されません：

```html
<!-- クリックしても何も起こらない -->
<react-dropdown options='[...]'></react-dropdown>
<svelte-dropdown options='[...]'></svelte-dropdown>
```

開発者ツールで観察すると、一瞬だけ選択肢が表示されて即座に閉じているように見えます。

## 発生状況

- **環境**: すべての環境（Storybook、React demo、VanillaJS demo、Rails/Go demo）
- **影響範囲**: React と Svelte の Dropdown コンポーネント
- **タイミング**: ドロップダウンボタンをクリックした時
- **症状**: 選択肢が一瞬表示されて即座に閉じる

## 根本原因

### イベント伝播（Event Propagation）の問題

JavaScript のイベントは、以下の順序で処理されます：

1. **キャプチャフェーズ**: document → 親要素 → 子要素
2. **ターゲットフェーズ**: イベントが発生した要素
3. **バブリングフェーズ**: 子要素 → 親要素 → document

問題のコードでは、以下の流れでイベントが処理されていました：

```
ユーザーがボタンをクリック
    ↓
① ボタンの onclick イベント発火
   → isOpen = true に設定
    ↓
② イベントがバブリング（親要素に伝播）
    ↓
③ document の click イベント発火
   → handleClickOutside が実行される
   → dropdownElement の外側のクリックと判定
   → isOpen = false に設定  ← ここで閉じられる！
    ↓
結果: ドロップダウンが一瞬開いて即座に閉じる
```

### コード例（問題のある実装）

**React の場合:**

```typescript
// ❌ 問題のあるコード
const handleToggle = () => {
  setIsOpen(!isOpen);  // ボタンクリックで開く
};

useEffect(() => {
  if (!isOpen) return;

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);  // 外側クリックで閉じる
    }
  };

  // setTimeout を使っても、イベント伝播は同期的なので間に合わない
  setTimeout(() => {
    document.addEventListener('click', handleClickOutside);
  }, 0);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, [isOpen]);
```

ボタンクリック時のイベント伝播：

1. `handleToggle` が実行されて `isOpen = true`
2. `useEffect` が実行されて `handleClickOutside` リスナーが登録される
3. **しかし、クリックイベントは既にバブリング中**
4. `handleClickOutside` が実行されて `isOpen = false`

**Svelte の場合:**

```typescript
// ❌ 問題のあるコード
function handleToggle() {
  isOpen = !isOpen;  // ボタンクリックで開く
}

$effect(() => {
  if (isOpen) {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
        isOpen = false;  // 外側クリックで閉じる
      }
    };
    // リスナーを即座に登録
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }
});
```

## 解決策

### `event.stopPropagation()` を使用

イベントの伝播を止めることで、`handleClickOutside` が発火しないようにします。

**React の場合:**

```typescript
// ✅ 正しいコード
const handleToggle = (e: React.MouseEvent) => {
  if (!disabled) {
    e.stopPropagation();  // イベント伝播を停止！
    setIsOpen(!isOpen);
  }
};

const handleSelect = (e: React.MouseEvent, option: DropdownOption) => {
  if (!disabled) {
    e.stopPropagation();  // イベント伝播を停止！
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value, option);
    }
  }
};
```

**Svelte の場合:**

```typescript
// ✅ 正しいコード
function handleToggle(event: MouseEvent) {
  if (!disabled) {
    event.stopPropagation();  // イベント伝播を停止！
    isOpen = !isOpen;
  }
}

function handleSelect(event: MouseEvent, option: DropdownOption) {
  if (!disabled) {
    event.stopPropagation();  // イベント伝播を停止！
    selected = option.value;
    isOpen = false;
  }
}
```

HTML 側の変更（Svelte の場合）:

```svelte
<!-- ✅ イベントオブジェクトを渡す -->
<button onclick={handleToggle}>  <!-- 関数参照を渡すと自動的にイベントが渡される -->

<div onclick={(e) => handleSelect(e, option)}>  <!-- 明示的にイベントを渡す -->
```

### イベントフロー（修正後）

```
ユーザーがボタンをクリック
    ↓
① ボタンの onclick イベント発火
   → event.stopPropagation() で伝播を停止
   → isOpen = true に設定
    ↓
② イベントは親要素に伝播しない（ここで止まる）
    ↓
③ document の click イベントは発火しない ✅
    ↓
結果: ドロップダウンが開いたまま！
```

## なぜ `setTimeout(..., 0)` だけでは不十分なのか

React の実装では、`setTimeout(..., 0)` を使ってリスナーの登録を遅延させていました：

```typescript
setTimeout(() => {
  document.addEventListener('click', handleClickOutside);
}, 0);
```

### 問題点

- **クリックイベントの伝播は同期的**: イベントは即座にバブリングする
- **setTimeout は非同期**: 次のイベントループで実行される
- **実行タイミングが不確実**: ブラウザの実装やタイミングに依存する

### 解決策の比較

| 方法 | 確実性 | 理由 |
|------|--------|------|
| `setTimeout(..., 0)` | ❌ 不確実 | イベント伝播は同期的、setTimeout は非同期 |
| `event.stopPropagation()` | ✅ 確実 | イベント伝播そのものを止める |

## 動作確認

修正後、以下の動作を確認：

1. ✅ ドロップダウンボタンをクリックすると選択肢が表示される
2. ✅ 選択肢をクリックすると値が変更される
3. ✅ 外側をクリックするとドロップダウンが閉じる
4. ✅ 無限ループが発生しない

## イベント伝播の詳細

### イベント伝播の3つのフェーズ

```
document (キャプチャ開始)
  ↓
親要素
  ↓
子要素（ボタン） ← ターゲット
  ↓
親要素
  ↓
document (バブリング終了)
```

### `stopPropagation()` の効果

```typescript
button.addEventListener('click', (e) => {
  e.stopPropagation();  // ここで伝播が止まる
  console.log('Button clicked');
});

document.addEventListener('click', () => {
  console.log('Document clicked');  // 実行されない！
});
```

### 他の関連メソッド

- **`stopPropagation()`**: イベント伝播を停止（デフォルト動作は実行）
- **`preventDefault()`**: デフォルト動作を停止（イベント伝播は継続）
- **`stopImmediatePropagation()`**: 同じ要素の他のリスナーも含めて全て停止

## まとめ

- **問題**: `handleClickOutside` がボタンクリックイベントも拾ってしまう
- **原因**: イベントのバブリングにより、document の click リスナーが発火
- **解決**: `event.stopPropagation()` でイベント伝播を停止
- **結果**: ドロップダウンが正しく開閉するようになる

## 関連ドキュメント

- [React Web Component Props](./react-webcomponent-props.md) - React の props 設定問題
- [Event Propagation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
- [Web Components - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
