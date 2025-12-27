# Go Template Demo

このディレクトリには、Goのhtml/template環境でWeb Componentsを使用するデモが含まれています。

## 前提条件

- Go 1.23以上
- pnpm (Web Componentsのビルド用)

## セットアップ

### 1. Web Componentsをビルド

```bash
# プロジェクトルートから
cd packages/vanilla && pnpm build
cd ../react && pnpm build
cd ../lit && pnpm build
```

### 2. Web ComponentsをGoプロジェクトにコピー

```bash
cd demo/go
./setup_components.sh
```

### 3. Goモジュールの初期化

```bash
go mod init web-components-demo
go mod tidy
```

### 4. サーバーを起動

```bash
go run main.go
```

http://localhost:8080 にアクセス

## プロジェクト構造

```
demo/go/
├── main.go                  # Goサーバー
├── templates/
│   ├── layout.html         # ベーステンプレート
│   └── index.html          # ホームページ
├── static/
│   └── components/         # ビルド済みWeb Components
├── setup_components.sh     # コンポーネントのセットアップスクリプト
└── README.md
```

## 使い方

Goのhtml/templateでWeb Componentsを使用するには、scriptタグでインポートし、HTMLタグとして使用します:

```html
<!-- templates/layout.html -->
<script type="module" src="/static/components/vanilla.js"></script>
<script type="module" src="/static/components/react.js"></script>
<script type="module" src="/static/components/lit.js"></script>

<!-- templates/index.html -->
<my-counter count="5"></my-counter>
<react-counter count="10"></react-counter>
<lit-counter count="3"></lit-counter>
```

## 特徴

- Goの標準ライブラリ（net/http、html/template）のみを使用
- 軽量で高速なWebサーバー
- ビルド済みJSファイルを静的ファイルとして配信
- テンプレートエンジンでHTMLを生成し、Web Componentsでインタラクティブ性を追加
