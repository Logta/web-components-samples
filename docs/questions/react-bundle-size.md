# Web Components バンドルサイズ徹底比較

> **TL;DR**: React互換が必要なら**Preact**（8KB）、最軽量なら**Lit**（7KB）、ライブラリ不要なら**Vanilla JS**（0.8KB）を選びましょう。

---

## 📊 実測バンドルサイズ（gzip圧縮後）

このプロジェクトで5つのフレームワークを使って同じカウンターコンポーネントを実装した結果：

| フレームワーク | バンドルサイズ | React比 | 特徴 |
|--------------|------------|---------|------|
| **Vanilla JS** | **0.79 KB** | 1/95x 🏆 | ライブラリなし、究極の軽量 |
| **Lit** | **7.29 KB** | 1/10x 🥈 | Web Components専用設計 |
| **Preact** | **8.00 KB** | 1/9x 🥉 | React互換、驚異的な軽さ |
| **Svelte** | **19.99 KB** | 1/4x | コンパイラベース |
| **React** | **74.82 KB** | 1x | フルフレームワーク |

### 視覚的比較

```
Vanilla JS  ▏ 0.79 KB
Lit         ▉ 7.29 KB
Preact      ▉ 8.00 KB
Svelte      ██ 19.99 KB
React       █████████ 74.82 KB
```

---

## 🎯 どれを選ぶべきか？

### シンプルなUI → **Vanilla JS**（0.8KB）

