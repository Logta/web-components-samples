# Gemini - プロジェクトガイド

このドキュメントは、Gemini がこのプロジェクトをサポートするためのガイドラインです。

## ドキュメント更新の方針

下記ドキュメントに関わる変更を行なった場合、行なったことをドキュメントに反映すること

### プロジェクト設計・仕様ドキュメント

- @GEMINI.md - プロジェクト全体のガイド（このファイル）
- @.gemini/rules/demo.md - デモアプリケーションの詳細仕様
- @.gemini/rules/packages.md - パッケージの詳細仕様

### トラブルシューティングドキュメント

- @docs/ - 技術ドキュメントとトラブルシューティングガイド
  - 新しい問題に遭遇した場合、docs/troubleshooting/ディレクトリに `[問題の要約].md` として追加
  - 詳細は「過去に遭遇した問題と解決策」セクションのテンプレートを参照

## プロジェクト概要

5つの異なるアプローチ（Vanilla JS、React、Lit、Svelte、Preact）でWeb Componentsを作成し、4つの異なる環境（React、VanillaJS、Rails、Go）で使用するサンプルプロジェクト。

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

### 4. React Web Component の CSS 注入

**必須**: CSS Modules を使用する場合、`?inline` import で CSS を JS バンドルに含める

```typescript
// packages/react/src/react-counter.tsx
import styles from "./react-counter.module.css";
import cssText from "./react-counter.module.css?inline";

// CSSをグローバルに注入（一度だけ）
useEffect(() => {
  const styleId = "react-counter-styles";
  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = cssText;
    document.head.appendChild(styleElement);
  }
}, []);
```

**理由**:

- Vite のライブラリモードでは CSS Modules が自動的にバンドルされない
- Rails/Go 環境では別途 CSS ファイルを読み込む必要がある
- JS バンドル内に CSS を含めることで、実行時にスタイルを注入できる

**HTML での CSS 読み込み（Rails/Go）**:

```html
<!-- Web Components CSS -->
<link rel="stylesheet" href="/components/web-components-samples.css" />
<!-- または -->
<link rel="stylesheet" href="/static/components/web-components-samples.css" />
```

### 5. TypeScript 型定義（React package）

`?inline` import 用の型定義を`vite-env.d.ts`に追加：

