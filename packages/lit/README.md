# @web-components-samples/lit

Lit Web Components を@lit/reactでReact用にラップしたコンポーネントライブラリです。

## 特徴

- **React First**: @lit/reactを使用してReactコンポーネントとして提供
- **高性能**: Lit + Shadow DOM + Web Standardsによる最適化
- **TypeScript完全サポート**: 完全な型定義とIntelliSense対応
- **Dual Export**: ReactコンポーネントとLitコンポーネントの両方をエクスポート
- **豊富なコンポーネント**: Button、Counter、Dropdown、Modalを提供

## インストール

```bash
npm install @web-components-samples/lit
# または
pnpm add @web-components-samples/lit
```

## 使用方法（React）

```tsx
import React from 'react';
import { Button, Counter, Dropdown, Modal } from '@web-components-samples/lit';

const options = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
];

function App() {
  const [count, setCount] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div>
      <h1>React App with Lit Components</h1>
      
      {/* ボタンコンポーネント */}
      <Button 
        label="Click Me!" 
        variant="primary"
        size="large"
        onButtonClick={() => alert('Button clicked!')}
      />
      
      {/* カウンターコンポーネント */}
      <Counter count={count} />
      <button onClick={() => setCount(count + 1)}>
        External Increment
      </button>
      
      {/* ドロップダウンコンポーネント */}
      <Dropdown 
        options={JSON.stringify(options)}
        placeholder="Select an option"
        onChange={(e) => console.log('Selected:', e.detail.value)}
      />
      
      {/* モーダルコンポーネント */}
      <Modal 
        open={isModalOpen}
        onModalClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
```

## コンポーネント

### `Button`

多様なスタイルと状態をサポートするボタンコンポーネント。

**Props:**
- `label?: string` - ボタンテキスト
- `variant?: 'primary' | 'secondary' | 'success' | 'danger'` - ボタンの種類
- `size?: 'small' | 'medium' | 'large'` - ボタンサイズ
- `disabled?: boolean` - 無効状態
- `onButtonClick?: (event: CustomEvent) => void` - クリックイベント

### `Counter`

シンプルなカウンターコンポーネント。

**Props:**
- `count?: number` - カウンター値

### `Dropdown`

選択肢から値を選択するドロップダウンコンポーネント。

**Props:**
- `options?: DropdownOption[] | string` - 選択肢（配列またはJSON文字列）
- `selected?: string` - 選択済み値
- `placeholder?: string` - プレースホルダー文字
- `disabled?: boolean` - 無効状態
- `onChange?: (event: CustomEvent) => void` - 値変更イベント

### `Modal`

ネイティブ`<dialog>`要素を使用したモーダルコンポーネント。

**Props:**
- `open?: boolean` - モーダルの開閉状態
- `onModalClose?: (event: CustomEvent) => void` - 閉じるイベント

## 直接Lit使用

カスタムコンポーネントを作成する場合は、Litコンポーネントを直接使用できます：

```typescript
import { LitButton, LitCounter } from '@web-components-samples/lit/lit';

// 既存のLitコンポーネントを直接使用
customElements.define('my-button', LitButton);
customElements.define('my-counter', LitCounter);
```

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
├── button/
│   ├── button.ts           # Litコンポーネント
│   ├── button.css          # スタイル
│   ├── button-react.tsx    # Reactラッパー
│   ├── button.stories.ts   # Litコンポーネント用Storybook
│   └── button-react.stories.tsx # Reactコンポーネント用Storybook
├── counter/
│   ├── counter.ts
│   ├── counter.css
│   ├── counter-react.tsx
│   ├── counter.stories.ts
│   └── counter-react.stories.tsx
├── dropdown/
│   ├── dropdown.ts
│   ├── dropdown.css
│   ├── dropdown-react.tsx
│   └── dropdown.stories.ts
├── modal/
│   ├── modal.ts
│   ├── modal.css
│   ├── modal-react.tsx
│   └── modal.stories.ts
├── index.ts                # メインエクスポート（React優先）
└── vite-env.d.ts          # 型定義
```

## アーキテクチャ

このライブラリは以下のアプローチを採用しています：

1. **Lit Web Components**: Shadow DOMとWeb Standardsによる高性能コンポーネント
2. **@lit/react Bridge**: LitコンポーネントをReactコンポーネントとして自然に使用
3. **Type Safety**: 完全なTypeScript型定義
4. **Event Handling**: Litのカスタムイベントを Reactイベントハンドラーにマッピング
5. **双方向エクスポート**: ReactとLit両方の用途に対応

## ブラウザサポート

- **@lit/react**: React 16.8+ (Hooks対応)
- **Lit**: モダンブラウザ全般（ES2019+）
- **Web Components**: モダンブラウザ（Polyfillで IE11+ 対応可能）

## 関連パッケージ

- [@web-components-samples/lit-tailwind](../lit-tailwind) - Tailwind CSS v4 統合版