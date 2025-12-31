# Web Components Samples

[![Storybook](https://raw.githubusercontent.com/storybooks/brand/main/badge/badge-storybook.svg)](https://t-kik/web-components-samples.vercel.app/)

このリポジトリは、5つの異なる技術（Vanilla JS, React, Lit, Svelte, Preact）でWeb Componentsを構築し、4つの異なるWebアプリケーション環境（純粋なJS, React, Ruby on Rails, Go）でそれらを利用するための包括的なサンプル集です。

すべてのコンポーネントは [**Storybookでライブデモ**](https://t-kik/web-components-samples.vercel.app/) を確認できます。

## プロジェクト構造

- **`packages/`**: 5つの異なるアプローチで実装されたWeb Component群。
- **`demo/`**: 4つの異なる技術スタックでこれらのコンポーネントを利用するデモアプリケーション。
- **`.storybook/`**: コンポーネントの分離開発とカタログ化のためのStorybook環境。
- **`docs/`**: 設計上の決定（ADR）やトラブルシューティングガイドなどのドキュメント。
- **`GEMINI.md`**: AI（Gemini）がこのプロジェクトを理解し、サポートするためのガイドライン。

## クイックスタート

### 前提条件

タスクランナーとして [mise](https://mise.jdx.dev/) の利用を推奨します。

```bash
# miseをインストール（Homebrewの場合）
brew install mise
```

### 1. 依存関係のインストール

```bash
# 推奨
mise install

# またはpnpmを直接使用
pnpm install
```

### 2. ビルド

すべてのWeb Componentパッケージをビルドします。

```bash
mise build
```

### 3. デモの実行

利用可能なデモの一覧は `mise demo:list` で確認できます。

```bash
# Reactデモを起動 (http://localhost:3000)
mise demo:react

# Vanilla JSデモを起動 (http://localhost:3001)
mise demo:vanilla
```

RailsやGoのデモを実行する前に、セットアップタスクが必要です。

```bash
# Rails/Goデモのセットアップ（初回のみ）
mise demo:setup

# Railsデモを起動 (http://localhost:3002)
mise demo:rails

# Goデモを起動 (http://localhost:8080)
mise demo:go
```

## パッケージ一覧 (`packages/`)

5つの異なるフレームワーク/ライブラリで同じコンポーネント（カウンター、ボタン等）を実装しています。

- `@web-components-samples/vanilla`
- `@web-components-samples/react`
- `@web-components-samples/lit`
- `@web-components-samples/svelte`
- `@web-components-samples/preact`

詳細は **[パッケージ仕様書](.gemini/rules/packages.md)** を参照してください。

## デモアプリケーション一覧 (`demo/`)

各Web Componentを異なるフロントエンド/バックエンド環境で利用するサンプルです。

- **`react/`**: React + Vite (SPA)
- **`vanillajs/`**: Vanilla JS + Vite (SPA)
- **`rails/`**: Ruby on Rails (SSR)
- **`go/`**: Go + html/template (SSR)

詳細は **[デモ仕様書](.gemini/rules/demo.md)** を参照してください。

## 主なタスク (`mise` コマンド)

- `mise build`: 全パッケージのビルド
- `mise storybook`: Storybookの起動
- `mise demo:react`: Reactデモの起動（他のデモも同様）
- `mise demo:setup`: バックエンドデモ（Rails/Go）のセットアップ
- `mise fmt`: コードフォーマット
- `mise check`: 静的解析とテスト
- `mise help`: 利用可能な全タスクの表示

## 技術スタック

- **Frontend**: Web Components, TypeScript, React, Lit, Svelte, Preact, Vite, Storybook
- **Backend**: Ruby on Rails, Go
- **Tooling**: Node.js, pnpm, mise, Biome, TypeScript

## 詳細ドキュメント

- **[GEMINI.md](GEMINI.md)**: AI（Gemini）向けのプロジェクトガイドライン。設計思想や過去のトラブルシューティングについてまとめています。
- **[docs/](docs/)**: アーキテクチャや技術的な解説ドキュメント。
