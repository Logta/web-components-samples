# Claude Code - プロジェクトガイド

このドキュメントは、Claude Code がこのプロジェクトをサポートするためのガイドラインです。

## ドキュメント更新の方針

下記ドキュメントに関わる変更を行なった場合、行なったことをドキュメントに反映すること

- @CLAUDE.md
- 下記の仕様を表すドキュメント
  - @.claude/rules/demo.md
  - @.claude/rules/packages.md

## プロジェクト概要

3 つの異なるアプローチで Web Components を作成し、4 つの異なる環境（React、VanillaJS、Rails、Go）で使用するサンプルプロジェクト。

## 重要な設計判断と制約

### 1. React Web Component 実装

**必須**: `react-to-webcomponent` ライブラリを使用

```typescript
// ❌ 誤り
import ReactDOM from "react-dom";
reactToWebComponent(Component, React, ReactDOM);

// ✅ 正しい（React 19）
import * as ReactDOMClient from "react-dom/client";
reactToWebComponent(Component, React, ReactDOMClient);
```

**理由**: React 19 は`createRoot` API を使用するため、`react-dom/client`をインポートする必要がある。

### 2. Rails/Go 環境のバンドル戦略

**必須**: すべての依存関係をバンドルに含める

```typescript
// bundle-components.config.ts
export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    rollupOptions: {
      // external を設定しない（すべてバンドル）
      output: {
        manualChunks: undefined, // 単一ファイル出力
      },
    },
  },
});
```

**理由**:

- サーバーレンダリング環境では`node_modules`にアクセスできない
- `process.env`はブラウザで未定義なので、必ず`define`で置換する
- 置換により、React バンドルサイズが 962KB→323KB に削減される

### 3. パッケージ変更時のワークフロー

1. `packages/*`を編集
2. `pnpm build`でビルド
3. **React/VanillaJS demo**: 自動反映（HMR）
4. **Rails/Go demo**: `./setup_components.sh`で再ビルド必須

### 4. React Web ComponentのCSS注入

**必須**: CSS Modulesを使用する場合、`?inline` importでCSSをJSバンドルに含める

```typescript
// packages/react/src/react-counter.tsx
import styles from './react-counter.module.css';
import cssText from './react-counter.module.css?inline';

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
```

**理由**:

- ViteのライブラリモードではCSS Modulesが自動的にバンドルされない
- Rails/Go環境では別途CSSファイルを読み込む必要がある
- JSバンドル内にCSSを含めることで、実行時にスタイルを注入できる

**HTMLでのCSS読み込み（Rails/Go）**:

```html
<!-- Web Components CSS -->
<link rel="stylesheet" href="/components/web-components-samples.css">
<!-- または -->
<link rel="stylesheet" href="/static/components/web-components-samples.css">
```

### 5. TypeScript 型定義（React package）

`?inline` import用の型定義を`vite-env.d.ts`に追加：

```typescript
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

### 6. TypeScript 型定義（React demo）

Web Components 用の JSX 型を`vite-env.d.ts`に定義：

```typescript
declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      "my-counter": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
      "react-counter": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
      "lit-counter": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
    }
  }
}
```

## プロジェクト構造

```
web-components-samples/
├── packages/           # Web Componentsパッケージ
│   ├── vanilla/        # Vanilla JS実装
│   ├── react/          # React + react-to-webcomponent実装
│   └── lit/            # Lit Framework実装
├── demo/               # デモアプリケーション
│   ├── react/          # React環境（port 3000）
│   ├── vanillajs/      # VanillaJS環境（port 3001）
│   ├── rails/          # Rails環境（port 3000）
│   └── go/             # Go環境（port 8080）
├── .claude/
│   └── rules/
│       ├── packages.md # パッケージの詳細仕様
│       └── demo.md     # デモの詳細仕様
└── .mise.toml          # タスクランナー設定
```

## よく使うコマンド

### 開発

```bash
# パッケージをビルド
mise build              # または pnpm build

