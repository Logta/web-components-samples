# "process is not defined"

## 問題の概要

Rails/Go demoでReact Web Componentを読み込むと、以下のようなエラーが発生します：

```
Uncaught ReferenceError: process is not defined
```

## 発生状況

- **環境**: Rails demo / Go demo（ブラウザ環境）
- **タイミング**: バンドルされたReact JSファイルを実行したとき
- **原因**: Reactのコード内で`process.env.NODE_ENV`が使用されている

## 根本原因

### Node.js環境とブラウザ環境の違い

**Node.js環境:**
```javascript
// process オブジェクトがグローバルに存在
if (process.env.NODE_ENV === 'production') {
  // 本番用コード
} else {
  // 開発用コード
}
```

**ブラウザ環境:**
```javascript
// ❌ process オブジェクトは存在しない
if (process.env.NODE_ENV === 'production') {
  // ReferenceError: process is not defined
}
```

### Reactのコード内での使用例

Reactのソースコード内では、環境判定のために`process.env.NODE_ENV`が頻繁に使用されています：

```javascript
// React内部のコード例
if (process.env.NODE_ENV !== 'production') {
  // 開発時のみ有効な警告やデバッグ機能
  console.warn('Warning: ...');
  validateProps(props);
}

// 本番用の最適化されたコード
return optimizedComponent();
```

通常、ビルドツール（Webpack、Vite、Rollupなど）がビルド時にこの環境変数を文字列に置き換えます。しかし、**明示的に設定しないと置き換えられません**。

## 解決策

### Vite設定で`process.env.NODE_ENV`を置換

`bundle-components.config.ts`の`define`オプションで、ビルド時に文字列に置換します：

```typescript
// demo/rails/bundle-components.config.ts
// demo/go/bundle-components.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

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
        react: resolve(__dirname, '../../packages/react/src/react-counter.tsx'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  }
});
```

### defineオプションの仕組み

`define`オプションは、**ビルド時にコード内の指定された文字列を置き換える**機能です：

**ビルド前:**
```javascript
if (process.env.NODE_ENV !== 'production') {
  console.warn('Development mode');
}
```

**ビルド後:**
```javascript
if ("production" !== 'production') {  // ← 置き換えられる
  console.warn('Development mode');
}
```

さらに、ミニファイヤー（terser）がデッドコードを削除します：

**最終的なビルド結果:**
```javascript
// if ("production" !== 'production') は常にfalseなので削除される
```

## 効果: バンドルサイズの大幅な削減

### バンドルサイズの比較

`process.env.NODE_ENV`を置き換えることで、Reactのバンドルサイズが**大幅に削減**されます：

| 設定 | バンドルサイズ | gzip後 |
|-----|--------------|--------|
| **置換なし** | 962 KB | 不明 |
| **置換あり** | 324.52 KB | 74.83 KB |
| **削減率** | **-66.3%** | - |

### なぜこんなに削減されるのか？

1. **開発用コードの削除**
   - 警告メッセージ
   - バリデーション処理
   - デバッグ用のコード

2. **デッドコードの除去**
   - 条件分岐が静的に評価される
   - 到達不可能なコードが削除される

3. **最適化の連鎖**
   - 未使用の関数が削除される
   - 定数の畳み込み最適化
   - ミニファイケーションの効率化

## 実装例

### 完全なビルド設定

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],

  // ✅ 重要: process.env を置換
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },

  build: {
    outDir: resolve(__dirname, 'public/components'),
    emptyOutDir: true,

    // ライブラリモード
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
      // すべてバンドル
      output: {
        manualChunks: undefined,
      }
    }
  }
});
```

## 他の環境変数も置き換え可能

必要に応じて、他の環境変数も置き換えることができます：

```typescript
define: {
  'process.env.NODE_ENV': JSON.stringify('production'),
  'process.env.API_URL': JSON.stringify('https://api.example.com'),
  'process.env.DEBUG': JSON.stringify('false'),
  '__APP_VERSION__': JSON.stringify('1.0.0'),
}
```

## 注意点

### 1. 必ず`JSON.stringify()`を使う

```typescript
// ❌ 誤り
define: {
  'process.env.NODE_ENV': 'production',  // 文字列として置換されない
}

// ✅ 正しい
define: {
  'process.env.NODE_ENV': JSON.stringify('production'),  // "production" として置換される
}
```

`JSON.stringify()`を使わないと、識別子として扱われてしまい、エラーになります。

### 2. オブジェクト全体は置換できない

```typescript
// ❌ 動作しない
define: {
  'process.env': JSON.stringify({ NODE_ENV: 'production' }),
}

// ✅ 個別に指定
define: {
  'process.env.NODE_ENV': JSON.stringify('production'),
  'process.env.DEBUG': JSON.stringify('false'),
}
```

### 3. ドットを含む文字列は引用符で囲む

```typescript
define: {
  'process.env.NODE_ENV': JSON.stringify('production'),  // ✅ 引用符で囲む
}
```

## まとめ

- **問題**: ブラウザ環境で`process`オブジェクトが存在しない
- **原因**: Reactのコード内で`process.env.NODE_ENV`が使用されている
- **解決**: Vite設定の`define`オプションでビルド時に置換
- **効果**: エラー解消 + バンドルサイズ66%削減（962KB → 324KB）

## 関連ドキュメント

- [トラブルシューティング #1: React依存関係の解決](./react-dependencies.md)
- [GEMINI.md](../GEMINI.md#2-railsgo環境のバンドル戦略)
