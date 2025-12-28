# demo/ - デモアプリケーション仕様

Web Componentsを使用する4つの異なる環境のデモアプリケーション。
すべてのデモは3つのカウンター（`my-counter`, `react-counter`, `lit-counter`）をグリッドレイアウトで表示します。

---

## demo/react/

**React + Vite環境でのWeb Components使用例**

### 基本情報

- **ポート**: 3000
- **技術スタック**: React 19.2.3 + Vite + TypeScript
- **起動方法**: `mise demo:react` または `cd demo/react && pnpm dev`

### ファイル構成

```
demo/react/
├── src/
│   ├── App.tsx              # メインアプリケーション
│   ├── App.css              # アプリケーションスタイル
│   ├── main.tsx             # エントリーポイント
│   ├── index.css            # グローバルスタイル
│   └── vite-env.d.ts        # Web Components型定義
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 依存関係の読み込み方

pnpm workspaceから直接インポート：

```typescript
import '@web-components-samples/vanilla';
import '@web-components-samples/react';
import '@web-components-samples/lit';
```

### Web Components型定義

`src/vite-env.d.ts` にJSX型定義を追加：

```typescript
/// <reference types="vite/client" />

declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      'my-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
      'react-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
      'lit-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
    }
  }
}
```

### 使用例

```tsx
import '@web-components-samples/vanilla';
import '@web-components-samples/react';
import '@web-components-samples/lit';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>React Demo - Web Components</h1>
      <div className="counters-grid">
        <my-counter count={0}></my-counter>
        <react-counter count={0}></react-counter>
        <lit-counter count={0}></lit-counter>
      </div>
    </div>
  );
}

export default App;
```

### 特徴

- Web ComponentsをReact JSX内で使用
- TypeScriptの型補完サポート
- Hot Module Replacement (HMR)
- 開発中は自動リロード

---

## demo/vanillajs/

**純粋なJavaScript環境でのWeb Components使用例**

### 基本情報

- **ポート**: 3001
- **技術スタック**: Vanilla JS/TS + Vite
- **起動方法**: `mise demo:vanilla` または `cd demo/vanillajs && pnpm dev`

### ファイル構成

```
demo/vanillajs/
├── src/
│   ├── main.ts              # エントリーポイント
│   └── style.css            # スタイル
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 依存関係の読み込み方

pnpm workspaceから直接インポート（TypeScript）：

```typescript
import '@web-components-samples/vanilla';
import '@web-components-samples/react';
import '@web-components-samples/lit';
```

### 使用例

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vanilla JS Demo - Web Components</title>
  </head>
  <body>
    <h1>Vanilla JS Demo - Web Components</h1>
    <div class="counters-grid">
      <my-counter count="0"></my-counter>
      <react-counter count="0"></react-counter>
      <lit-counter count="0"></lit-counter>
    </div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

### 特徴

- フレームワーク不要
- HTMLに直接Web Componentsタグを記述
- 最もシンプルな使用例
- JavaScriptで動的にコンポーネントを追加可能

---

## demo/rails/

**Ruby on Rails環境でのWeb Components使用例**

### 基本情報

- **ポート**: 3002
- **技術スタック**: Rails 8 + ERB Templates
- **起動方法**: `mise demo:rails` または `cd demo/rails && bundle exec rails server -p 3002`

### 前提条件

- Ruby 3.3.6
- Rails 8.0以上
- pnpm（Web Componentsのビルド用）

### ファイル構成

```
demo/rails/
├── app/
│   ├── controllers/
│   │   ├── application_controller.rb
│   │   └── home_controller.rb
│   ├── views/
│   │   ├── layouts/
│   │   │   └── application.html.erb
│   │   └── home/
│   │       └── index.html.erb
│   ├── assets/
│   │   └── stylesheets/
│   │       └── application.css
│   └── javascript/
│       └── application.js
├── config/
│   ├── routes.rb
│   ├── application.rb
│   ├── puma.rb
│   └── environments/
├── public/
│   └── components/              # ビルド済みWeb Components（自動生成）
├── Gemfile
├── bundle-components.config.ts  # Vite バンドル設定
└── setup_components.sh          # セットアップスクリプト
```

### セットアップ

```bash
# 自動セットアップ（推奨）
mise demo:setup-rails

# または手動セットアップ
cd demo/rails
./setup_components.sh           # Web Componentsをビルド
bundle install                  # Gemをインストール
bundle exec rails db:create     # データベース作成
bundle exec rails db:migrate    # マイグレーション実行
```

### 依存関係の読み込み方

バンドル済みJSファイルを静的ファイルとして配信：

