# Lit + Tailwind CSS 導入・運用ガイド (Vite)

このドキュメントでは、Shadow DOMのカプセル化を維持しつつ、Tailwind CSSを効率的に使用するためのベストプラクティスを定義します。

## 1. 基本方針

* **カプセル化:** 各コンポーネントはShadow DOMを使用し、スタイルを隔離する。
* **効率化:** TailwindのCSS実体はメモリ上で共有し、ブラウザの `Constructable Stylesheets` 機能を活用する。
* **DX (開発体験):** Viteのインラインインポート (`?inline`) を利用し、HMR（ホットリロード）を有効にする。

---

## 2. ディレクトリ構造（推奨）

```text
src/
├── styles/
│   └── tailwind.ts      # TailwindをLit用スタイルに変換する中継点
├── components/
│   ├── base-element.ts  # 共通スタイルを持つベースクラス
│   └── my-element.ts    # 各コンポーネント
├── tailwind.css         # Tailwindディレクティブ定義
└── tailwind.config.js   # Tailwind設定ファイル
```

---

## 3. 実装手順

### Step 1: Tailwindの設定

`tailwind.config.js` で、Litのソースファイル内にあるクラス名をスキャン対象に含めます。

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"], // ts/js内のclass名を監視
  theme: { extend: {} },
  plugins: [],
}
```

### Step 2: 共有スタイルモジュールの作成

Viteの機能でCSSを文字列として読み込み、Litの `CSSResult` に変換します。

```typescript
// src/styles/tailwind.ts
import { css, unsafeCSS } from 'lit';
import globalCss from '../tailwind.css?inline';

// 全コンポーネントで共有されるスタイル実体
export const tailwindStyles = css`${unsafeCSS(globalCss)}`;
```

### Step 3: ベースクラスの作成

共通スタイルを自動適用するための基底クラスを作成します。

```typescript
// src/components/base-element.ts
import { LitElement } from 'lit';
import { tailwindStyles } from '../styles/tailwind';

export class TailwindElement extends LitElement {
  static styles = [tailwindStyles];
}
```

### Step 4: コンポーネントでの使用

`TailwindElement` を継承してコンポーネントを作成します。

```typescript
// src/components/my-element.ts
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TailwindElement } from './base-element';

@customElement('my-element')
export class MyElement extends TailwindElement {
  static styles = [
    ...super.styles,
    css`:host { display: block; }` // 固有スタイルが必要な場合
  ];

  render() {
    return html`
      <div class="p-4 bg-blue-500 text-white rounded-lg shadow">
        Tailwind CSS is working!
      </div>
    `;
  }
}
```

---

## 4. 開発時の注意点

### パフォーマンスについて

* **方法:** `tailwindStyles` を `static styles` 配列に含めることで、ブラウザの `adoptedStyleSheets` が利用されます。
* **利点:** コンポーネントを何千個配置しても、CSSのメモリ消費は1つ分に抑えられます。

### VS Code設定

クラス名の補完を有効にするため、`.vscode/settings.json` に以下の設定を推奨します。

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["html`([^`]*)`", "class=\"([^\"]*)\""]
  ]
}
```

---

## 5. 実装上の考慮事項

### バンドルサイズへの影響

- Tailwind CSSの完全なバンドルが各Shadow DOM内に含まれるため、バンドルサイズが増加する可能性があります
- 本番環境では、Tailwindの purge/tree-shaking 機能を適切に設定し、使用されていないクラスを除去することが重要です

### Tailwindの最適化設定

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: { extend: {} },
  plugins: [],
  // 本番ビルド時の最適化
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ["./src/**/*.{js,ts}"],
  }
}
```

### 既存プロジェクトへの適用

このプロジェクトの既存のLitコンポーネント（`packages/lit/`）に適用する場合：

1. `tailwind.css` と `tailwind.config.js` を `packages/lit/` に追加
2. `src/styles/tailwind.ts` でTailwindスタイルをエクスポート
3. 既存の `lit-counter.ts` を `TailwindElement` から継承するよう変更
4. CSS クラスを段階的にTailwindクラスに置き換え

---

## 6. トラブルシューティング

### HMRが効かない場合

Viteの `?inline` インポートでHMRが正常に動作しない場合は、Viteの設定を確認してください：

```typescript
// vite.config.ts
export default defineConfig({
  css: {
    devSourcemap: true, // CSS source mapを有効化
  },
});
```

### クラス名の補完が効かない場合

VS Code の Tailwind CSS拡張機能が、Litのテンプレートリテラル内のクラス名を認識していない場合は、`.vscode/settings.json` の正規表現を調整してください。

---

このガイドにより、Lit + Tailwind CSS の効率的な運用が可能になります。チーム開発での共通認識として活用してください。