# デモを起動
mise demo:react         # React demo (port 3000)
mise demo:vanilla       # VanillaJS demo (port 3001)
mise demo:rails         # Rails demo (port 3000)
mise demo:go            # Go demo (port 8080)

# Rails/Goのセットアップ
mise demo:setup-rails   # Rails環境セットアップ
mise demo:setup-go      # Go環境セットアップ
```

### Storybook

```bash
mise storybook          # Storybook起動
```

### その他

```bash
mise help               # タスク一覧
mise fmt                # コードフォーマット
mise check              # リント・型チェック・テスト
mise clean              # ビルド成果物削除
```

## 過去に遭遇した問題と解決策

### 問題 1: "specifier 'react' は露出していますが、どこにも再マップされていません"

**状況**: Rails/Go demo で React 依存関係が解決されない

**解決策**: `bundle-components.config.ts`で外部依存を含めずにすべてバンドル

```typescript
rollupOptions: {
  // external を設定しない
}
```

### 問題 2: "process is not defined"

**状況**: ブラウザで`process.env`が未定義

**解決策**: Vite 設定で置換

```typescript
define: {
  'process.env.NODE_ENV': JSON.stringify('production'),
}
```

### 問題 3: React Web Component の TypeScript エラー

**状況**: `reactToWebComponent()`の第 3 引数の型エラー

**解決策**: `react-dom/client`を使用

```typescript
import * as ReactDOMClient from "react-dom/client";
reactToWebComponent(Component, React, ReactDOMClient);
```

### 問題 4: React Web Component のスタイルが適用されない

**状況**: Rails/Go demo で React コンポーネントのCSS Modulesスタイルが表示されない

**解決策**:
1. `?inline` importでCSSをJSバンドルに含める
2. `useEffect`でCSSをグローバルに注入
3. HTMLで`web-components-samples.css`を読み込む

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

```html
<!-- Rails/Goのlayout -->
<link rel="stylesheet" href="/components/web-components-samples.css">
```

## 新機能追加時の注意点

### Web Component を追加する場合

1. `packages/new-component/`を作成
2. `package.json`、`tsconfig.json`、`vite.config.ts`を設定
3. `pnpm-workspace.yaml`に追加（通常は`packages/*`で自動）
4. Rails/Go の`bundle-components.config.ts`にエントリー追加
5. 各 demo の HTML に`<new-component>`タグ追加
6. React demo の場合は`vite-env.d.ts`に型定義追加

### デモ環境を追加する場合

1. `demo/new-env/`を作成
2. サーバーレンダリング環境の場合:
   - `bundle-components.config.ts`を作成
   - `setup_components.sh`を作成
   - バンドル設定ですべての依存関係を含める
3. `.mise.toml`にタスク追加
4. `README.md`を作成

## 詳細ドキュメント

- **[.claude/rules/packages.md](.claude/rules/packages.md)**: パッケージの詳細仕様
- **[.claude/rules/demo.md](.claude/rules/demo.md)**: デモの詳細仕様

## 技術スタック

- **パッケージマネージャー**: pnpm 10.12.3
- **Node.js**: 24.3.0
- **ビルドツール**: Vite 7.3.0
- **TypeScript**: Strict mode
- **React**: 19.2.3
- **Lit**: 3.2.2
- **Ruby**: 3.3.6
- **Go**: 1.25.5
- **タスクランナー**: mise

## バンドルサイズ

Rails/Go demo（gzip 圧縮後）:

- `vanilla.js`: 0.79 KB
- `lit.js`: 7.29 KB
- `react.js`: 74.50 KB
- 合計: ~82.58 KB

## 開発時の心構え

1. **パッケージ変更後はビルド必須**: Rails/Go demo は自動反映されない
2. **型エラーは即座に修正**: 特に React Web Component 周り
3. **バンドル戦略を理解する**: 開発環境と本番環境で異なる
4. **セキュリティ**: XSS、インジェクション攻撃に注意
5. **シンプルさを保つ**: 過度な抽象化を避ける