```erb
<!-- app/views/layouts/application.html.erb -->
<!DOCTYPE html>
<html>
  <head>
    <title>Rails Demo - Web Components</title>
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>
    <%= stylesheet_link_tag "application" %>

    <!-- Web Components CSS -->
    <link rel="stylesheet" href="/components/web-components-samples.css">

    <!-- Web Components読み込み -->
    <script type="module" src="/components/vanilla.js"></script>
    <script type="module" src="/components/react.js"></script>
    <script type="module" src="/components/lit.js"></script>
  </head>
  <body>
    <%= yield %>
  </body>
</html>
```

### 使用例

```erb
<!-- app/views/home/index.html.erb -->
<h1>Rails Demo - Web Components</h1>

<div class="counters-grid">
  <my-counter count="0"></my-counter>
  <react-counter count="0"></react-counter>
  <lit-counter count="0"></lit-counter>
</div>
```

### ビルドプロセス

`setup_components.sh` スクリプトの内容：

```bash
#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "Setting up Web Components for Rails..."

# publicディレクトリを作成
mkdir -p public/components

# Rails専用のバンドルを作成（すべての依存関係を含める）
echo "Building bundled components with all dependencies..."

# 絶対パスで設定ファイルを指定
pnpm vite build --config "$(pwd)/bundle-components.config.ts"

echo "✅ Setup complete!"
```

