# なぜReact Web ComponentだけCSS注入が必要なのか？

このドキュメントでは、React Web Componentで明示的なCSS注入が必要な理由を、Vanilla JSとLitとの比較を通じて説明します。

## 3つのアプローチの比較

### 1. Vanilla JS - Shadow DOMでカプセル化

```typescript
class MyCounter extends HTMLElement {
  private _count: number = 0;
  declare shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM作成
  }

  render(): void {
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>  // ← Shadow DOM内にスタイルを直接注入
      <div class="counter">
        <div class="label">Vanilla JS Counter:</div>
        <button class="decrement">-</button>
        <span class="count">${this._count}</span>
        <button class="increment">+</button>
      </div>
    `;
  }
}

customElements.define('my-counter', MyCounter);
```

**特徴:**
- **Shadow DOM**を使用しているため、スタイルはコンポーネント内部にカプセル化される
- `innerHTML`でスタイルとマークアップを同時に注入
- 外部のCSSファイル不要
- スタイルの衝突がない（Shadow DOMの境界でスコープが分離される）

---

### 2. Lit - 自動的にShadow DOMを作成

```typescript
import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './lit-counter.css?inline';

export class LitCounter extends LitElement {
  static styles = css`${unsafeCSS(styles)}`; // ← Litが自動的にShadow DOMに注入

  @property({ type: Number })
  count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  render() {
    return html`
      <div class="counter">
        <div class="label">Lit Counter:</div>
        <button @click=${this.decrement}>-</button>
        <span class="count">${this.count}</span>
        <button @click=${this.increment}>+</button>
      </div>
    `;
  }
}

customElements.define('lit-counter', LitCounter);
```

**特徴:**
- Litフレームワークが**自動的にShadow DOM**を作成
- `static styles`で定義したCSSを自動的にShadow DOM内に注入してくれる
- Declarativeなスタイル定義
- フレームワークがスタイル管理を担当

---

### 3. React - Shadow DOMなし（問題あり）

```typescript
import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';
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

  // ⚠️ CSSをグローバルに注入（一度だけ）- これが必要！
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
    <div className={styles.container}>  // ← CSS Modulesのクラス名
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

const ReactCounterElement = reactToWebComponent(CounterComponent, React, ReactDOMClient);

if (!customElements.get('react-counter')) {
  customElements.define('react-counter', ReactCounterElement);
}

export default CounterComponent;
export { ReactCounterElement };
```

**問題点:**
- `react-to-webcomponent`は**Shadow DOMを作成しない**
- 通常のReactアプリのように、グローバルDOMに直接レンダリングされる
- CSS Modulesはビルド時にクラス名を生成するだけで、**CSSの配信は別途必要**
- スタイルが適用されないと、UIが崩れる

**なぜShadow DOMを使わないのか？**
- `react-to-webcomponent`ライブラリの設計上の制約
- ReactのコンポーネントツリーをそのままWeb Componentに変換するため
- Shadow DOMを使うと、Reactのイベントシステムやコンテキストが複雑になる

---

## ViteのライブラリモードでCSS Modulesを使う場合の挙動

### React/VanillaJS demo（開発環境）

```typescript
// demo/react/src/App.tsx
import '@web-components-samples/vanilla';
import '@web-components-samples/react';  // ← node_modulesから読み込み
import '@web-components-samples/lit';
```

**動作:**
- Vite dev serverが動いている
- CSSファイル（`react-counter.css`）が自動的に配信される
- HMR（Hot Module Replacement）でCSSの変更も即座に反映
- **問題なし！**

---

### Rails/Go demo（本番環境想定）

```html
<!-- demo/go/templates/layout.html -->
<script type="module" src="/static/components/vanilla.js"></script>
<script type="module" src="/static/components/react.js"></script>
<script type="module" src="/static/components/lit.js"></script>
```

**問題:**
- **JSファイルのみ**をバンドルして配信
- CSSファイルは別途配信する必要がある
- Viteのライブラリモードでは**CSSが自動的にJSに含まれない**
- `bundle-components.config.ts`でビルドしたJSファイルにはCSSが含まれていない

**解決策の選択肢:**

#### オプション1: CSSファイルを別途配信（従来のアプローチ）

```html
<link rel="stylesheet" href="/static/components/web-components-samples.css">
<script type="module" src="/static/components/react.js"></script>
```

**メリット:**
- 標準的なアプローチ
- CSSのキャッシュが効く

**デメリット:**
- 2ファイル必要（JSとCSS）
- HTMLで両方を読み込む必要がある
- 読み込み順序を間違えるとスタイルが適用されないタイミングがある（FOUC: Flash of Unstyled Content）

#### オプション2: JSバンドルにCSSを含めて実行時に注入（今回採用）

```typescript
// packages/react/src/react-counter.tsx
import cssText from './react-counter.module.css?inline';

