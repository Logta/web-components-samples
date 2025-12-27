# Ruby on Rails Demo

このディレクトリには、Ruby on Rails環境でWeb Componentsを使用するデモが含まれています。

## 前提条件

- Ruby 3.2以上
- Rails 8.0以上
- Node.js & pnpm

## セットアップ

### 1. Web Componentsをビルド

```bash
# プロジェクトルートから
cd packages/vanilla && pnpm build
cd ../react && pnpm build
cd ../lit && pnpm build
```

### 2. Railsアプリケーションのセットアップ

```bash
cd demo/rails

# Gemのインストール
bundle install

# データベースのセットアップ
rails db:create
rails db:migrate

# Web Componentsをpublic/componentsにコピー
./setup_components.sh
```

### 3. サーバーを起動

```bash
rails server
```

http://localhost:3000 にアクセス

## プロジェクト構造

```
demo/rails/
├── app/
│   ├── controllers/
│   │   └── home_controller.rb
│   └── views/
│       ├── layouts/
│       │   └── application.html.erb
│       └── home/
│           └── index.html.erb
├── public/
│   └── components/          # ビルド済みWeb Components
├── config/
│   └── routes.rb
├── Gemfile
└── setup_components.sh      # コンポーネントのセットアップスクリプト
```

## 使い方

RailsのビューでWeb Componentsを使用するには、scriptタグでインポートし、HTMLタグとして使用します:

```erb
<!-- app/views/layouts/application.html.erb -->
<script type="module" src="/components/vanilla.js"></script>
<script type="module" src="/components/react.js"></script>
<script type="module" src="/components/lit.js"></script>

<!-- app/views/home/index.html.erb -->
<my-counter count="5"></my-counter>
<react-counter count="10"></react-counter>
<lit-counter count="3"></lit-counter>
```

## 特徴

- Rails 8のImportmapやSprocketsを使わず、直接Web Componentsを読み込み
- Asset Pipelineの設定不要
- ビルド済みJSファイルをpublicディレクトリに配置するだけ
- サーバーサイドレンダリングは不要（クライアントサイドで動作）
