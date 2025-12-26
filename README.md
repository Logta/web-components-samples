# Web Components Samples

このリポジトリは、Web Componentsをさまざまな環境で構築するサンプルプロジェクトです。

## 構成

- **pnpm workspace**: モノレポ構成
- **Vite**: ビルドツール
- **3つのパッケージ**:
  - `packages/vanilla`: Vanilla JavaScriptで構築したWeb Component
  - `packages/lit`: Litで構築したWeb Component
  - `packages/react`: Reactで構築したWeb Component

## セットアップ

```bash
pnpm install
```

## 開発

全パッケージを同時に開発モードで起動:

```bash
pnpm dev
```

個別パッケージの開発:

```bash
cd packages/vanilla && pnpm dev
cd packages/lit && pnpm dev
cd packages/react && pnpm dev
```

## ビルド

全パッケージをビルド:

```bash
pnpm build
```

## 各パッケージの説明

### Vanilla JS (`packages/vanilla`)
純粋なJavaScriptでWeb Componentを実装。Custom Elements APIを直接使用。

### Lit (`packages/lit`)
Litフレームワークを使用してWeb Componentを実装。宣言的なテンプレートとリアクティブプロパティを提供。

### React (`packages/react`)
Reactで構築したコンポーネントをWeb Componentとしてラップして公開。
