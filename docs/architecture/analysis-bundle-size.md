# Web Components バンドルサイズ徹底比較（2026年1月版）

> **TL;DR**: 最軽量なら**Vanilla JS**（3.86KB）、主要ライブラリでは**Lit**（6.92KB）が最小。WAI-ARIA準拠のZag.js統合版は**Lit+Tailwind**（44.44KB）。React互換なら**Preact**（11.07KB）が優秀。

---

## 📊 実測バンドルサイズ（gzip圧縮後）

### 基本コンポーネント群（カウンター + ボタン + ドロップダウン + モーダル）

すべてのフレームワークで主要なコンポーネントを実装した結果：

| フレームワーク | バンドルサイズ (gzip) | Vanilla比 | 特徴 |
|--------------|---------------------|-----------|------|
| **Vanilla JS** | **3.86 KB** | 1x 🏆 | ライブラリなし、究極の軽量 |
| **Lit** | **6.92 KB** | 1.79x 🥈 | Web Components専用設計 |
| **React** | **10.73 KB** | 2.78x 🥉 | react-to-webcomponent使用 |
| **Preact** | **11.07 KB** | 2.87x | React互換、驚異的な軽さ |
| **Svelte** | **43.26 KB** | 11.2x | コンパイラベース |
| **Lit+Tailwind** | **44.44 KB** | 11.5x | Zag.js統合、WAI-ARIA準拠 |

### セルフコンテインド版（すべての依存関係を含む）

Rails/Go等のサーバーレンダリング環境向けのバンドル版：

| フレームワーク | バンドルサイズ (gzip) | 基本版比 | 用途 |
|--------------|---------------------|---------|------|
| **Lit** | **25.31 KB** | 3.66x | Lit本体を含む |
| **Svelte** | **47.14 KB** | 1.09x | Svelte本体を含む |
| **Lit+Tailwind** | **47.87 KB** | 1.08x | Zag.js + Lit + Tailwind |
| **React** | **75.69 KB** | 7.06x | React + ReactDOM含む |

**重要な発見**:

1. **Vanilla JS**は依然として**3.86KB**で最軽量を維持
2. **Lit**は**6.92KB**と非常に軽量で、Web Components専用ライブラリとして優秀
3. **React Web Component**は**10.73KB**と意外に軽量（react-to-webcomponent使用）
4. **Preact**は**11.07KB**でReact互換を保ちながら軽量
5. **Lit+Tailwind（Zag.js統合）**は**44.44KB**で、WAI-ARIA準拠のアクセシブルなコンポーネントを実現

### 視覚的比較

```
Vanilla JS      ▏ 3.86 KB  (究極の軽量)
Lit             ▏ 6.92 KB  (Web Components専用)
React           ▏ 10.73 KB (Web Component化)
Preact          ▏ 11.07 KB (React互換)
Svelte          █████ 43.26 KB (コンパイラベース)
Lit+Tailwind    █████ 44.44 KB (Zag.js + WAI-ARIA)
React (bundle)  ████████ 75.69 KB (フルバンドル)
```

---

## 🎯 どれを選ぶべきか？

### シンプルなUI → **Vanilla JS**（3.86KB）🏆

**メリット**:
- ✅ **最軽量**（3.86KB）
- ✅ **依存関係ゼロ**
- ✅ **ブラウザ標準API**のみ使用

**デメリット**:
- ❌ リアクティビティを手動実装
- ❌ ボイラープレートが多い

**ユースケース**: シンプルなボタン、カード、バッジなど

---

### Web Components専用 → **Lit**（6.92KB）🥈

**メリット**:
- ✅ **非常に軽量**（6.92KB）
- ✅ **宣言的テンプレート**（`html`タグ付きテンプレート）
- ✅ **自動リアクティビティ**（`@property`デコレーター）
- ✅ **Web Components標準に準拠**

**デメリット**:
- ❌ React/Vue等のエコシステムは使えない

**ユースケース**: デザインシステム、再利用可能なコンポーネントライブラリ

---

### React互換 → **Preact**（11.07KB）

**メリット**:
- ✅ **React APIとほぼ互換**（`useState`、`useEffect`、JSX）
- ✅ **11.07KB**（軽量）
- ✅ **既存Reactコードの移行が簡単**
- ✅ **preact-custom-element**でWeb Component化が容易

**デメリット**:
- ❌ 一部のReactライブラリと互換性がない場合がある
- ❌ 属性の型変換が自動化されていない（`Number()`が必要）

**ユースケース**: React開発者がWeb Componentsを作る場合

---

### React Web Component → **React**（10.73KB / バンドル版 75.69KB）🥉

**メリット**:
- ✅ **React 19対応**（`react-dom/client`使用）
- ✅ **react-to-webcomponent**で簡単にWeb Component化
- ✅ **Reactエコシステム**を活用可能