useEffect(() => {
  const styleId = 'react-counter-styles';
  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = cssText;
    document.head.appendChild(styleElement);
  }
}, []);
```

**メリット:**
- **1ファイルで完結**（JSのみでスタイルも含む）
- HTMLではJSを読み込むだけでOK
- FOUCのリスクがない（JSがロードされた瞬間にスタイルも注入される）
- CDNやnpmパッケージとして配布しやすい

**デメリット:**
- JSバンドルサイズが若干大きくなる（約0.5KB）
- グローバルスタイルになる（ただしCSS Modulesでクラス名はハッシュ化されているので衝突しにくい）

---

## 今回採用した解決策の詳細

### ハイブリッドアプローチ

実際には**両方のアプローチを併用**しています：

```typescript
// 1. JSバンドル内にCSSを含める（`?inline` import）
import styles from './react-counter.module.css';       // CSS Modulesのクラス名
import cssText from './react-counter.module.css?inline'; // CSS文字列

// 2. 実行時にグローバルに注入
useEffect(() => {
  const styleId = 'react-counter-styles';
  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = cssText; // ← CSSをDOMに注入
    document.head.appendChild(styleElement);
  }
}, []);
```

**さらに:**
- Viteが`web-components-samples.css`も生成してくれる
- HTMLで読み込むこともできる（冗長だが、明示的）

```html
<!-- オプション: 明示的にCSSファイルを読み込む -->
<link rel="stylesheet" href="/static/components/web-components-samples.css">
```

**利点:**
- JSだけで動作する（CSSファイルなしでもOK）
- CSSファイルも生成されるので、パフォーマンス最適化したい場合は別途読み込める
- 柔軟性が高い

---

## TypeScript型定義

`?inline` importを使用するため、型定義が必要です：

```typescript
// packages/react/src/vite-env.d.ts
/// <reference types="vite/client" />

// ?inline importの型定義
declare module '*.css?inline' {
  const content: string;
  export default content;
}

declare module '*.module.css?inline' {
  const content: string;
  export default content;
}
```

これにより、TypeScriptが`import cssText from './react-counter.module.css?inline'`を正しく認識します。

---

## まとめ

| アプローチ | スタイルの配置 | CSS配信方法 | Shadow DOM | スタイルスコープ |
|-----------|---------------|------------|-----------|---------------|
| **Vanilla JS** | Shadow DOM内 | JS内に含まれる（innerHTML） | ✅ あり | カプセル化 |
| **Lit** | Shadow DOM内 | Litが自動注入 | ✅ あり | カプセル化 |
| **React** | グローバルDOM | **手動でJSに含めて注入が必要** | ❌ なし | CSS Modulesでハッシュ化 |

### なぜReactだけ特別なのか？

1. **`react-to-webcomponent`はShadow DOMを作成しない**
   - ReactのコンポーネントツリーをそのままWeb Componentに変換
   - グローバルDOMに直接レンダリング

2. **CSS Modulesはクラス名を生成するだけ**
   - ビルド時にユニークなクラス名を生成
   - CSSの配信は別途必要

3. **Viteのライブラリモードの制限**
   - ライブラリモードではCSSが自動的にJSに含まれない
   - 開発環境とは動作が異なる

### 解決策

**`?inline` importと実行時注入**により、JSバンドル1ファイルでスタイルも含めることができます：

```typescript
import cssText from './react-counter.module.css?inline';

useEffect(() => {
  const styleId = 'react-counter-styles';
  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = cssText;
    document.head.appendChild(styleElement);
  }
}, []);
```

これにより、Rails/Go環境でも**JSファイルを読み込むだけ**でスタイルが適用されます！

---

## 関連ドキュメント

- [GEMINI.md](../GEMINI.md#4-react-web-componentのcss注入) - プロジェクトガイド
- [.gemini/rules/packages.md](../.gemini/rules/packages.md#packagesreact) - パッケージ仕様
- [.gemini/rules/demo.md](../.gemini/rules/demo.md) - デモ仕様