```typescript
// Shadow DOM、カプセル化、ピュアなブラウザAPI
class MyCounter extends HTMLElement {
  private _count = 0;

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <button onclick="...">-</button>
      <span>${this._count}</span>
      <button onclick="...">+</button>
    `;
  }
}
```

**メリット**:
- ✅ **最軽量**（0.79KB）
- ✅ **依存関係ゼロ**
- ✅ **ブラウザ標準**

**デメリット**:
- ❌ テンプレートが冗長
- ❌ 状態管理が手動

**最適な用途**: ボタン、入力フィールド、シンプルなウィジェット

---

### 軽量ライブラリ → **Lit**（7.3KB）

```typescript
// テンプレートリテラル、リアクティビティ、デコレーター
@customElement('lit-counter')
export class LitCounter extends LitElement {
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <button @click=${() => this.count--}>-</button>
      <span>${this.count}</span>
      <button @click=${() => this.count++}>+</button>
    `;
  }
}
```

**メリット**:
- ✅ **Web Components専用設計**
- ✅ **宣言的テンプレート**
- ✅ **自動リアクティビティ**
- ✅ **7.29KB**（非常に軽量）

**デメリット**:
- ⚠️ Lit独自のAPI（Reactとは異なる）
- ⚠️ エコシステムはReactより小さい

**最適な用途**: デザインシステム、UIライブラリ、複雑なコンポーネント

---

### React互換 → **Preact**（8KB）⭐

```typescript
// Reactとほぼ同じAPI、驚異的な軽さ
function PreactCounter({ count = 0 }) {
  const [cnt, setCnt] = useState(Number(count));

  return (
    <div>
      <button onClick={() => setCnt(cnt - 1)}>-</button>
      <span>{cnt}</span>
      <button onClick={() => setCnt(cnt + 1)}>+</button>
    </div>
  );
}

register(PreactCounter, 'preact-counter', ['count']);
```

**メリット**:
- ✅ **React APIとほぼ互換**（useState、useEffect、JSX）
- ✅ **8.00KB**（Reactの1/9）
- ✅ **既存Reactコードの移行が簡単**
- ✅ **preact-custom-element**でWeb Components化

**デメリット**:
- ⚠️ 100%の互換性ではない（一部機能に差異）
- ⚠️ HTML属性の自動型変換がない（手動で`Number()`必要）

**最適な用途**: Reactエコシステムを活用したい、バンドルサイズも重視

**注意**: 属性の型変換は手動で行う必要があります
→ [トラブルシューティング #6: Preact属性の型変換](../troubleshootings/06-preact-attribute-type-conversion.md)

---

### モダンなコンパイラベース → **Svelte**（20KB）

```svelte
<svelte:options customElement="svelte-counter" />

<script lang="ts">
  let { count = $bindable(0) } = $props();
  let currentCount = $state(count);
</script>

<button onclick={() => currentCount--}>-</button>
<span>{currentCount}</span>
<button onclick={() => currentCount++}>+</button>
```

**メリット**:
- ✅ **コンパイル時最適化**
- ✅ **リアクティビティが自然**
- ✅ **19.99KB**（Reactの1/4）
- ✅ **Svelte 5の新しいrunes構文**

**デメリット**:
- ⚠️ コンパイルが必須
- ⚠️ エコシステムはReactより小さい

**最適な用途**: モダンな開発体験を重視、SPA的な複雑さ

---

### フルフレームワーク → **React**（75KB）

```typescript
// エコシステム最大、豊富な機能
function ReactCounter({ count = 0 }) {
  const [cnt, setCnt] = useState(Number(count));

  useEffect(() => setCnt(Number(count)), [count]);

  return (
    <div>
      <button onClick={() => setCnt(cnt - 1)}>-</button>
      <span>{cnt}</span>
      <button onClick={() => setCnt(cnt + 1)}>+</button>
    </div>
  );
}

const Element = reactToWebComponent(ReactCounter, React, ReactDOMClient);
customElements.define('react-counter', Element);
```

**メリット**:
- ✅ **最大のエコシステム**
- ✅ **豊富なライブラリ・ツール**
- ✅ **企業採用実績**
- ✅ **充実したドキュメント**

**デメリット**:
- ❌ **74.82KB**（他と比べて大きい）
- ❌ React + ReactDOM + react-to-webcomponentがすべてバンドル

**最適な用途**: Reactエコシステムが必須、複雑なアプリケーション

---

## 🔬 なぜReactが大きいのか？

### 1. React本体 + ReactDOM + 変換ライブラリ

```typescript
import React from 'react';                      // ~100KB
import * as ReactDOMClient from 'react-dom/client'; // ~200KB
import reactToWebComponent from 'react-to-webcomponent'; // ~20KB
```

**内訳**:
- React本体: 仮想DOM、Hooks、コアロジック
- ReactDOM: ブラウザDOM連携、イベントシステム
- react-to-webcomponent: Web Component変換

### 2. フルフレームワークの機能

| 機能 | 説明 |
|------|------|
| Virtual DOM | 効率的DOM更新のための抽象レイヤー |
| Fiber Architecture | 非同期レンダリング、優先順位制御 |
| Synthetic Events | クロスブラウザ互換イベント |
| Scheduler | タスク優先順位管理 |
| Reconciliation | 差分レンダリングアルゴリズム |

### 3. Rails/Go環境の制約

```typescript
// bundle-components.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      // 依存関係を external にしない（すべてバンドル）
      output: { manualChunks: undefined }
    }
  }
});
```

**理由**: Rails/Go環境では`node_modules`にアクセスできないため、すべてを単一ファイルに含める必要がある。

### 4. process.env置換による最適化

```typescript
define: {
  'process.env.NODE_ENV': JSON.stringify('production')
}
```

**効果**: 962KB → 324KB（**66%削減**）

この最適化がなければ、react.jsは約1MBになります。

---

## 📈 フレームワーク選択フローチャート

```
ライブラリなしで実装可能？
  ├─ YES → Vanilla JS（0.8KB）
  └─ NO → 既存のReactコードがある？
      ├─ YES → バンドルサイズ重視？
      │   ├─ YES → Preact（8KB）⭐
      │   └─ NO → React（75KB）
      └─ NO → Web Components専用設計？
          ├─ YES → Lit（7KB）
          └─ NO → モダンな開発体験？
              ├─ YES → Svelte（20KB）
              └─ NO → Lit（7KB）
```

---

## 💡 サイズ削減テクニック（React使用時）

### オプション1: CDNから読み込む

```html
<!-- CDN版React（ブラウザキャッシュ活用） -->
<script src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
```

```typescript
// bundle-components.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' }
      }
    }
  }
});
```

**効果**: react.js → 約20-30KB（60%削減）
**デメリット**: 外部依存、オフライン不可

### オプション2: Code Splitting（複数コンポーネント時）

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom']
        }
      }
    }
  }
});
```

**注意**: 単一コンポーネントでは効果なし

---

## 🎓 実装例を見る

すべてのフレームワークの実装例がこのプロジェクトに含まれています：

- **[packages/vanilla/](../../packages/vanilla/)** - Vanilla JS実装
- **[packages/lit/](../../packages/lit/)** - Lit実装
- **[packages/preact/](../../packages/preact/)** - Preact実装⭐
- **[packages/svelte/](../../packages/svelte/)** - Svelte実装
- **[packages/react/](../../packages/react/)** - React実装

各デモで動作確認できます：
```bash
mise demo:react      # port 3000
mise demo:vanilla    # port 3001
mise demo:rails      # port 3000
mise demo:go         # port 8080
```

---

## 🔗 関連ドキュメント

### トラブルシューティング
- [#1: React依存関係の解決](../troubleshootings/01-react-dependencies.md)
- [#2: process.env未定義エラー](../troubleshootings/02-process-env.md)
- [#6: Preact属性の型変換問題](../troubleshootings/06-preact-attribute-type-conversion.md)

### 仕様
- [パッケージ仕様](../../.claude/rules/packages.md)
- [デモ仕様](../../.claude/rules/demo.md)

---

## ✅ 結論

| 優先事項 | 推奨 | サイズ |
|---------|------|-------|
| **最軽量** | Vanilla JS | 0.79 KB |
| **バランス重視** | Lit | 7.29 KB |
| **React互換＋軽量** | **Preact** ⭐ | 8.00 KB |
| **モダン開発体験** | Svelte | 19.99 KB |
| **Reactエコシステム** | React | 74.82 KB |

**ベストプラクティス**: Reactの機能が必要なら**Preact**を使いましょう。APIはほぼ同じで、サイズは1/9です。
