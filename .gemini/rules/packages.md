# packages/ - Web Components仕様

Web Componentsを作成するパッケージ群。5つの異なるアプローチでカウンターコンポーネントを実装しています。

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
- **手動でのスロット実装**: スロットを利用するには、`useEffect` などでDOMからスロット要素を検出し、ReactのStateに組み込む追加実装が必要です。
- **CSS Modules**: スкоープ付きスタイリング
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

**`children` は自動的にスロットにマッピングされない**

`preact-custom-element` とは異なり、`react-to-webcomponent` は `props.children` を自動的にスロットに変換しません。スロットを使用するには、`useEffect` などを用いて手動でDOMからスロット要素を検出し、ReactのStateに組み込む必要があります。

詳細は [docs/architecture/explanation-framework-slot-handling.md](../../docs/architecture/explanation-framework-slot-handling.md) を参照してください。

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

## packages/svelte/

**Svelte Web Component**

### 基本情報

- **コンポーネント名**: `<svelte-counter>`
- **実装方法**: Svelte 5 + `<svelte:options customElement>`
- **ビルド出力**: `dist/svelte-counter.js`, `dist/bundle/svelte-counter.js`

### ファイル構成

```
packages/svelte/
├── src/
│   ├── SvelteCounter.svelte     # Svelteコンポーネント
│   └── svelte-counter.ts        # エクスポート用エントリーポイント
├── package.json
├── tsconfig.json
├── vite.config.ts               # 通常のビルド設定
└── vite.config.bundle.ts        # バンドル版ビルド設定
```

### 依存関係

```json
{
  "dependencies": {
    "svelte": "^5.46.1"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^6.2.1",
    "@tsconfig/svelte": "^5.0.6"
  }
}
```

### 実装の特徴

- **Svelte 5 Runes**: `$bindable()`, `$state()`, `$effect()` を使用した最新のリアクティビティAPI
- **customElement オプション**: `<svelte:options customElement="svelte-counter" />` でWeb Component化
- **双方向バインディング**: `$bindable()` で外部からの属性変更をサポート
- **スコープ付きスタイル**: Svelte の `<style>` ブロックで自動スコーピング
- **2つのビルド出力**: 通常版（Svelte外部依存）とバンドル版（Svelte含む）

### コード例

```svelte
<svelte:options customElement="svelte-counter" />

<script lang="ts">
  let { count = $bindable(0) } = $props();
  let currentCount = $state(count);

  $effect(() => {
    currentCount = count;
  });

  function increment() {
    currentCount++;
    count = currentCount;
  }

  function decrement() {
    currentCount--;
    count = currentCount;
  }
</script>

<div class="container">
  <div class="counter">
    <div class="label">Svelte Counter:</div>
    <button type="button" class="button" onclick={decrement}>-</button>
    <span class="count">{currentCount}</span>
    <button type="button" class="button" onclick={increment}>+</button>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 2px solid #ff3e00;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-family: system-ui, -apple-system, sans-serif;
  }

  /* 他のスタイル... */
</style>
```

### ビルド設定

Svelteパッケージは2つのビルド設定を持っています：

**通常版** (`vite.config.ts`):
- Svelteを外部依存として扱う（`external: ['svelte']`）
- 開発環境やpnpm workspaceで使用

**バンドル版** (`vite.config.bundle.ts`):
- Svelteをバンドルに含める
- Rails/Go環境で使用

### 重要な注意点

**Svelte 5のRunes APIを使用**

```typescript
// ❌ Svelte 4以前の方法
export let count = 0;
$: currentCount = count;

// ✅ Svelte 5の方法
let { count = $bindable(0) } = $props();
let currentCount = $state(count);
$effect(() => {
  currentCount = count;
});
```

---

## packages/preact/

**Preact Web Component**

### 基本情報

- **コンポーネント名**: `<preact-counter>`
- **実装方法**: Preact + `preact-custom-element`
- **ビルド出力**: `dist/preact-counter.js`, `dist/preact-counter.css`

### ファイル構成

```
packages/preact/
├── src/
│   ├── preact-counter.tsx              # Preactコンポーネント + Web Component変換
│   ├── preact-counter.module.css       # CSS Modules
│   ├── preact-counter.module.css.d.ts  # CSS Modules型定義
│   └── vite-env.d.ts                  # Vite型定義
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 依存関係

```json
{
  "dependencies": {
    "preact": "^10.28.1",
    "preact-custom-element": "^4.6.0"
  },
  "devDependencies": {
    "@preact/preset-vite": "^2.10.2"
  }
}
```

### 実装の特徴

- **軽量React代替**: Preactは3KBの軽量React互換ライブラリ
- **preact-custom-element**: Web Component変換ライブラリ
- **透過的なスロットマッピング**: `props.children` や `<slot>` タグが自動的にWeb Componentのネイティブスロットにマッピングされます。
- **Shadow DOMなし**: `{ shadow: false }` で通常のDOMとして実装
- **CSS Modules**: スコープ付きスタイリング
- **CSS注入**: `?inline` importでCSSをJSバンドルに含め、実行時にグローバルに注入
- **明示的な型変換が必要**: HTML属性は文字列として渡されるため、`Number()`で明示的に変換

### コード例

```typescript
import { useState, useEffect } from 'preact/hooks';
import register from 'preact-custom-element';
import styles from './preact-counter.module.css';
import cssText from './preact-counter.module.css?inline';

interface CounterProps {
  count?: number;
}

function PreactCounter({ count: initialCount = 0 }: CounterProps) {
  // 初期値を数値に変換（HTML属性は文字列として渡されるため）
  const [count, setCount] = useState(Number(initialCount));

  // count propが変更されたら状態を更新
  useEffect(() => {
    setCount(Number(initialCount));
  }, [initialCount]);

  // CSSをグローバルに注入（一度だけ）
  useEffect(() => {
    const styleId = 'preact-counter-styles';
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
        <div className={styles.label}>Preact Counter:</div>
        <button type="button" className={styles.button} onClick={() => setCount(count - 1)}>
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button type="button" className={styles.button} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

// preact-custom-elementを使ってWeb Componentを作成
register(PreactCounter, 'preact-counter', ['count'], { shadow: false });

export default PreactCounter;
```

### 重要な注意点

**属性値は必ず数値に変換する**

```typescript
// ❌ 誤った実装（文字列連結になる）
const [count, setCount] = useState(initialCount);

// ✅ 正しい実装
const [count, setCount] = useState(Number(initialCount));
```

**理由**: `preact-custom-element`は軽量性を重視しており、属性値の自動型変換を行いません。HTML属性は常に文字列として渡されるため、明示的に`Number()`で変換する必要があります。

詳細は [docs/troubleshooting-06-preact-attribute-type-conversion.md](../../docs/troubleshooting-06-preact-attribute-type-conversion.md) を参照。

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
  svelte: resolve(__dirname, '../../packages/svelte/src/svelte-counter.ts'),
  preact: resolve(__dirname, '../../packages/preact/src/preact-counter.tsx'),
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
