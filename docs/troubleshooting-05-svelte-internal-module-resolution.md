# トラブルシューティング #5: Svelte内部モジュール解決エラー

## 問題の概要

Rails/Go demoでSvelte Web Componentをバンドルする際に以下のエラーが発生：

```
[vite]: Rollup failed to resolve import "svelte/internal/disclose-version" from
"/Users/tito/repos/web-components-samples/packages/svelte/src/SvelteCounter.svelte".
```

## 発生状況

- **環境**: Rails/Go demo のバンドルビルド時
- **タイミング**: `./setup_components.sh` スクリプト実行時
- **原因**: Svelte 5のコンパイラが生成する内部モジュールインポート (`svelte/internal/*`) がVite/Rollupで解決できない

## 根本原因

### Svelte 5の内部モジュール

Svelte 5は、コンパイル時に以下のような内部モジュールインポートを自動生成します：

- `svelte/internal/disclose-version`
- `svelte/internal/client`
- `svelte/internal/flags/*`

これらは Svelte の `package.json` の `exports` フィールドで定義されています：

```json
{
  "exports": {
    "./internal/disclose-version": {
      "default": "./src/internal/disclose-version.js"
    }
  }
}
```

### なぜ `packages/svelte/` ではビルドできるのか

`packages/svelte/vite.config.ts` でビルドする場合、`@sveltejs/vite-plugin-svelte` が適切に内部モジュールを解決します。

しかし、`demo/rails/` や `demo/go/` の`bundle-components.config.ts` から `.svelte` ファイルを直接ビルドする場合、Vite/Rollupのモジュール解決が失敗します。

### 試みた解決策と失敗

1. **Svelte plugin設定の追加** - `emitCss: false` を設定
2. **configFileの指定** - `svelte.config.js`へのパスを指定
3. **resolve.conditions** - エクスポート条件を明示
4. **resolve.alias** - 内部モジュールへのエイリアス設定
5. **optimizeDeps.include** - 依存関係の事前バンドル

すべて失敗。Vite 7.3 + Svelte 5.46 + @sveltejs/vite-plugin-svelte 6.2 の組み合わせでは、library modeで`.svelte`ファイルから直接ビルドすると内部モジュールが解決できない。

## 解決策

**packages/svelte/ で2つのビルドを生成する**

`packages/svelte/` のビルドスクリプトで、通常ビルドとバンドルビルドの両方を生成します。demo側はバンドル版を選択するだけです。

### 実装手順

#### 1. バンドルビルド設定を追加

`packages/svelte/vite.config.bundle.ts` を作成：

```typescript
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';

// すべての依存関係を含むバンドルビルド（Rails/Go用）
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
      emitCss: false,
    }),
  ],
  build: {
    outDir: resolve(__dirname, 'dist/bundle'),
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/SvelteCounter.svelte'),
      formats: ['es'],
      fileName: 'svelte-counter',
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    dedupe: ['svelte'],
    conditions: ['browser', 'default', 'import'],
  },
});
```

#### 2. package.json のビルドスクリプトを更新

両方のビルドを実行するように変更：

```json
{
  "exports": {
    ".": {
      "types": "./dist/svelte-counter.d.ts",
      "import": "./dist/svelte-counter.js"
    },
    "./bundle": {
      "import": "./dist/bundle/svelte-counter.js"
    }
  },
  "scripts": {
    "build": "vite build && vite build --config vite.config.bundle.ts"
  }
}
```

#### 3. demo の bundle-components.config.ts を更新

バンドル版を使用するようにエントリーポイントを変更（Svelteプラグインも不要）：

```typescript
// demo/rails/bundle-components.config.ts
// demo/go/bundle-components.config.ts
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],  // Svelteプラグイン不要！
  build: {
    lib: {
      entry: {
        vanilla: resolve(__dirname, '../../packages/vanilla/src/my-counter.ts'),
        react: resolve(__dirname, '../../packages/react/src/react-counter.tsx'),
        lit: resolve(__dirname, '../../packages/lit/src/lit-counter.ts'),
        preact: resolve(__dirname, '../../packages/preact/src/preact-counter.tsx'),
        // Svelteはバンドルビルドを使用
        svelte: resolve(__dirname, '../../packages/svelte/dist/bundle/svelte-counter.js'),
      },
    },
  },
});
```

## ビルド結果

### packages/svelte/ のビルド結果

```
packages/svelte/dist/
├── svelte-counter.js         # 通常版（56.68 KB, gzip: 16.79 KB）
└── bundle/
    └── svelte-counter.js     # バンドル版（68.35 KB, gzip: 19.99 KB）
```

バンドル版は通常版より約12KB大きいですが、これはSvelte内部モジュールが完全に含まれているためです。

### Rails/Go demo のビルド結果

```
demo/rails/public/components/  （または demo/go/static/components/）
├── vanilla.js   (1.61 KB, gzip: 0.79 KB)
├── lit.js       (22.38 KB, gzip: 7.29 KB)
├── preact.js    (23.31 KB, gzip: 8.00 KB)
├── svelte.js    (68.35 KB, gzip: 19.99 KB)  ← バンドル版を使用
├── react.js     (324.46 KB, gzip: 74.82 KB)
└── web-components-samples.css (1.26 KB, gzip: 0.50 KB)
```

## まとめ

- **問題**: Svelte 5の内部モジュールがVite library modeで解決できない
- **原因**: `svelte/internal/*` インポートがRollupで解決されない（Vite 7.3 + Svelte 5.46の既知の問題）
- **解決**: `packages/svelte/` で通常ビルドとバンドルビルドの両方を生成し、demo側はバンドル版を使用
- **メリット**:
  - demo側の設定がシンプル（Svelteプラグイン不要）
  - ビルド処理が `packages/` に集約される
  - 通常版とバンドル版を使い分け可能
- **結果**: すべての5つのフレームワーク（Vanilla、React、Lit、Preact、Svelte）が正常にバンドルされる

## 代替案

将来的にこの問題が解決された場合、以下の方法で`.svelte`ファイルから直接ビルドできる可能性があります：

1. **Vite/Svelteプラグインのアップデート**: バグ修正版が公開されるのを待つ
2. **Svelte 4にダウングレード**: Svelte 4には内部モジュールの問題がない
3. **Rollup設定の改善**: Rollup resolveプラグインの設定で解決できる可能性

## 関連ドキュメント

- [packages.md](../.claude/rules/packages.md) - Svelteパッケージの仕様
- [demo.md](../.claude/rules/demo.md) - Rails/Go demoの仕様
- [Svelte 5 Internal Module Resolution Issue](https://github.com/sveltejs/svelte/issues/8869)
- [Vite Library Mode with Svelte 5](https://github.com/vitejs/vite/discussions/6198)
