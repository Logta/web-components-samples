# React Web Component のスタイルが適用されない

## 問題の概要

Rails/Go demoでReact Web Componentを使用すると、CSS Modulesで定義したスタイルが適用されません：

```html
<!-- スタイルが当たっていない状態 -->
<react-counter count="0"></react-counter>
```

ボタンやレイアウトが意図したデザインにならず、デフォルトのブラウザスタイルで表示されてしまいます。

## 発生状況

- **環境**: Rails demo / Go demo（本番環境想定）
- **タイミング**: ブラウザでページを開いたとき
- **影響範囲**: React Web Componentのみ（Vanilla JSとLitは正常）
- **症状**: CSS Modulesのスタイルが適用されない

## 根本原因

### 1. React Web ComponentはShadow DOMを使わない

**Vanilla JSとLitの場合:**
```typescript
// Shadow DOM内にスタイルを注入
class MyCounter extends HTMLElement {
  render(): void {
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>  // ✅ スタイルが含まれる
      <div class="counter">...</div>
    `;
  }
}
```

**Reactの場合:**
```typescript
// グローバルDOMに直接レンダリング
function CounterComponent() {
  return (
    <div className={styles.container}>  // ❌ CSSは含まれない
      <div className={styles.counter}>...</div>
    </div>
  );
}
```

### 2. ViteのライブラリモードでCSSが自動的にバンドルされない

**開発環境（React/VanillaJS demo）:**
```typescript
// Vite dev serverがCSSファイルを配信
import '@web-components-samples/react';  // ← CSSも自動的に読み込まれる
```

**本番環境（Rails/Go demo）:**
```html
<!-- JSファイルのみを配信 -->
<script type="module" src="/components/react.js"></script>
<!-- CSSファイルがない！ -->
```

### 3. CSS Modulesはクラス名を生成するだけ

CSS Modulesのビルド結果：

```typescript
// ビルド前
import styles from './react-counter.module.css';
<div className={styles.container}>

// ビルド後
<div className="_container_3e8r5_1">  // ← ハッシュ化されたクラス名
```

しかし、**CSSの配信は別途必要**です。

## 解決策の比較

### オプション1: CSSファイルを別途配信（従来のアプローチ）

```html
<!-- HTMLで明示的にCSSを読み込む -->
<link rel="stylesheet" href="/components/web-components-samples.css">
<script type="module" src="/components/react.js"></script>
```

**メリット:**
- 標準的なアプローチ
- CSSのキャッシュが効く

**デメリット:**
- 2ファイル必要（JSとCSS）
- 読み込み順序に注意が必要
- FOUC（Flash of Unstyled Content）のリスク

### オプション2: JSバンドルにCSSを含めて実行時に注入（採用）

```typescript
// CSSをJSバンドルに含める
import cssText from './react-counter.module.css?inline';

// 実行時にグローバルに注入
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
- FOUCのリスクがない
- CDNやnpmパッケージとして配布しやすい

**デメリット:**
- JSバンドルサイズが若干大きくなる（約0.5KB）
- グローバルスタイルになる（ただしCSS Modulesでクラス名はハッシュ化）

## 解決手順

### ステップ1: `?inline` importでCSSをJSバンドルに含める

```typescript
// packages/react/src/react-counter.tsx
import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import styles from './react-counter.module.css';       // CSS Modulesのクラス名
import cssText from './react-counter.module.css?inline'; // ✅ CSS文字列

interface CounterComponentProps {
  count?: number;
}

function CounterComponent({ count: initialCount = 0 }: CounterComponentProps) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  // ✅ ステップ2: CSSをグローバルに注入（一度だけ）
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

const ReactCounterElement = reactToWebComponent(CounterComponent, React, ReactDOMClient);

if (!customElements.get('react-counter')) {
  customElements.define('react-counter', ReactCounterElement);
}

export default CounterComponent;
export { ReactCounterElement };
```

### ステップ2: TypeScript型定義を追加

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

### ステップ3: パッケージをビルド

```bash
cd packages/react
pnpm build
```

### ステップ4: Rails/Goデモのコンポーネントを再生成

```bash
# Rails demo
cd demo/rails
./setup_components.sh

# Go demo
cd demo/go
./setup_components.sh
```

### ステップ5: HTMLでCSSファイルを読み込む（オプション）

Viteが`web-components-samples.css`も生成するため、明示的に読み込むこともできます：

```html
<!-- demo/go/templates/layout.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{.Title}}</title>

    <!-- Web Components CSS -->
    <link rel="stylesheet" href="/static/components/web-components-samples.css">

    <!-- Web Components -->
    <script type="module" src="/static/components/vanilla.js"></script>
    <script type="module" src="/static/components/react.js"></script>
    <script type="module" src="/static/components/lit.js"></script>
</head>
<body>
    {{template "content" .}}
</body>
</html>
```