**デメリット**:
- ❌ バンドル版は**75.69KB**と大きい
- ❌ スロットは手動実装が必要
- ❌ CSS Modulesを`?inline`でバンドルする必要がある

**ユースケース**: React環境で開発してWeb Componentとして配布

---

### アクセシビリティ重視 → **Lit+Tailwind（Zag.js統合）**（44.44KB）⭐

**メリット**:
- ✅ **Zag.js統合**で強力なステートマシン
- ✅ **WAI-ARIA準拠**のアクセシブルなコンポーネント
- ✅ **Tailwind CSS v4**による柔軟なスタイリング
- ✅ **型安全**なAPI設計（`as`アサーション最小化）
- ✅ **ZagElement基底クラス**で一貫した実装パターン

**含まれるコンポーネント**:
- Button（シンプル実装）
- Toggle（`@zag-js/toggle`）
- Dropdown（`@zag-js/menu`）
- Modal（`@zag-js/dialog`）
- Counter（カスタム実装）

**デメリット**:
- ❌ **44.44KB**（Zag.jsライブラリが含まれる）
- ❌ Zag.jsの学習コストがある

**ユースケース**: エンタープライズ向けアクセシブルなUIライブラリ

---

### コンパイラベース → **Svelte**（43.26KB）

**メリット**:
- ✅ **コンパイル時最適化**
- ✅ **自然なリアクティビティ**（Runes API）
- ✅ **Melt UI**による高いアクセシビリティ

**デメリット**:
- ❌ **43.26KB**（やや大きめ）
- ❌ ビルドツールが必須

**ユースケース**: Svelteエコシステムを活用したい場合

---

## ✅ 結論

### 実測結果まとめ

| 優先事項 | 推奨 | サイズ (gzip) | 特徴 |
|---------|------|--------------|------|
| **最軽量** | Vanilla JS 🏆 | 3.86 KB | 依存関係ゼロ |
| **バランス重視** | **Lit** ⭐ 🥈 | 6.92 KB | 宣言的、軽量、生産性 |
| **React互換** | Preact | 11.07 KB | React APIそのまま |
| **アクセシビリティ** | **Lit+Tailwind** ⭐ | 44.44 KB | Zag.js、WAI-ARIA準拠 |
| **Reactエコシステム** | React | 10.73KB (75.69KB) | 豊富なライブラリ |

### ベストプラクティス

1. **シンプルなコンポーネント → Vanilla JS** 🏆
   - **3.86KB**。ボタン、バッジなどに最適。

2. **Web Componentsライブラリ → Lit** ⭐ 🥈
   - **6.92KB**。デザインシステムやコンポーネントライブラリに最適。
   - 宣言的で生産性が高い。

3. **アクセシビリティが最優先 → Lit+Tailwind（Zag.js統合）** ⭐
   - **44.44KB**。WAI-ARIA準拠が必要な場合。
   - エンタープライズグレードのUIライブラリに。

4. **React開発者 → Preact**
   - **11.07KB**。React APIで開発してWeb Component化。

5. **Reactエコシステム必須 → React**
   - **10.73KB**（開発版）/ **75.69KB**（バンドル版）。
   - 既存のReactライブラリを活用したい場合。

### 最も重要な結論

**Web Componentsライブラリを作るなら、Lit（6.92KB）が最適解です。**
- 軽量かつ宣言的で生産性が高い
- Web Components標準に準拠
- アクセシビリティが必要ならZag.js統合版（44.44KB）を検討

**React開発者がWeb Componentsを作るなら、Preact（11.07KB）が最良の選択です。**
- React APIをそのまま使える
- バンドルサイズは許容範囲

---

## 📝 技術的な詳細

### Lit+Tailwind（Zag.js統合）の構成

```
44.44 KB (gzip) 内訳:
- Zag.js ステートマシン (@zag-js/toggle, @zag-js/menu, @zag-js/dialog)
- Lit フレームワーク
- Tailwind CSS v4 (Constructable Stylesheets)
- ZagElement 基底クラス
- useMachine / normalizeProps ヘルパー
- 5つのコンポーネント実装
```

### セキュリティ改善

すべてのコンポーネントで`onbuttonclick`/`onvaluechange`属性（`new Function()`使用）を削除し、標準的なカスタムイベント（`button-click`、`change`等）のみを使用。

### React統合

`@lit/react`の`createComponent`により、Lit Web ComponentsをReactで自然に使用可能：

```typescript
// events オプションで自動マッピング
events: {
  onButtonClick: 'button-click',
  onPressedChange: 'pressed-change',
  onChange: 'change',
  onModalClose: 'modal-close'
}
```

---

**最終更新**: 2026年1月（Claude Code）
