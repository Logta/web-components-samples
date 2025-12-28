# Web Components バンドルサイズ徹底比較

> **TL;DR**: React互換が必要なら**Preact**（9.39KB）、最軽量なら**Vanilla JS**（2.05KB）、モーダル等含む場合も**Preact**（9.39KB）が最適解。

---

## 📊 実測バンドルサイズ（gzip圧縮後）

### カウンター + モーダル（実用的なコンポーネント）

すべてのフレームワークでカウンターとモーダルの両方を実装した結果：

| フレームワーク | バンドルサイズ (gzip) | React比 | 特徴 |
|--------------|---------------------|---------|------|
| **Vanilla JS** | **2.05 KB** | 1/107x 🏆 | ライブラリなし、究極の軽量 |
| **Lit** | **5.15 KB** | 1/43x 🥈 | Web Components専用設計 |
| **Preact** | **9.39 KB** | 1/23x 🥉 | React互換、驚異的な軽さ |
| **Svelte** | **39.12 KB** | 1/6x | Melt UI含む、アクセシブル |
| **React** | **219.92 KB** | 1x | フルフレームワーク |

**重要な発見**:
- **Preact**はモーダルを含めてもたった**9.39KB**（Reactの1/23）
- **Vanilla JS**は驚異の**2.05KB**（全フレームワークで最軽量）
- **Lit**は**5.15KB**（Web Components専用ライブラリとして最適）
- **Svelte + Melt UI**は**39.12KB**（アクセシビリティ重視、Reactより約5.6倍軽量）
- **React**は**219.92KB**（モーダル含む、最も重い）

### 視覚的比較（カウンター + モーダル）

```
Vanilla JS  ▏ 2.05 KB
Lit         ▏ 5.15 KB
Preact      ▏ 9.39 KB
Svelte      ███ 39.12 KB (Melt UI含む)
React       ████████████████████ 219.92 KB
```

---

## 🎯 どれを選ぶべきか？

### シンプルなUI → **Vanilla JS**（2.05KB）

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
- ✅ **最軽量**（2.05KB）
- ✅ **依存関係ゼロ**
- ✅ **ブラウザ標準**

**デメリット**:
- ❌ テンプレートが冗長
- ❌ 状態管理が手動

**最適な用途**: ボタン、入力フィールド、シンプルなウィジェット

---

### 軽量ライブラリ → **Lit**（7.29KB）

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

### React互換 → **Preact**（9.39KB）⭐

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
- ✅ **9.39KB**（Reactの1/8）
- ✅ **既存Reactコードの移行が簡単**
- ✅ **preact-custom-element**でWeb Components化

**デメリット**:
- ⚠️ 100%の互換性ではない（一部機能に差異）
- ⚠️ HTML属性の自動型変換がない（手動で`Number()`必要）

**最適な用途**: Reactエコシステムを活用したい、バンドルサイズも重視