```typescript
/// <reference types="vite/client" />

// ?inline importの型定義
declare module "*.css?inline" {
  const content: string;
  export default content;
}

declare module "*.module.css?inline" {
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

### 7. Preact/Reactにおけるスロットの扱い

**必須**: `preact-custom-element` と `react-to-webcomponent` の `children`/`slot` の扱いの違いを理解すること。

-   **Preact**: `preact-custom-element` は `props.children` をWeb Componentのネイティブスロットに **自動的** にマッピングします。実装は直感的です。
-   **React**: `react-to-webcomponent` は `children` を自動的にはマッピングしません。スロットを利用するには、`useEffect` でDOMから要素を取得し、ReactのStateに組み込む **手動** の実装が必要です。

**理由**:

- 各ライブラリの設計思想の違いによるものです。PreactはWeb標準に近く、Reactはすべてを自身のV-DOM内で管理しようとします。
- この違いを知らないと、特にReactで期待通りに `children` が表示されず、混乱を招く可能性があります。

詳細は [docs/architecture/explanation-framework-slot-handling.md](docs/architecture/explanation-framework-slot-handling.md) を参照してください。

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
├── .gemini/
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
mise demo:rails         # Rails demo (port 3002)
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

**新しい問題に遭遇した場合は、[docs/](docs/)配下に詳細なトラブルシューティングガイドを追加してください。**

### クイックリファレンス

以下は過去に遭遇した主要な問題の概要です。詳細は各ドキュメントを参照してください。

#### 問題 1: "specifier 'react' は露出していますが、どこにも再マップされていません"

- **状況**: Rails/Go demo で React 依存関係が解決されない
- **解決策**: `bundle-components.config.ts`で外部依存を含めずにすべてバンドル
- **詳細**: [docs/troubleshooting/react-dependencies.md](docs/troubleshooting/react-dependencies.md)

#### 問題 2: "process is not defined"

- **状況**: ブラウザで`process.env`が未定義
- **解決策**: Vite 設定の`define`オプションでビルド時に置換
- **効果**: バンドルサイズ 66%削減（962KB → 324KB）
- **詳細**: [docs/troubleshooting/process-env.md](docs/troubleshooting/process-env.md)

#### 問題 3: React Web Component の TypeScript エラー

- **状況**: `reactToWebComponent()`の第 3 引数の型エラー
- **解決策**: `import * as ReactDOMClient from 'react-dom/client'`を使用
- **詳細**: [docs/troubleshooting/react-typescript-error.md](docs/troubleshooting/react-typescript-error.md)

#### 問題 4: React Web Component のスタイルが適用されない

- **状況**: Rails/Go demo で React コンポーネントの CSS Modules スタイルが表示されない
- **解決策**: `?inline` import で CSS を JS バンドルに含め、`useEffect`で実行時に注入
- **詳細**: [docs/troubleshooting/react-css-not-applied.md](docs/troubleshooting/react-css-not-applied.md)

#### 問題 5: Lit Web Component が表示されない（空白になる）

- **状況**: Go/Rails demo で lit-counter 要素が全く表示されない
- **解決策**: バンドル版ビルド設定を追加し、lit ライブラリを含める
- **詳細**: Lit パッケージの`vite.config.ts`で`external: ['lit']`が設定されていたため、lit ライブラリがバンドルされず動作しなかった。`vite.config.bundle.ts`を作成してバンドル版を生成

#### 問題 6: Preact Web Component の数値が文字列連結される

- **状況**: Preact カウンターで `+` を押すと 0→01→011→0111 となる
- **解決策**: `Number()`で明示的に数値変換
- **特徴**: `preact-custom-element`は軽量性重視で自動型変換を行わない
- **詳細**: [docs/troubleshooting/preact-attribute-type-conversion.md](docs/troubleshooting/preact-attribute-type-conversion.md)

#### 問題 7: Reactコンポーネントで `children` が表示されない（スロット問題）

- **状況**: ReactをWeb Component化した際に、`<my-react-component>ここにコンテンツ</my-react-component>` のように子要素を渡しても表示されない。
- **解決策**: Reactではスロットは自動でマッピングされないため、手動で実装する必要がある。`useEffect` を使ってDOMからスロット要素を取得し、Stateにセットする。
- **詳細**: [docs/architecture/explanation-framework-slot-handling.md](docs/architecture/explanation-framework-slot-handling.md)

### トラブルシューティング文書の追加方法

新しい問題に遭遇した場合、以下のテンプレートに従ってドキュメントを作成してください：

```markdown
# トラブルシューティング: [問題のタイトル]

## 問題の概要

[簡潔な問題の説明とエラーメッセージ]

## 発生状況

- **環境**: [どの環境で発生するか]
- **タイミング**: [いつ発生するか]
- **原因**: [根本原因の要約]

## 根本原因

[詳細な原因の説明]

## 解決策

[ステップバイステップの解決手順]

## まとめ

- **問題**: [問題の要約]
- **原因**: [原因の要約]
- **解決**: [解決策の要約]
- **結果**: [解決後の状態]

## 関連ドキュメント

- [関連するドキュメントへのリンク]
```

ドキュメント作成後、このセクションに追加してください。

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

### 仕様ドキュメント

- **[.gemini/rules/packages.md](.gemini/rules/packages.md)**: パッケージの詳細仕様
- **[.gemini/rules/demo.md](.gemini/rules/demo.md)**: デモの詳細仕様

### トラブルシューティング・技術解説

- **[docs/README.md](docs/README.md)**: ドキュメントインデックス

## 技術スタック

- **パッケージマネージャー**: pnpm
- **Node.js**: 24.3.0
- **ビルドツール**: Vite
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