`bundle-components.config.ts` の設定：

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Rails demo用のバンドル設定 - すべての依存関係を含める
export default defineConfig({
  plugins: [react()],
  define: {
    // process.env をブラウザ用に置き換え
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: resolve(__dirname, 'public/components'),
    emptyOutDir: true,
    lib: {
      entry: {
        vanilla: resolve(__dirname, '../../packages/vanilla/src/my-counter.ts'),
        react: resolve(__dirname, '../../packages/react/src/react-counter.tsx'),
        lit: resolve(__dirname, '../../packages/lit/src/lit-counter.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      // 依存関係を external にしない（すべてバンドルする）
      output: {
        // 各エントリーポイントを個別のファイルとして出力
        manualChunks: undefined,
      }
    }
  }
});
```

### バンドル設定の特徴

- **外部依存関係を含めない**: `rollupOptions.external` なし
- **process.env置換**: `process.env.NODE_ENV` を `'production'` に置換
- **単一ファイル出力**: `manualChunks: undefined`
- **React bundle サイズ**: 323.74 KB (gzip: 74.50 KB)

### 特徴

- Rails 8のImportmapやSprocketsを使わず、直接Web Componentsを読み込み
- Asset Pipelineの設定不要
- ビルド済みJSファイルをpublicディレクトリに配置するだけ
- サーバーサイドレンダリングは不要（クライアントサイドで動作）

---

## demo/go/

**Go html/template環境でのWeb Components使用例**

### 基本情報

- **ポート**: 8080
- **技術スタック**: Go 1.25 + html/template + net/http
- **起動方法**: `mise demo:go` または `cd demo/go && go run main.go`

### 前提条件

- Go 1.25以上
- pnpm（Web Componentsのビルド用）

### ファイル構成

```
demo/go/
├── main.go                      # Goサーバー
├── templates/
│   ├── layout.html              # ベーステンプレート
│   └── index.html               # ホームページ
├── static/
│   └── components/              # ビルド済みWeb Components（自動生成）
├── go.mod
├── bundle-components.config.ts  # Vite バンドル設定
└── setup_components.sh          # セットアップスクリプト
```

### セットアップ

```bash
# 自動セットアップ（推奨）
mise demo:setup-go

# または手動セットアップ
cd demo/go
./setup_components.sh           # Web Componentsをビルド
go mod tidy                     # Goモジュールの初期化（初回のみ）
```

### 依存関係の読み込み方

バンドル済みJSファイルを静的ファイルとして配信：

```html
<!-- templates/layout.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Go Demo - Web Components</title>

    <!-- Web Components CSS -->
    <link rel="stylesheet" href="/static/components/web-components-samples.css">

    <!-- Web Components読み込み -->
    <script type="module" src="/static/components/vanilla.js"></script>
    <script type="module" src="/static/components/react.js"></script>
    <script type="module" src="/static/components/lit.js"></script>
</head>
<body>
    {{template "content" .}}
</body>
</html>
```

### 使用例

```html
<!-- templates/index.html -->
{{define "content"}}
<h1>Go Demo - Web Components</h1>

<div class="counters-grid">
    <my-counter count="0"></my-counter>
    <react-counter count="0"></react-counter>
    <lit-counter count="0"></lit-counter>
</div>
{{end}}
```

### Goサーバーの実装

```go
package main

import (
    "html/template"
    "log"
    "net/http"
)

func main() {
    // 静的ファイル配信
    fs := http.FileServer(http.Dir("."))
    http.Handle("/static/", http.StripPrefix("/static/", fs))

    // ルート
    http.HandleFunc("/", handleIndex)

    log.Println("Server starting on http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleIndex(w http.ResponseWriter, r *http.Request) {
    tmpl := template.Must(template.ParseFiles("templates/layout.html", "templates/index.html"))
    tmpl.ExecuteTemplate(w, "layout", nil)
}
```

### ビルドプロセス

`setup_components.sh` スクリプトの内容：

```bash
#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "Setting up Web Components for Go..."

# staticディレクトリを作成
mkdir -p static/components

# Go専用のバンドルを作成（すべての依存関係を含める）
echo "Building bundled components with all dependencies..."

# 絶対パスで設定ファイルを指定
pnpm vite build --config "$(pwd)/bundle-components.config.ts"

echo "✅ Setup complete!"
```

`bundle-components.config.ts` の設定：

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Go demo用のバンドル設定 - すべての依存関係を含める
export default defineConfig({
  plugins: [react()],
  define: {
    // process.env をブラウザ用に置き換え
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: resolve(__dirname, 'static/components'),
    emptyOutDir: true,
    lib: {
      entry: {
        vanilla: resolve(__dirname, '../../packages/vanilla/src/my-counter.ts'),
        react: resolve(__dirname, '../../packages/react/src/react-counter.tsx'),
        lit: resolve(__dirname, '../../packages/lit/src/lit-counter.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      // 依存関係を external にしない（すべてバンドルする）
      output: {
        // 各エントリーポイントを個別のファイルとして出力
        manualChunks: undefined,
      }
    }
  }
});
```

### バンドル設定の特徴

- Rails demoと同じ設定（出力先が異なるのみ）
- **外部依存関係を含めない**: `rollupOptions.external` なし
- **process.env置換**: `process.env.NODE_ENV` を `'production'` に置換
- **単一ファイル出力**: `manualChunks: undefined`

### 特徴

- Goの標準ライブラリ（net/http、html/template）のみを使用
- 軽量で高速なWebサーバー
- ビルド済みJSファイルを静的ファイルとして配信
- テンプレートエンジンでHTMLを生成し、Web Componentsでインタラクティブ性を追加

---

## デモ共通の仕様

### グリッドレイアウト

すべてのデモは以下の共通レイアウトを使用：

```css
.counters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
```

### 初期値

各カウンターは初期値 `count="0"` で表示されます。

---

## バンドル戦略の違い

### React/VanillaJS Demo（開発環境）

- **戦略**: pnpm workspace + Vite dev server
- **依存関係**: node_modules から動的に解決
- **利点**: HMR, 高速な開発体験
- **用途**: 開発時のみ

### Rails/Go Demo（本番環境想定）

- **戦略**: すべてバンドル（self-contained）
- **依存関係**: すべてJSファイルに含める
- **理由**: サーバーレンダリング環境では node_modules にアクセスできない
- **利点**: 1ファイルで完結、CDNやnpmなしで動作
- **用途**: 本番環境でも使用可能

---

## 開発ワークフロー

### パッケージ変更時の対応

1. `packages/*` のコンポーネントを編集
2. `pnpm build` でビルド（または `mise build`）
3. **React/VanillaJS demoは自動反映**（HMR）
4. **Rails/Go demoは `./setup_components.sh` で再ビルド必要**

### 新しいデモ環境の追加

1. `demo/` に新しいディレクトリを作成
2. 必要に応じて `bundle-components.config.ts` と `setup_components.sh` を作成
3. `.mise.toml` に task追加
4. `README.md` を作成

---

## トラブルシューティング

### "specifier 'react' は露出していますが、どこにも再マップされていません"

Rails/Go demoで発生。原因は外部依存関係がバンドルされていないため。

**解決方法**: `bundle-components.config.ts` ですべての依存関係をバンドルする（`rollupOptions.external` を設定しない）。

### "process is not defined"

ブラウザ環境では `process` オブジェクトが存在しないため発生。

**解決方法**: `define: { 'process.env.NODE_ENV': JSON.stringify('production') }` をVite設定に追加。

### Web Componentsが表示されない

1. ブラウザの開発者ツールでJSファイルが正しく読み込まれているか確認
2. `customElements.get('component-name')` で登録されているか確認
3. Rails/Goの場合、`./setup_components.sh` を実行したか確認

### TypeScript型エラー（Reactデモ）

Web Components用の型定義を `vite-env.d.ts` に追加：

```typescript
declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      'my-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
    }
  }
}
```
