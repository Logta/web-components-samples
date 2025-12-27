# Q&A: なぜReact Web Componentのファイルサイズが大きいのか？

## 質問

React Web Componentのバンドルサイズが他の実装と比較して非常に大きいのはなぜですか？

## 回答

### ファイルサイズの比較

| Component | 非圧縮 | gzip圧縮 | 比率 |
|-----------|--------|----------|------|
| vanilla.js | 1.6 KB | 0.79 KB | 1x |
| lit.js | 22 KB | 7.29 KB | 9.2x |
| **react.js** | **324 KB** | **75 KB** | **94.8x** |

### React Web Componentが大きい理由

#### 1. React本体とReactDOMがすべてバンドルされている

React Web Componentには以下がすべて含まれています：

```typescript
// packages/react/src/react-counter.tsx
import React, { useEffect, useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
```

**バンドルに含まれるもの：**
- **React本体（~100KB）**: useState、useEffect、仮想DOM、コアロジック
- **ReactDOM（~200KB）**: ブラウザDOMとの連携、createRoot API、イベントシステム
- **react-to-webcomponent（~20KB）**: ReactをWeb Componentに変換するライブラリ
- **その他の依存関係**: Scheduler、オブジェクト割り当てヘルパーなど

#### 2. Reactは完全なフレームワーク

Reactは以下の機能を持つフルフレームワークです：

| 機能 | 説明 |
|------|------|
| 仮想DOM (Virtual DOM) | 効率的なDOM更新のための抽象レイヤー |
| 差分レンダリング (Reconciliation) | 変更を最小限に抑えるアルゴリズム |
| イベントシステム (Synthetic Events) | クロスブラウザ互換のイベント処理 |
| Hooks システム | useState、useEffectなどの状態管理 |
| Fiber アーキテクチャ | 非同期レンダリングと優先順位制御 |
| スケジューラー | タスクの優先順位付けと実行管理 |

**他の実装との比較：**
- **Vanilla JS**: ブラウザAPIのみ（依存関係なし） → 最小サイズ
- **Lit**: 軽量なWeb Componentsライブラリ（必要最小限の機能） → 中程度のサイズ
- **React**: フルフレームワーク（豊富な機能） → 大きいサイズ

#### 3. process.env の置換による最適化

`bundle-components.config.ts` で `process.env.NODE_ENV` を置換しています：

```typescript
// demo/go/bundle-components.config.ts
export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
```

**この設定の効果：**
- React開発版（約962KB） → 本番版（324KB）
- **66%のサイズ削減**
- 開発用の警告、エラーメッセージ、DevToolsサポートが削除される

この最適化がなければ、react.jsは約1MBになります。

#### 4. バンドル戦略の影響

Rails/Go demoでは、すべての依存関係をバンドルに含める戦略を採用：

```typescript
// bundle-components.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      // 依存関係を external にしない（すべてバンドルする）
      output: {
        manualChunks: undefined, // 単一ファイル出力
      },
    },
  },
});
```

**理由：**
- Rails/Go環境では `node_modules` にアクセスできない
- 単一ファイルで完結させる必要がある
- CDNや外部依存を避ける

### サイズを削減する方法

#### オプション1: Preactに置き換える（推奨）

[Preact](https://preactjs.com/)はReact互換の軽量ライブラリです：

```bash
pnpm add preact
pnpm add preact-custom-element
```

```typescript
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import register from 'preact-custom-element';

function CounterComponent({ count = 0 }) {
  const [currentCount, setCurrentCount] = useState(count);

  useEffect(() => {
    setCurrentCount(count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCurrentCount(currentCount - 1)}>-</button>
      <span>{currentCount}</span>
      <button onClick={() => setCurrentCount(currentCount + 1)}>+</button>
    </div>
  );
}

register(CounterComponent, 'preact-counter', ['count'], { shadow: true });
```

**サイズ削減効果：**
- Preact本体: 約4KB（gzip）
- 合計: 約10-15KB（gzip） → **80%削減**

#### オプション2: Litを使用する

すでにLitコンポーネントは7.29KB（gzip）と軽量です：

```typescript
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class LitCounter extends LitElement {
  @property({ type: Number })
  count: number = 0;

  // ...実装
}
```

#### オプション3: CDNからReactを読み込む

**メリット：**
- ユーザーのブラウザキャッシュを活用できる
- 複数のサイトで同じReactを共有

**デメリット：**
- 外部依存が増える
- ネットワーク遅延の可能性
- オフライン環境で動作しない

```html
<!-- CDN版の例 -->
<script crossorigin src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
<script type="module" src="/components/react.js"></script>
```

```typescript
// bundle-components.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'], // 外部化
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
```

**サイズ削減効果：**
- react.js: 約20-30KB（gzip） → **60%削減**
- ただし、React本体は別途CDNから読み込み

#### オプション4: Code Splitting（複数コンポーネントの場合）

複数のReact Web Componentがある場合、Reactを共有チャンクとして分離：

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
});
```

**注意：** 今回は単一コンポーネントなので効果なし。

### まとめ

#### なぜReactが大きいのか

1. **React本体 + ReactDOM + react-to-webcomponent がすべてバンドル**
   - 合計324KB（非圧縮）、75KB（gzip圧縮）

2. **Reactは完全なフレームワーク**
   - 仮想DOM、イベントシステム、Fiber、スケジューラーなど
   - Vanilla（ライブラリなし）やLit（軽量）と比べて大幅に大きい

3. **すべてを単一ファイルにバンドル**
   - Rails/Go環境では `node_modules` にアクセスできないため必要

#### これは問題か？

**想定通りの動作です。** Reactの豊富な機能とのトレードオフです。

- ✅ **シンプルなコンポーネント**: Vanilla JSやLitが適切（1-8KB）
- ✅ **複雑なUI、状態管理**: Reactの価値がある（75KB）
- ⚠️ **中間の複雑さ**: Preactを検討（10-15KB）

#### 推奨事項

| ユースケース | 推奨実装 | gzipサイズ |
|--------------|----------|------------|
| シンプルなUI要素 | Vanilla JS | 0.79 KB |
| モダンなWeb Components | Lit | 7.29 KB |
| React互換が必要（軽量） | Preact | ~15 KB |
| React互換が必要（フル機能） | React | 75 KB |

## 関連ドキュメント

- [packages.md](../.claude/rules/packages.md) - パッケージの詳細仕様
- [demo.md](../.claude/rules/demo.md) - デモの詳細仕様
- [troubleshooting-02-process-env.md](../docs/troubleshooting-02-process-env.md) - process.env最適化の詳細
