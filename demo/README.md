# Web Components Demo

このディレクトリには、様々な環境でWeb Componentsを使用するデモが含まれています。

## デモ一覧

### 1. [React環境](./react)
Reactアプリケーション内でWeb Componentsを使用するデモ

- **ポート**: 3000
- **起動方法**: `cd react && pnpm dev`
- **特徴**: TypeScript型定義、Vite、React 19

### 2. [Vanilla JS環境](./vanillajs)
純粋なJavaScript環境でWeb Componentsを使用するデモ

- **ポート**: 3001
- **起動方法**: `cd vanillajs && pnpm dev`
- **特徴**: フレームワーク不要、動的コンポーネント追加

### 3. [Ruby on Rails環境](./rails)
Ruby on RailsアプリケーションでWeb Componentsを使用するデモ

- **ポート**: 3000
- **起動方法**: `cd rails && bundle install && rails server`
- **特徴**: Rails 8、ERBテンプレート、Hotwire対応

### 4. [Go Template環境](./go)
Goのhtml/templateでWeb Componentsを使用するデモ

- **ポート**: 8080
- **起動方法**: `cd go && go run main.go`
- **特徴**: 標準ライブラリのみ、軽量、高速

## 共通セットアップ

すべてのデモを実行する前に、プロジェクトルートで依存関係をインストールしてください:

```bash
# プロジェクトルートで実行
pnpm install
```

## 使用されているWeb Components

各デモでは以下の3つのWeb Componentsを使用しています:

1. **my-counter** - Vanilla JavaScriptで作成
2. **react-counter** - Reactコンポーネントをラップ
3. **lit-counter** - Litフレームワークで作成

## ディレクトリ構造

```
demo/
├── react/              # React環境のデモ
│   ├── src/
│   ├── package.json
│   └── README.md
├── vanillajs/          # Vanilla JS環境のデモ
│   ├── src/
│   ├── package.json
│   └── README.md
├── rails/              # Rails環境のデモ
│   ├── app/
│   ├── config/
│   ├── Gemfile
│   └── README.md
├── go/                 # Go環境のデモ
│   ├── templates/
│   ├── static/
│   ├── main.go
│   └── README.md
└── README.md           # このファイル
```

## 各デモの詳細

詳細なセットアップ手順と使用方法については、各デモディレクトリ内のREADME.mdを参照してください。
