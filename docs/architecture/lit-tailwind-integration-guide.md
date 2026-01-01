# Lit + Tailwind CSS 導入・運用ガイド (Vite)

このドキュメントでは、Shadow DOMのカプセル化を維持しつつ、Tailwind CSSを効率的に使用するためのベストプラクティスを定義します。

## 1. 基本方針

* **カプセル化:** 各コンポーネントはShadow DOMを使用し、スタイルを隔離する。
* **効率化:** TailwindのCSS実体はメモリ上で共有し、ブラウザの `Constructable Stylesheets` 機能を活用する。
* **DX (開発体験):** Viteのインラインインポート (`?inline`) を利用し、HMR（ホットリロード）を有効にする。

---

## 2. ディレクトリ構造（推奨）

```text
packages/lit-tailwind/src/
├── styles/
│   └── tailwind.ts      # TailwindをLit用スタイルに変換する中継点
├── counter/             # コンポーネントディレクトリ（例）
│   ├── counter.ts       # コンポーネント本体
│   ├── counter.css      # コンポーネント専用スタイル
│   └── counter.stories.ts # Storybookストーリー
├── base-element.ts      # 共通スタイルを持つベースクラス
├── index.ts             # エクスポート用エントリーポイント
├── tailwind.css         # Tailwindディレクティブ定義
├── vite-env.d.ts        # 型定義ファイル
├── postcss.config.js    # PostCSS設定（ルート）
└── tailwind.config.js   # Tailwind設定ファイル（削除済み、v4では不要）
```

---

## 3. 実装手順

### Step 1: Tailwind CSS v4 の設定

Tailwind CSS v4 では設定ファイルは不要です。`src/tailwind.css` でディレクティブを定義します。

```css
@import "tailwindcss";

@theme {
  /* カスタムテーマ設定（必要に応じて追加） */
  --font-family-display: "Inter", "system-ui", "sans-serif";
  --color-brand-primary: #8b5cf6;
  --color-brand-secondary: #ec4899;
}
```

また、`postcss.config.js` でTailwind CSS v4プラグインを設定します。

```javascript
export default {
  plugins: ["@tailwindcss/postcss"],
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
// src/base-element.ts
import { LitElement } from 'lit';
import { tailwindStyles } from './styles/tailwind';

export class TailwindElement extends LitElement {
  static styles = [tailwindStyles];
}
```

### Step 4: コンポーネントでの使用

`TailwindElement` を継承してコンポーネントを作成します。現在の構成では、コンポーネント専用のCSSファイルと組み合わせて使用します。

```typescript
// src/counter/counter.ts
import { html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../base-element';
import styles from './counter.css?inline';

@customElement('lit-tailwind-counter')
export class LitTailwindCounter extends TailwindElement {
  static styles = [
    ...super.styles,
    css`${unsafeCSS(styles)}`,
    css`:host { display: block; }`
  ];

  @property({ type: Number })
  count: number = 0;

  render() {
    return html`
      <div class="counter-container">
        <div class="counter-header">
          <h2 class="counter-title">Lit + Tailwind Counter</h2>
        </div>
        <!-- 以下省略... -->
      </div>
    `;
  }
}
```

対応するCSSファイル（`counter.css`）では、Tailwindの`@apply`ディレクティブを使用：

```css
/* src/counter/counter.css */
.counter-container {
  @apply p-8 bg-white border border-gray-200 rounded-2xl shadow-2xl max-w-sm mx-auto;
}

.counter-title {
  @apply text-2xl font-bold mb-3 text-gray-800;
}

.counter-button {
  @apply w-14 h-14 rounded-xl flex items-center justify-center text-white text-3xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95;
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

このプロジェクトの構成を新しいLitパッケージに適用する場合：

1. **パッケージ構造を作成:**
   ```bash
   mkdir -p packages/new-lit-package/src/{styles,components}
   ```

2. **基本ファイルを追加:**
   - `tailwind.css` - Tailwind v4 ディレクティブ
   - `postcss.config.js` - PostCSS設定
   - `src/styles/tailwind.ts` - Tailwindスタイルエクスポート
   - `src/base-element.ts` - TailwindElementベースクラス

3. **コンポーネントディレクトリを作成:**
   ```bash
   mkdir packages/new-lit-package/src/counter
   # counter.ts, counter.css, counter.stories.ts
   ```

4. **package.json に Tailwind CSS v4 依存関係を追加:**
   ```json
   {
     "devDependencies": {
       "tailwindcss": "^4.1.18",
       "@tailwindcss/vite": "^4.1.18",
       "@tailwindcss/postcss": "^4.1.18"
     }
   }
   ```

5. **Vite設定でTailwind CSS v4プラグインを追加:**
   ```typescript
   // vite.config.ts
   import tailwindcss from '@tailwindcss/vite';
   
   export default defineConfig({
     plugins: [tailwindcss()],
     // ...
   });
   ```

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

VS Code の Tailwind CSS拡張機能が、Litのテンプレートリテラル内のクラス名を認識していない場合は、`.vscode/settings.json` の正規表現を調整してください。また、CSS ファイル内の `@apply` ディレクティブでも補完が利用できます。

### Storybookでスタイルが適用されない場合

1. **ルートpackage.jsonにTailwind CSS v4を追加:**
   ```json
   {
     "devDependencies": {
       "tailwindcss": "^4.1.18",
       "@tailwindcss/vite": "^4.1.18"
     }
   }
   ```

2. **Storybook設定でプラグインを追加:**
   ```typescript
   // .storybook/main.ts
   async viteFinal(config) {
     let tailwindcss;
     try {
       tailwindcss = (await import('@tailwindcss/vite')).default;
     } catch (e) {
       console.warn('Tailwind CSS v4 plugin not found');
     }
     
     return {
       ...config,
       plugins: [
         ...(config.plugins || []),
         ...(tailwindcss ? [tailwindcss()] : []),
       ],
     };
   }
   ```

---

このガイドにより、Lit + Tailwind CSS の効率的な運用が可能になります。チーム開発での共通認識として活用してください。