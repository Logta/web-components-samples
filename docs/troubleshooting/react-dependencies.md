# "specifier 'react' は露出していますが、どこにも再マップされていません"

## 問題の概要

Rails/Go demoでReact Web Componentを使用しようとすると、以下のようなエラーが発生します：

```
Error: The specifier "react" was a bare specifier, but was not remapped to anything.
Relative references must start with either "/", "./", or "../".
```

## 発生状況

- **環境**: Rails demo / Go demo（サーバーレンダリング環境）
- **タイミング**: ブラウザでJSファイルを読み込んだとき
- **原因**: バンドルされたJSファイル内で`import React from 'react'`のようなベアインポートが残っている

## 根本原因

### 開発環境とのビルド設定の違い

**開発環境（React/VanillaJS demo）:**

```typescript
// packages/react/vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/react-counter.tsx',
      formats: ['es'],
      fileName: 'react-counter'
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // ← 外部依存として扱う
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
```

- `external`で`react`と`react-dom`を外部依存として指定
- ビルド後のJSファイルには`import React from 'react'`が残る
- 開発環境ではVite dev serverやpnpm workspaceが依存関係を解決してくれる

**本番環境（Rails/Go demo）:**

```html
<!-- ビルド済みJSファイルを静的に配信 -->
<script type="module" src="/components/react.js"></script>
```

- `node_modules`にアクセスできない
- ベアインポート（`'react'`）が解決できない
- エラーが発生

## 解決策

### `bundle-components.config.ts`ですべての依存関係をバンドル

Rails/Go demo用の専用ビルド設定で、**外部依存を含めずにすべてバンドル**します：

```typescript
// demo/rails/bundle-components.config.ts
// demo/go/bundle-components.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: resolve(__dirname, 'public/components'), // または static/components
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
      // external を設定しない（すべてバンドルする）
      output: {
        manualChunks: undefined, // 単一ファイル出力
      }
    }
  }
});
```

### 重要なポイント

1. **`external`を設定しない**
   - デフォルトではすべての依存関係がバンドルに含まれる
   - `react`、`react-dom`、`react-to-webcomponent`などすべてがバンドルされる

2. **`manualChunks: undefined`**
   - 各エントリーポイントを個別のファイルとして出力
   - チャンクを分割しない（1ファイルで完結）

3. **`process.env.NODE_ENV`を置換**
   - ブラウザ環境では`process`オブジェクトが存在しない
   - ビルド時に文字列に置換することで、Reactのバンドルサイズを削減
   - 962KB → 323KB（約66%削減）

## セットアップスクリプト

`setup_components.sh`でビルドを実行：

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

## 結果

**バンドル前（開発環境用ビルド）:**
```javascript
import React from 'react';  // ← ベアインポート
import ReactDOM from 'react-dom';
// ...
```

**バンドル後（Rails/Go用ビルド）:**
```javascript
// すべての依存関係が含まれた1つのファイル
// react.js (324.52 KB, gzip: 74.83 KB)
```

## バンドルサイズ

Rails/Go demo（gzip圧縮後）:

| ファイル | サイズ（元） | サイズ（gzip） |
|---------|------------|---------------|
| `vanilla.js` | 1.61 KB | 0.79 KB |
| `lit.js` | 22.38 KB | 7.29 KB |
| `react.js` | 324.52 KB | 74.83 KB |
| `web-components-samples.css` | 0.54 KB | 0.31 KB |
| **合計** | **348.05 KB** | **83.22 KB** |

## まとめ

- **問題**: Rails/Go環境でReactの依存関係が解決できない
- **原因**: ベアインポートが残っている & `node_modules`にアクセスできない
- **解決**: 専用のビルド設定ですべての依存関係をバンドル
- **結果**: 1ファイルで完結し、どこでも動作する

## 関連ドキュメント

- [トラブルシューティング #2: "process is not defined"](./troubleshooting-02-process-env.md)
- [GEMINI.md](../GEMINI.md#2-railsgo環境のバンドル戦略)