**注意**: 属性の型変換は手動で行う必要があります
→ [トラブルシューティング #6: Preact属性の型変換](../troubleshootings/06-preact-attribute-type-conversion.md)

---

### モダンなコンパイラベース → **Svelte**（39.12KB）

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
- ✅ **39.12KB**（カウンター + モーダル、Melt UI含む）
- ✅ **Svelte 5の新しいrunes構文**
- ✅ **Melt UI**でアクセシブルなUIコンポーネントを簡単に作成

**デメリット**:
- ⚠️ コンパイルが必須
- ⚠️ エコシステムはReactより小さい
- ⚠️ Melt UIを使うとバンドルサイズが大きくなる（39.12KB vs Preactの9.39KB）

**最適な用途**: アクセシビリティ重視、モダンな開発体験、複雑なUIコンポーネント（モーダル、ドロップダウンなど）

---

### フルフレームワーク → **React**（219.92KB）

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
- ❌ **219.92KB**（モーダル含む、他と比べて圧倒的に大きい）
- ❌ React + ReactDOM + react-to-webcomponentがすべてバンドル
- ❌ Preactの約23倍のサイズ

**最適な用途**: Reactエコシステムが必須、複雑なアプリケーション

**重要**: 同じReact APIを使いたいなら、**Preactを強く推奨**します（9.39KB vs 219.92KB、約23倍軽量）

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

**実測（モーダル含む）**: 973.57 kB → **219.92 KB (gzip)**

### 2. フルフレームワークの機能

| 機能 | 説明 |
|------|------|
| Virtual DOM | 効率的DOM更新のための抽象レイヤー |
| Fiber Architecture | 非同期レンダリング、優先順位制御 |
| Synthetic Events | クロスブラウザ互換イベント |
| Scheduler | タスク優先順位管理 |
| Reconciliation | 差分レンダリングアルゴリズム |

これらの機能により、Reactは**Preactの約23倍**のサイズになります。

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

**効果**: この最適化により、開発用のデバッグコードが削除され、バンドルサイズが大幅に削減されます。

**比較**:
- **Preact**: 9.39 KB（モーダル含む）
- **React**: 219.92 KB（モーダル含む）
- **差分**: 約210 KB（Reactは約23倍重い）

---

## 📈 フレームワーク選択フローチャート

```
ライブラリなしで実装可能？
  ├─ YES → Vanilla JS（2.05KB）🏆
  └─ NO → 既存のReactコードがある？
      ├─ YES → Preact（9.39KB）⭐ 強く推奨！
      │         （Reactより23倍軽量、API互換）
      │
      └─ NO → アクセシビリティが最重要？
          ├─ YES → Svelte + Melt UI（39.12KB）
          │         （WAI-ARIA準拠、キーボード操作対応）
          │
          └─ NO → Web Components専用設計が必要？
              ├─ YES → Lit（5.15KB）🥈
              └─ NO → Preact（9.39KB）🥉
                      （React APIが使える、最も実用的）
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
mise demo:rails      # port 3002
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

### 実測結果まとめ（カウンター + モーダル）

| 優先事項 | 推奨 | サイズ (gzip) | React比 |
|---------|------|--------------|---------|
| **最軽量** | Vanilla JS 🏆 | 2.05 KB | 1/107x |
| **Web Components専用** | Lit 🥈 | 5.15 KB | 1/43x |
| **React互換＋軽量** | **Preact** ⭐ 🥉 | 9.39 KB | 1/23x |
| **アクセシビリティ重視** | Svelte + Melt UI | 39.12 KB | 1/6x |
| **Reactエコシステム** | React | 219.92 KB | 1x |

**ベストプラクティス**:

1. **Reactの機能が必要なら → Preact一択** ⭐
   - APIはReactとほぼ同じ（useState、useEffect、JSX）
   - サイズは**9.39KB**（Reactの1/23、約23倍軽量）
   - モーダルを含めても驚異の軽さ
   - **結論**: Reactを使う理由はほぼない

2. **最軽量を追求 → Vanilla JS** 🏆
   - たった**2.05KB**（全フレームワークで最軽量）
   - ライブラリ依存ゼロ、ブラウザ標準APIのみ
   - シンプルなコンポーネントに最適

3. **Web Components専用 → Lit** 🥈
   - **5.15KB**（Preactより軽量だがReact API非互換）
   - 宣言的テンプレート、自動リアクティビティ
   - デザインシステム、UIライブラリに最適

4. **アクセシビリティ最重要 → Svelte + Melt UI**
   - **39.12KB**（WAI-ARIA準拠、キーボード操作対応）
   - Reactより約5.6倍軽量
   - モーダル、ドロップダウン等の複雑なUIに最適

5. **React → 使わない**
   - **219.92KB**（他と比べて圧倒的に重い）
   - Preactで同じAPIが使えるため、選ぶ理由がない
   - どうしてもReactが必要な場合のみ

**最も重要な結論**:
**React APIを使いたいなら、迷わずPreact（9.39KB）を選びましょう。Reactの23倍軽量で、APIはほぼ同じです。**
