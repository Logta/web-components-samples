# packages/ - Web Components仕様

Web Componentsを作成するパッケージ群。3つの異なるアプローチでカウンターコンポーネントを実装しています。

## packages/vanilla/

**Vanilla JavaScript Web Component**

### 基本情報

- **コンポーネント名**: `<my-counter>`
- **実装方法**: Custom Elements API + Shadow DOM
- **ビルド出力**: `dist/my-counter.js`

### ファイル構成

```
packages/vanilla/
├── src/
│   ├── my-counter.ts        # メインコンポーネント
│   ├── my-counter.css       # スタイル（Shadow DOM内に注入）
│   └── vite-env.d.ts       # Vite型定義
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 実装の特徴

- **フレームワーク依存なし**: 純粋なWeb標準APIのみを使用
- **属性監視**: `observedAttributes` で `count` 属性を監視
- **イベント委譲**: Shadow Root にイベントリスナーを1つだけ登録し、クリックイベントを効率的に処理
- **Shadow DOM**: スタイルとDOMのカプセル化

### コード例

```typescript
class MyCounter extends HTMLElement {
  private _count: number = 0;
  declare shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes(): string[] {
    return ['count'];
  }

  connectedCallback(): void {
    this.render();
    this.shadowRoot.addEventListener('click', this.handleClick.bind(this));
  }

  private handleClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('increment')) {
      this.count++;
    } else if (target.classList.contains('decrement')) {
      this.count--;
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'count' && oldValue !== newValue) {
      this._count = parseInt(newValue || '0', 10) || 0;
      this.render();
    }
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
    this.setAttribute('count', value.toString());
    this.render();
  }

  render(): void {
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
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

---

## packages/react/

**React to Web Component**

### 基本情報

- **コンポーネント名**: `<react-counter>`
- **実装方法**: React Component + `react-to-webcomponent` ライブラリ
- **ビルド出力**: `dist/react-counter.js`, `dist/react-counter.css`

### ファイル構成

```
packages/react/
├── src/
│   ├── react-counter.tsx              # Reactコンポーネント + Web Component変換
│   ├── react-counter.module.css       # CSS Modules
│   └── react-counter.module.css.d.ts  # CSS Modules型定義
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 依存関係

```json
{
  "dependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "react-to-webcomponent": "^2.0.1"
  }
}
```

### 実装の特徴

- **React Component**: 通常のReactコンポーネントとして実装
- **Web Component変換**: `reactToWebComponent()` でWeb Componentに変換
- **React 19対応**: `react-dom/client` の `createRoot` APIを使用
- **CSS Modules**: スコープ付きスタイリング
- **CSS注入**: `?inline` importでCSSをJSバンドルに含め、実行時にグローバルに注入
- **プロパティ監視**: `useEffect` で `count` propの変更を監視

### コード例

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

  // count propが変更されたら状態を更新
  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  // CSSをグローバルに注入（一度だけ）
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
        <button
          className={styles.button}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button
          className={styles.button}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

// react-to-webcomponentを使ってWeb Componentを作成
const ReactCounterElement = reactToWebComponent(CounterComponent, React, ReactDOMClient);

// Web Componentとして定義
if (!customElements.get('react-counter')) {
  customElements.define('react-counter', ReactCounterElement);
}

export default CounterComponent;
export { ReactCounterElement };
```

### 重要な注意点

**React 19では `react-dom/client` を使用する**

```typescript
// ❌ 誤った実装（TypeScriptエラー）
import ReactDOM from 'react-dom';
const Element = reactToWebComponent(Component, React, ReactDOM);

// ✅ 正しい実装
import * as ReactDOMClient from 'react-dom/client';
const Element = reactToWebComponent(Component, React, ReactDOMClient);
```

---

## packages/lit/

**Lit Framework Web Component**

### 基本情報

- **コンポーネント名**: `<lit-counter>`
- **実装方法**: Lit Element
- **ビルド出力**: `dist/lit-counter.js`

### ファイル構成

```
packages/lit/
├── src/
│   ├── lit-counter.ts       # Litコンポーネント
│   └── lit-counter.css      # スタイル
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 依存関係

```json
{
  "dependencies": {
    "lit": "^3.2.2"
  }
}
```

### 実装の特徴

- **Declarative**: テンプレートリテラルベースのHTML/CSSテンプレート
- **Reactive Properties**: `@property` デコレーターでリアクティブプロパティを定義
- **Shadow DOM**: 自動的にShadow DOMが作成される
- **軽量**: Litは非常に軽量なWeb Componentsライブラリ

### コード例

```typescript
import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './lit-counter.css?inline';

export class LitCounter extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

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

---

## 共通のビルド設定

すべてのパッケージは以下の共通設定を使用します。

### ビルドツール

- **Vite**: モダンなビルドツール
- **TypeScript**: Strict mode有効
- **出力形式**: ES Module (ESM)

### package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

### TypeScript設定

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### Vite設定の共通パターン

```typescript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/component-name.ts'),
      formats: ['es'],
      fileName: 'component-name'
    }
  }
});
```

---

## パッケージの開発ワークフロー

### 1. 開発モード

```bash
cd packages/vanilla  # または react, lit
pnpm dev
```

Vite dev serverが起動し、変更を監視します。

### 2. ビルド

```bash
# 個別パッケージのビルド
cd packages/vanilla
pnpm build

# または、ルートからすべてビルド
pnpm build
```

### 3. プレビュー

```bash
cd packages/vanilla
pnpm preview
```

ビルド済みコンポーネントをプレビューサーバーで確認できます。

---

## 新しいWeb Componentの追加方法

### 1. パッケージディレクトリを作成

```bash
mkdir packages/new-component
cd packages/new-component
```

### 2. package.jsonを作成

```json
{
  "name": "@web-components-samples/new-component",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/new-component.js",
  "module": "./dist/new-component.js",
  "types": "./dist/new-component.d.ts",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

### 3. コンポーネントを実装

`src/new-component.ts` を作成し、実装します。

### 4. pnpm-workspace.yamlに追加

```yaml
packages:
  - 'packages/*'
  - 'demo/*'
```

（通常は `packages/*` で自動的に含まれます）

### 5. デモに追加

各デモの `bundle-components.config.ts` に新しいエントリーを追加（Rails/Go用）：

```typescript
entry: {
  vanilla: resolve(__dirname, '../../packages/vanilla/src/my-counter.ts'),
  react: resolve(__dirname, '../../packages/react/src/react-counter.tsx'),
  lit: resolve(__dirname, '../../packages/lit/src/lit-counter.ts'),
  'new-component': resolve(__dirname, '../../packages/new-component/src/new-component.ts'), // 追加
}
```

---

## トラブルシューティング

### TypeScriptビルドエラー

```bash
# 型チェックのみ実行
pnpm tsc --noEmit
```

### Vite設定の問題

```bash
# Viteキャッシュをクリア
rm -rf node_modules/.vite
pnpm build
```

### CSS Modulesの型定義が生成されない

`*.module.css.d.ts` ファイルを手動で作成：

```typescript
declare const styles: {
  readonly [key: string]: string;
};
export default styles;
```
