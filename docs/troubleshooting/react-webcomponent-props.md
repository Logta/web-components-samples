# React Web Component で属性が props に渡されない

## 問題の概要

`react-to-webcomponent` で作成した Web Component で、HTML 属性を設定しても React コンポーネントの props に渡されません：

```html
<!-- HTML属性を設定 -->
<react-dropdown
  options='[{"label":"Apple","value":"apple"}]'
  selected=""
  placeholder="Select a fruit"
></react-dropdown>
```

```javascript
// Reactコンポーネント内では空の配列になる
console.log('[ReactDropdown] options prop changed:', typeof options, options);
// => object []  （空の配列）
```

結果として、ドロップダウンに選択肢が表示されず、クリックしても何も起こりません。

## 発生状況

- **環境**: すべての環境（React demo、Storybook、Rails/Go demo）
- **タイミング**: Web Component の初期化時
- **影響範囲**: `react-to-webcomponent` で作成したすべての Web Component
- **症状**: HTML 属性が React props に変換されない

## 根本原因

### 1. `react-to-webcomponent` はデフォルトで属性を監視しない

**問題のコード:**
```typescript
const ReactDropdownElement = reactToWebComponent(ReactDropdown, React, ReactDOMClient);
```

`react-to-webcomponent` は、**明示的に `props` オプションを指定しない限り、HTML 属性を監視しません**。そのため、以下のような挙動になります：

```javascript
// HTML: <react-dropdown options='[...]' selected="apple"></react-dropdown>

// Reactコンポーネント内:
function ReactDropdown({ options, selected }) {
  console.log(options);  // => [] (空の配列、デフォルト値)
  console.log(selected); // => "" (空文字列、デフォルト値)
}
```

### 2. Web Components の `observedAttributes` が設定されていない

Web Components API では、`observedAttributes` に指定された属性のみが `attributeChangedCallback` で監視されます：

```javascript
class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ['options', 'selected']; // これが必要！
  }
}
```

`react-to-webcomponent` の `props` オプションを指定することで、内部的にこの `observedAttributes` が正しく設定されます。

## 解決策

### ステップ1: `reactToWebComponent` に `props` オプションを追加

```typescript
const ReactDropdownElement = reactToWebComponent(
  ReactDropdown,
  React,
  ReactDOMClient,
  {
    props: {
      options: 'string',    // HTML属性として文字列を受け取る
      selected: 'string',
      placeholder: 'string',
      disabled: 'boolean',
    }
  }
);
```

**`props` オプションの型指定:**
- `'string'`: HTML 属性を文字列として受け取る
- `'boolean'`: HTML 属性をブール値として受け取る（存在するか否か）
- `'number'`: HTML 属性を数値に変換して受け取る

### ステップ2: React コンポーネントで型を適切に処理

```typescript
interface DropdownProps {
  options?: string | DropdownOption[]; // JSON string or array
  selected?: string;
  placeholder?: string;
  disabled?: boolean;
}

function ReactDropdown({ options = [], ... }: DropdownProps) {
  const [parsedOptions, setParsedOptions] = useState<DropdownOption[]>([]);

  useEffect(() => {
    let newOptions: DropdownOption[] = [];

    if (typeof options === 'string') {
      // HTML属性からの文字列をパース
      try {
        const parsed = JSON.parse(options);
        newOptions = Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        console.error('Failed to parse options JSON:', e);
        newOptions = [];
      }
    } else if (Array.isArray(options)) {
      // 直接配列が渡された場合（React内で使用する場合）
      newOptions = options;
    }

    setParsedOptions(newOptions);
  }, [options]);

  // 残りの実装...
}
```

### ステップ3: Storybook で正しく属性を設定

```typescript
export const Default: Story = {
  args: {
    options: JSON.stringify(fruitOptions), // 配列をJSON文字列に変換
    selected: '',
    placeholder: 'Select a fruit',
    disabled: false,
  },
  render: (args: ReactDropdownProps) => {
    const element = document.createElement('react-dropdown') as HTMLElement;
    element.setAttribute('options', args.options);  // setAttribute を使用
    element.setAttribute('selected', args.selected);
    element.setAttribute('placeholder', args.placeholder);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
    return element;
  },
};
```

**重要なポイント:**
- `element.options = args.options` ではなく `element.setAttribute('options', args.options)` を使用
- オブジェクト/配列は `JSON.stringify()` で文字列化

## 動作確認

修正後、コンソールで以下のログが表示されることを確認：

```javascript
[ReactDropdown] options prop changed: string [{"label":"Apple","value":"apple"}...]
[ReactDropdown] Parsed options: (5) [{…}, {…}, {…}, {…}, {…}]
[ReactDropdown] Render - isOpen: false parsedOptions.length: 5
```

ドロップダウンをクリックすると選択肢が正しく表示されます。

## 他のコンポーネントへの適用

### Counter コンポーネント（数値属性）

```typescript
const ReactCounterElement = reactToWebComponent(
  CounterComponent,
  React,
  ReactDOMClient,
  {
    props: {
      count: 'number', // 数値として受け取る
    }
  }
);
```

### Modal コンポーネント（複数の型）

```typescript
const ReactModalElement = reactToWebComponent(
  ReactModal,
  React,
  ReactDOMClient,
  {
    props: {
      isopen: 'boolean',
      title: 'string',
      message: 'string',
    }
  }
);
```

## まとめ

- **問題**: `react-to-webcomponent` はデフォルトで HTML 属性を props に変換しない
- **原因**: `props` オプションが指定されていないため、`observedAttributes` が設定されない
- **解決**: `reactToWebComponent()` の第4引数に `{ props: { ... } }` を追加
- **結果**: HTML 属性が正しく React props に渡され、Web Component が正常に動作

## 関連ドキュメント

- [react-to-webcomponent - npm](https://www.npmjs.com/package/react-to-webcomponent)
- [React CSS not applied](./react-css-not-applied.md) - React Web Component のスタイル問題
- [Web Components - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
