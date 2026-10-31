# iframe Test Server

iframe内でWeb Componentsを表示するためのテストサーバーです。クロスオリジン環境でのWeb Componentsの動作を検証できます。

## 技術スタック

- **ランタイム**: Node.js 26.13.0
- **パッケージマネージャー**: pnpm
- **フレームワーク**: [Hono](https://hono.dev/) - 軽量で高速なWebフレームワーク
- **開発ツール**: [tsx](https://tsx.is/) - TypeScript実行 & ホットリロード
- **言語**: TypeScript

## セットアップ

### 1. 依存関係のインストール

```bash
# プロジェクトルートで
pnpm install
```

### 2. Web Componentsのビルドとコピー

```bash
# プロジェクトルートで全パッケージをビルド
pnpm build

# iframe-serverにコンポーネントをコピー
mise demo:setup-iframe

# または直接実行
cd packages/iframe-server
./setup_components.sh
```

## 開発サーバーの起動

### 方法1: miseタスク（推奨）

```bash
# プロジェクトルートで
mise iframe-server

# または短縮形
mise iframe
```

### 方法2: 直接実行

```bash
cd packages/iframe-server
pnpm dev
```

サーバーは http://localhost:4001 で起動します。

## 利用可能なルート

| パス | 説明 |
|------|------|
| `/` | インデックスページ（全ルートへのリンク） |
| `/counter` | Counterコンポーネント |
| `/modal` | Modalコンポーネント |
| `/button` | Buttonコンポーネント |
| `/dropdown` | Dropdownコンポーネント |
| `/all` | 全コンポーネント |

## 使用例

### React Demoでの使用

React demoには既にiframeのサンプルが組み込まれています：

```bash
# ターミナル1: iframe-server起動
mise iframe-server

# ターミナル2: React demo起動
mise demo:react
```

http://localhost:3000 にアクセスすると、ページ下部にiframeで表示されたコンポーネントが確認できます。

### 手動でiframeに埋め込む

任意のHTMLページで以下のように使用できます：

```html
<iframe
  src="http://localhost:4001/all"
  width="100%"
  height="600"
  style="border: 2px solid #9b59b6; border-radius: 8px;"
  title="Web Components in iframe"
></iframe>
```

## ファイル構成

```
packages/iframe-server/
├── src/
│   └── index.ts              # Honoサーバー実装
├── public/
│   └── components/           # Web Componentsファイル（自動生成）
│       ├── vanilla.js
│       ├── react.js
│       ├── lit.js
│       ├── preact.js
│       ├── svelte.js
│       └── web-components-samples.css
├── setup_components.sh       # コンポーネントコピースクリプト
├── package.json
├── tsconfig.json
└── README.md
```

## 開発のポイント

### 自動リロード

tsxの`watch`モードにより、ソースコードの変更が自動的に検出されサーバーが再起動します。

### コンポーネント更新時の手順

1. `packages/*`でコンポーネントを編集
2. `pnpm build`でビルド
3. `./setup_components.sh`でiframe-serverにコピー
4. ブラウザをリロード

### クロスオリジン環境のテスト

- iframe-server（4001ポート）とdemoアプリ（3000ポート）は異なるオリジンです
- これにより、以下のクロスオリジン挙動をテストできます：
  - イベントの伝播とハンドリング
  - スタイルのカプセル化
  - サードパーティCookieやストレージへのアクセス制限

## トラブルシューティング

### 依存関係がインストールされていない

```bash
# プロジェクトルートで
pnpm install
```

### コンポーネントが表示されない

1. コンポーネントがビルドされているか確認：
   ```bash
   ls -la packages/vanilla/dist/
   ls -la packages/react/dist/bundle/
   ```

2. setup_components.shを実行したか確認：
   ```bash
   ls -la packages/iframe-server/public/components/
   ```

3. ビルドしてから再度セットアップ：
   ```bash
   pnpm build
   cd packages/iframe-server
   ./setup_components.sh
   ```

### ポート4001が既に使用されている

`src/index.ts`の最後の行でポート番号を変更できます：

```typescript
export default {
  port: 4002, // 任意のポート番号に変更
  fetch: app.fetch,
};
```

## ADR（Architecture Decision Record）

このパッケージの設計判断については、以下のドキュメントを参照してください：

- [docs/architecture/adr-003-iframe-testing-server.md](../../docs/architecture/adr-003-iframe-testing-server.md)

## ライセンス

このプロジェクトのライセンスに従います。
