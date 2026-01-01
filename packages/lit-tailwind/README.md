# @web-components-samples/lit-tailwind

Lit + Tailwind CSS を組み合わせ、@lit/react でReact用にラップしたコンポーネントライブラリです。

## 特徴

- **React First**: @lit/reactを使用してReactコンポーネントとして提供
- **Lit + Tailwind CSS**: Shadow DOM + Constructable Stylesheets + Tailwind CSS v4
- **TypeScript完全サポート**: 完全な型定義とIntelliSense対応
- **Dual Export**: ReactコンポーネントとLitコンポーネントの両方をエクスポート
- **現代的なツールチェイン**: Vite + Tailwind CSS v4 + Storybook

## インストール

```bash
npm install @web-components-samples/lit-tailwind
# または
pnpm add @web-components-samples/lit-tailwind
```

## 使用方法（React）

```tsx
import React from 'react';
import { TailwindCounter } from '@web-components-samples/lit-tailwind';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>React App with Lit-based Counter</h1>
      <TailwindCounter 
        count={count} 
        style={{ margin: '1rem' }}
        className="custom-counter"
      />
      <button onClick={() => setCount(count + 1)}>
        External Increment
      </button>
    </div>
  );
}
```

## 使用方法（直接Lit）

カスタムコンポーネントを作成する場合は、Litコンポーネントを直接使用できます：

```typescript
import { TailwindElement, LitTailwindCounter } from '@web-components-samples/lit-tailwind/lit';

// ベースクラスを継承
class MyCustomCounter extends TailwindElement {
  // カスタム実装
}

// または既存のLitコンポーネントを使用
customElements.define('my-counter', LitTailwindCounter);
```

## コンポーネント

### `TailwindCounter` (React)

メインのReactコンポーネント。@lit/reactでラップされたLitコンポーネントです。

**Props:**
- `count?: number` - カウンターの値
- `className?: string` - 追加のCSSクラス
- `style?: React.CSSProperties` - インラインスタイル

### `LitTailwindCounter` (Lit)

元となるLitコンポーネント。

### `TailwindElement` (Lit)

Tailwind CSSが適用されたベースクラス。新しいコンポーネント作成時に継承して使用します。

## 開発

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動
pnpm dev

# ビルド
pnpm build

# Storybook起動
pnpm storybook
```

## ファイル構成

```
src/
├── counter/
│   ├── counter.ts           # Litコンポーネント
│   ├── counter.css          # Tailwind CSS（@apply使用）
│   ├── counter-react.tsx    # Reactラッパー
│   ├── counter.stories.ts   # Litコンポーネント用Storybook
│   └── counter-react.stories.tsx # Reactコンポーネント用Storybook
├── styles/
│   └── tailwind.ts          # 共有スタイルモジュール
├── base-element.ts          # TailwindElementベースクラス
├── index.ts                 # メインエクスポート（React優先）
├── tailwind.css             # Tailwind v4ディレクティブ
└── vite-env.d.ts           # 型定義
```

## アーキテクチャ

このライブラリは以下のアプローチを採用しています：

1. **Lit Web Component**: Shadow DOMとConstructable Stylesheetsを使用した高性能コンポーネント
2. **@lit/react Bridge**: LitコンポーネントをReactコンポーネントとして自然に使用可能
3. **Tailwind CSS v4**: 最新のTailwind CSSでモダンなスタイリング
4. **双方向エクスポート**: ReactとLit両方の用途に対応

## ブラウザサポート

- **Tailwind CSS v4要件**: Safari 16.4+, Chrome 111+, Firefox 128+
- **@lit/react**: React 16.8+ (Hooks対応)
- **Lit**: モダンブラウザ全般

## 実装ガイド

詳細な実装方針については、[docs/architecture/lit-tailwind-integration-guide.md](../../docs/architecture/lit-tailwind-integration-guide.md) を参照してください。