```erb
<!-- demo/rails/app/views/layouts/application.html.erb -->
<!DOCTYPE html>
<html>
  <head>
    <title>Rails Demo - Web Components</title>
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>
    <%= stylesheet_link_tag "application" %>

    <!-- Web Components CSS -->
    <link rel="stylesheet" href="/components/web-components-samples.css">

    <!-- Web Components -->
    <script type="module" src="/components/vanilla.js"></script>
    <script type="module" src="/components/react.js"></script>
    <script type="module" src="/components/lit.js"></script>
  </head>
  <body>
    <%= yield %>
  </body>
</html>
```

## ビルド結果の確認

### 生成されたファイル

```bash
# Rails demo
demo/rails/public/components/
├── vanilla.js                    (1.61 KB, gzip: 0.79 KB)
├── react.js                      (324.52 KB, gzip: 74.83 KB)  ← CSSが含まれる
├── lit.js                        (22.38 KB, gzip: 7.29 KB)
└── web-components-samples.css    (0.54 KB, gzip: 0.31 KB)

# Go demo
demo/go/static/components/
├── vanilla.js                    (1.61 KB, gzip: 0.79 KB)
├── react.js                      (324.52 KB, gzip: 74.83 KB)  ← CSSが含まれる
├── lit.js                        (22.38 KB, gzip: 7.29 KB)
└── web-components-samples.css    (0.54 KB, gzip: 0.31 KB)
```

### CSSファイルの中身

```css
/* web-components-samples.css */
._container_3e8r5_1{display:block;padding:20px;border:2px solid #61dafb;border-radius:8px;margin:10px 0;background:#f0f9ff}._counter_3e8r5_10{display:flex;align-items:center;gap:15px;font-size:18px}._button_3e8r5_17{padding:8px 16px;font-size:16px;border:1px solid #61dafb;background:#61dafb;color:#000;border-radius:4px;cursor:pointer;transition:background .2s}._button_3e8r5_17:hover{background:#4fa8c5}._count_3e8r5_10{font-weight:700;min-width:40px;text-align:center;font-size:24px;color:#333}._label_3e8r5_40{color:#666;font-size:14px}
```

CSS Modulesのハッシュ化されたクラス名（`_container_3e8r5_1`など）が含まれています。

### react.jsバンドル内のCSS注入コード

```bash
# react.jsに含まれているか確認
grep -o "react-counter-styles" demo/go/static/components/react.js
# 出力: react-counter-styles

grep -o 'document\.createElement("style")' demo/go/static/components/react.js
# 出力: document.createElement("style")
```

## 実行時の動作

1. **JSファイルが読み込まれる**
   ```html
   <script type="module" src="/components/react.js"></script>
   ```

2. **React Componentがマウントされる**
   ```javascript
   customElements.define('react-counter', ReactCounterElement);
   ```

3. **useEffectが実行される**
   ```javascript
   useEffect(() => {
     const styleId = 'react-counter-styles';
     if (!document.getElementById(styleId)) {
       const styleElement = document.createElement('style');
       styleElement.id = styleId;
       styleElement.textContent = cssText;  // CSSを注入
       document.head.appendChild(styleElement);
     }
   }, []);
   ```

4. **スタイルがDOMに追加される**
   ```html
   <head>
     <style id="react-counter-styles">
       ._container_3e8r5_1{display:block;padding:20px;...}
     </style>
   </head>
   ```

5. **コンポーネントにスタイルが適用される**
   ```html
   <react-counter>
     <div class="_container_3e8r5_1">
       <div class="_counter_3e8r5_10">...</div>
     </div>
   </react-counter>
   ```

## なぜVanilla JSとLitは問題ないのか？

### Vanilla JS

```typescript
class MyCounter extends HTMLElement {
  render(): void {
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>  // ← スタイルがコンポーネント内に含まれる
      <div class="counter">...</div>
    `;
  }
}
```

- Shadow DOM内にスタイルを直接注入
- 外部CSSファイル不要

### Lit

```typescript
export class LitCounter extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;  // ← Litが自動的にShadow DOMに注入

  render() {
    return html`<div class="counter">...</div>`;
  }
}
```

- Litフレームワークが自動的にShadow DOMを作成
- `static styles`で定義したCSSを自動的に注入

### React

```typescript
function CounterComponent() {
  return (
    <div className={styles.container}>  // ← CSSは含まれない
      <div className={styles.counter}>...</div>
    </div>
  );
}
```

- Shadow DOMを使わない
- CSS Modulesはクラス名を生成するだけ
- **手動でCSSを配信する必要がある**

## まとめ

- **問題**: Rails/Go demoでReact Web ComponentのCSS Modulesスタイルが適用されない
- **原因1**: React Web ComponentはShadow DOMを使わない
- **原因2**: ViteのライブラリモードでCSSが自動的にバンドルされない
- **原因3**: CSS Modulesはクラス名を生成するだけでCSSの配信は別途必要
- **解決策**: `?inline` importでCSSをJSバンドルに含め、`useEffect`で実行時に注入
- **結果**: JSファイル1つでスタイルも含まれ、どこでも動作する

## 関連ドキュメント

- [なぜReact Web ComponentだけCSS注入が必要なのか？](../architecture/explanation-react-css-injection.md)
- [GEMINI.md](../GEMINI.md#4-react-web-componentのcss注入)
- [packages/react仕様](../.gemini/rules/packages.md#packagesreact)
