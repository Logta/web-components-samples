# トラブルシューティング #3: React Web Component の TypeScript エラー

## 問題の概要

`react-to-webcomponent`を使用してReactコンポーネントをWeb Componentに変換する際、TypeScriptの型エラーが発生します：

```typescript
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';

const ReactCounterElement = reactToWebComponent(CounterComponent, React, ReactDOM);
//                                                                            ^^^^^^^
// エラー: 型 'typeof import("react-dom")' の引数を型 '...' のパラメーターに割り当てることはできません
```

## 発生状況

- **環境**: React 19以降を使用している場合
- **タイミング**: `reactToWebComponent()`の第3引数に`ReactDOM`を渡したとき
- **原因**: React 19で`ReactDOM`のAPIが変更された

## 根本原因

### React 18以前と19以降のAPI変更

#### React 18以前

```typescript
import ReactDOM from 'react-dom';

// ReactDOM.render() APIを使用
ReactDOM.render(<App />, document.getElementById('root'));
```

`react-to-webcomponent`は内部で`ReactDOM.render()`を使用していました。

#### React 19以降

```typescript
import { createRoot } from 'react-dom/client';

// createRoot() APIを使用
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

React 19では、`ReactDOM.render()`が非推奨となり、新しい`createRoot()` APIが標準になりました。

### react-to-webcomponentの対応

`react-to-webcomponent` v2.0以降は、React 19の新しいAPIに対応しています。しかし、**第3引数の型が変更**されました：

**React 18用:**
```typescript
reactToWebComponent(Component, React, ReactDOM)
```

**React 19用:**
```typescript
import * as ReactDOMClient from 'react-dom/client';
reactToWebComponent(Component, React, ReactDOMClient)
```

## 解決策

### `react-dom/client`をインポート

```typescript
import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';  // ✅ react-dom/client をインポート
import reactToWebComponent from 'react-to-webcomponent';
import styles from './react-counter.module.css';
import cssText from './react-counter.module.css?inline';

interface CounterComponentProps {
  count?: number;
}

function CounterComponent({ count: initialCount = 0 }: CounterComponentProps) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  useEffect(() => {
    const styleId = 'react-counter-styles';
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = cssText;
      document.head.appendChild(styleElement);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <div className={styles.label}>React Counter:</div>
        <button className={styles.button} onClick={() => setCount(count - 1)}>
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button className={styles.button} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

// ✅ ReactDOMClient を第3引数に渡す
const ReactCounterElement = reactToWebComponent(CounterComponent, React, ReactDOMClient);

if (!customElements.get('react-counter')) {
  customElements.define('react-counter', ReactCounterElement);
}

export default CounterComponent;
export { ReactCounterElement };
```

### インポート方法の比較

| インポート方法 | React 18 | React 19 | react-to-webcomponent |
|--------------|---------|---------|----------------------|
| `import ReactDOM from 'react-dom'` | ✅ 動作 | ⚠️ 非推奨 | ❌ 型エラー |
| `import { createRoot } from 'react-dom/client'` | ✅ 動作 | ✅ 推奨 | ❌ 型エラー |
| `import * as ReactDOMClient from 'react-dom/client'` | ✅ 動作 | ✅ 推奨 | ✅ 動作 |

## なぜ`import *`が必要なのか？

### react-to-webcomponentの期待する型

`react-to-webcomponent`の型定義（簡略版）：

```typescript
export function reactToWebComponent<P>(
  component: React.ComponentType<P>,
  react: typeof React,
  reactDOM: {
    createRoot: (container: Element) => {
      render: (element: React.ReactElement) => void;
      unmount: () => void;
    };
  }
): typeof HTMLElement;
```

第3引数は、`createRoot`メソッドを持つ**オブジェクト**である必要があります。

### 各インポート方法の違い

```typescript
// ❌ 名前付きインポート - オブジェクトではなく関数
import { createRoot } from 'react-dom/client';
console.log(typeof createRoot);  // "function"

// ✅ 名前空間インポート - オブジェクト
import * as ReactDOMClient from 'react-dom/client';
console.log(typeof ReactDOMClient);  // "object"
console.log(ReactDOMClient.createRoot);  // [Function: createRoot]
```

## package.jsonの依存関係

React 19とreact-to-webcomponent v2を使用する場合：

```json
{
  "dependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "react-to-webcomponent": "^2.0.1"
  }
}
```

### バージョンの互換性

| react | react-dom | react-to-webcomponent | インポート方法 |
|-------|-----------|---------------------|--------------|
| 18.x | 18.x | 1.x | `import ReactDOM from 'react-dom'` |
| 18.x | 18.x | 2.x | `import * as ReactDOMClient from 'react-dom/client'` |
| 19.x | 19.x | 2.x | `import * as ReactDOMClient from 'react-dom/client'` |

## よくある間違い

### 間違い1: ReactDOMをそのまま渡す

```typescript
// ❌ React 19では型エラー
import ReactDOM from 'react-dom';
const Element = reactToWebComponent(Component, React, ReactDOM);
```

### 間違い2: 名前付きインポート

```typescript
// ❌ 型エラー（オブジェクトではない）
import { createRoot } from 'react-dom/client';
const Element = reactToWebComponent(Component, React, createRoot);
```

### 間違い3: デフォルトインポート

```typescript
// ❌ react-dom/clientにはデフォルトエクスポートがない
import ReactDOMClient from 'react-dom/client';
const Element = reactToWebComponent(Component, React, ReactDOMClient);
```

### 正解: 名前空間インポート

```typescript
// ✅ 正しい
import * as ReactDOMClient from 'react-dom/client';
const Element = reactToWebComponent(Component, React, ReactDOMClient);
```

## 実行時の動作確認

ビルド後のコードがどのように動作するか確認できます：

```javascript
// react-to-webcomponent内部の動作（簡略版）
class ReactWebComponent extends HTMLElement {
  connectedCallback() {
    // ReactDOMClient.createRoot() を使用
    const root = ReactDOMClient.createRoot(this);
    root.render(React.createElement(Component, this.props));
  }

  disconnectedCallback() {
    this.root.unmount();
  }
}
```

## まとめ

- **問題**: React 19で`reactToWebComponent()`の第3引数の型エラー
- **原因**: React 19でAPIが`ReactDOM.render()`から`createRoot()`に変更
- **解決**: `import * as ReactDOMClient from 'react-dom/client'`を使用
- **理由**: react-to-webcomponentは`createRoot`メソッドを持つオブジェクトを期待

## 関連ドキュメント

- [CLAUDE.md](../CLAUDE.md#1-react-web-component-実装)
- [packages/react仕様](../.claude/rules/packages.md#packagesreact)
- [react-to-webcomponent公式ドキュメント](https://github.com/bitovi/react-to-webcomponent)
