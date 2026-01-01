# @web-components-samples/lit-tailwind

Lit + Tailwind CSS を組み合わせたWeb Componentのサンプル実装です。

## 特徴

- **Shadow DOM + Tailwind CSS**: カプセル化を維持しつつTailwind CSSを利用
- **Constructable Stylesheets**: メモリ効率の良いスタイル共有
- **TailwindElement**: 再利用可能なベースクラス
- **Vite + HMR**: 開発体験の最適化

## 使用方法

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動
pnpm dev

# ビルド
pnpm build
```

## コンポーネント

### `<lit-tailwind-counter>`

Tailwind CSSを使用したカウンターコンポーネント。

```html
<lit-tailwind-counter count="5"></lit-tailwind-counter>
```

### `TailwindElement`

Tailwind CSSが適用されたベースクラス。新しいコンポーネント作成時に継承して使用します。

```typescript
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TailwindElement } from '@web-components-samples/lit-tailwind';

@customElement('my-component')
export class MyComponent extends TailwindElement {
  render() {
    return html`
      <div class="p-4 bg-blue-500 text-white rounded">
        Tailwind CSS is working!
      </div>
    `;
  }
}
```

## ファイル構成

```
src/
├── styles/
│   └── tailwind.ts      # 共有スタイルモジュール
├── components/
│   ├── base-element.ts  # TailwindElementベースクラス
│   └── lit-tailwind-counter.ts  # カウンターコンポーネント
├── tailwind.css         # Tailwindディレクティブ
└── index.ts            # エントリーポイント
```

## 実装方針

詳細な実装方針については、[docs/architecture/lit-tailwind-integration-guide.md](../../docs/architecture/lit-tailwind-integration-guide.md) を参照してください。