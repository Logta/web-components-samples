# UIライブラリ設計仕様書: Lit + Zag.js

## 1. 概要

本ライブラリは、**Lit**によるWeb Componentsのカプセル化と、**Zag.js**によるステートマシンベースのロジック管理を組み合わせた、高機能かつアクセシブルなUIコンポーネント基盤である。

### 1.1 設計目標

- **アクセシビリティ**: WAI-ARIA準拠のインタラクティブコンポーネント
- **再利用性**: フレームワーク非依存のWeb Components
- **保守性**: ステートマシンによる明確な状態管理
- **軽量性**: 仮想DOMなしでブラウザ標準技術に近い実装
- **テーマ対応**: Shadow DOMによるスタイルのカプセル化

### 1.2 技術スタック

| 技術 | バージョン | 役割 |
|------|-----------|------|
| Lit | 3.x | Web Componentsフレームワーク |
| Zag.js | 最新 | ステートマシンベースのUIロジック |
| TypeScript | 5.x | 型安全性の保証 |
| Vite | 5.x | ビルドツール |

---

## 2. アーキテクチャ構成

コンポーネントは以下の3層構造で設計する。

### 2.1 三層アーキテクチャ

```
┌─────────────────────────────────────────┐
│  Style Layer (CSS/Shadow DOM)           │
│  - デザインシステム                      │
│  - テーマ対応                            │
│  - スタイルのカプセル化                  │
└─────────────────────────────────────────┘
          ↑
┌─────────────────────────────────────────┐
│  View Layer (Lit)                        │
│  - DOM構築                               │
│  - リアクティブ更新                      │
│  - プロパティバインディング              │
└─────────────────────────────────────────┘
          ↑
┌─────────────────────────────────────────┐
│  Logic Layer (Zag.js)                    │
│  - 状態遷移管理                          │
│  - ARIA属性生成                          │
│  - キーボードインタラクション            │
│  - フォーカス管理                        │
└─────────────────────────────────────────┘
```

### 2.2 レイヤー詳細

#### Logic Layer (Zag.js)

**責務**:
- ステートマシンによる状態管理
- WAI-ARIAパターンの実装
- キーボードナビゲーション
- フォーカス管理
- イベントハンドリング

**出力**:
- DOM要素に適用すべき属性（ARIA属性、data-*属性など）
- イベントハンドラー
- 状態データ

#### View Layer (Lit)

**責務**:
- DOMテンプレートの定義
- リアクティブプロパティの管理
- ライフサイクル管理
- Zagマシンとの統合

**入力**:
- ユーザー定義のプロパティ（`@property`）
- Zagマシンの状態変更通知

**出力**:
- Shadow DOMツリー
- カスタムイベント

#### Style Layer (CSS/Shadow DOM)

**責務**:
- コンポーネントの外観定義
- デザインシステムの適用
- テーマカスタマイズポイントの提供

**技術**:
- CSS Custom Properties（CSS変数）
- Shadow DOM によるスタイルカプセル化
- `:host`, `::part`, `::slotted` セレクター

---

## 3. 基本実装パターン

### 3.1 共通ヘルパー: Spread Directive

Zag.jsが生成するプロパティオブジェクト（属性とイベントハンドラーの混合）をLitテンプレートに適用するため、カスタムディレクティブを標準採用する。

**ファイル**: `src/directives/spread.ts`

```typescript
import { directive, Directive, ElementPart, PartInfo, PartType } from 'lit/directive.js';

/**
 * Spread Directive
 *
 * Zag.jsが生成するpropsオブジェクトをDOM要素に展開する。
 * - 属性: setAttribute で適用
 * - イベント: addEventListener で適用
 * - null/undefined: removeAttribute
 *
 * 使用例:
 * html`<button ${spread(api.triggerProps)}>Toggle</button>`
 */
class SpreadDirective extends Directive {
  constructor(partInfo: PartInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.ELEMENT) {
      throw new Error('spread() can only be used on elements');
    }
  }

  render(_props: Record<string, any>) {
    return '';
  }

  update(part: ElementPart, [props]: [Record<string, any>]) {
    const element = part.element;

    Object.entries(props).forEach(([key, value]) => {
      // イベントハンドラー（onClick, onFocus など）
      if (key.startsWith('on') && typeof value === 'function') {
        const eventName = key.slice(2).toLowerCase();
        // 既存のリスナーを削除して新しいものを追加
        element.removeEventListener(eventName, value as EventListener);
        element.addEventListener(eventName, value as EventListener);
      }
      // null/undefined の場合は属性を削除
      else if (value == null) {
        element.removeAttribute(key);
      }
      // 通常の属性
      else {
        element.setAttribute(key, String(value));
      }
    });
  }
}

export const spread = directive(SpreadDirective);
```

**重要な設計判断**:

- **イベントの置き換え**: Litの `@click` ではなく、Zagの `onClick` を優先して適用
- **属性の動的更新**: Zagの状態変化に応じて属性を自動的に追加/削除
- **型安全性**: TypeScriptの `Record<string, any>` で柔軟性を確保

### 3.2 コンポーネントライフサイクル

すべてのコンポーネントは以下のライフサイクルに従う。

| フェーズ | Litメソッド | 処理内容 |
|---------|------------|---------|
| **初期化** | `constructor()` | プロパティのデフォルト値設定 |
| **DOM接続** | `connectedCallback()` | Zagマシンの開始 (`machine.start()`) |
| **状態変更** | カスタムハンドラー | Zagの `subscribe()` で状態変化を検知、`requestUpdate()` 発行 |
| **レンダリング** | `render()` | `connect()` でAPIを生成、`spread` でDOMにバインド |
| **DOM切断** | `disconnectedCallback()` | Zagマシンの停止 (`machine.stop()`) |

**実装例**:

```typescript
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import * as zagToggle from '@zag-js/toggle';
import { normalizeProps, useMachine } from '@zag-js/solid';
import { spread } from '../directives/spread.js';

@customElement('ui-toggle')
export class UiToggle extends LitElement {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) pressed = false;

  private machine!: ReturnType<typeof useMachine>;
  private api!: ReturnType<typeof zagToggle.connect>;

  // Litのプロパティ → Zagのコンテキスト
  private get context() {
    return {
      disabled: this.disabled,
      pressed: this.pressed,
      onPressedChange: (details: { pressed: boolean }) => {
        this.pressed = details.pressed;
        this.dispatchEvent(new CustomEvent('pressed-change', { detail: details }));
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    // Zagマシンの初期化
    const [state, send] = zagToggle.machine(this.context);
    this.machine = useMachine(state, send);

    // 状態変更を監視してLitに通知
    this.machine.subscribe(() => {
      this.requestUpdate();
    });

    this.machine.start();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.machine?.stop();
  }

  render() {
    // APIを生成（Litのレンダリング時に毎回実行）
    const state = this.machine.getSnapshot();
    this.api = zagToggle.connect(state, this.machine.send, normalizeProps);

    return html`
      <button ${spread(this.api.buttonProps)}>
        <slot></slot>
      </button>
    `;
  }
}
```

### 3.3 共通Baseクラス（推奨）

コードの重複を避けるため、共通のライフサイクルロジックを持つBaseクラスを作成することを推奨する。

**ファイル**: `src/base/zag-element.ts`

```typescript
import { LitElement } from 'lit';

/**
 * Zag.jsを使用するコンポーネントの基底クラス
 *
 * サブクラスは以下を実装する必要がある:
 * - createMachine(): Zagマシンの作成
 * - getContext(): Zagのコンテキスト生成
 */
export abstract class ZagElement<T = any> extends LitElement {
  protected machine!: any;
  protected api!: T;

  /**
   * Zagマシンを作成する（サブクラスで実装）
   */
  protected abstract createMachine(): any;

  /**
   * Zagのコンテキストを生成する（サブクラスで実装）
   */
  protected abstract getContext(): Record<string, any>;

  /**
   * Zagの状態からAPIを生成する（サブクラスで実装）
   */
  protected abstract connectApi(state: any): T;

  connectedCallback() {
    super.connectedCallback();

    // マシンの初期化
    this.machine = this.createMachine();

    // 状態変更の監視
    this.machine.subscribe(() => {
      this.requestUpdate();
    });

    this.machine.start();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.machine?.stop();
  }

  /**
   * render()内で呼び出してAPIを更新
   */
  protected updateApi() {
    const state = this.machine.getSnapshot();
    this.api = this.connectApi(state);
  }
}
```

**使用例**:

```typescript
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import * as zagToggle from '@zag-js/toggle';
import { normalizeProps, useMachine } from '@zag-js/solid';
import { ZagElement } from '../base/zag-element.js';
import { spread } from '../directives/spread.js';

@customElement('ui-toggle')
export class UiToggle extends ZagElement {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) pressed = false;

  protected createMachine() {
    const [state, send] = zagToggle.machine(this.getContext());
    return useMachine(state, send);
  }

  protected getContext() {
    return {
      disabled: this.disabled,
      pressed: this.pressed,
      onPressedChange: (details: { pressed: boolean }) => {
        this.pressed = details.pressed;
        this.dispatchEvent(new CustomEvent('pressed-change', { detail: details }));
      },
    };
  }

  protected connectApi(state: any) {
    return zagToggle.connect(state, this.machine.send, normalizeProps);
  }

  render() {
    this.updateApi();

    return html`
      <button ${spread(this.api.buttonProps)}>
        <slot></slot>
      </button>
    `;
  }
}
```

---

## 4. コンポーネント定義の標準化

ライブラリの一貫性を保つため、以下の命名規則と構造を推奨する。

### 4.1 命名規則

| 項目 | 規則 | 例 |
|------|------|-----|
| **ファイル名** | `kebab-case.ts` | `data-table.ts`, `accordion.ts` |
| **タグ名** | `prefix-name` | `ui-accordion`, `ui-toggle` |
| **クラス名** | `PascalCase` | `UiAccordion`, `UiToggle` |
| **プロパティ** | `camelCase` | `disabled`, `maxItems` |
| **イベント名** | `kebab-case` | `value-change`, `item-select` |

### 4.2 ファイル構成

```
packages/ui-components/
├── src/
│   ├── base/
│   │   └── zag-element.ts           # 共通Baseクラス
│   ├── directives/
│   │   └── spread.ts                # Spread directive
│   ├── components/
│   │   ├── accordion/
│   │   │   ├── accordion.ts         # メインコンポーネント
│   │   │   ├── accordion.css        # スタイル
│   │   │   └── accordion.stories.ts # Storybook
│   │   ├── toggle/
│   │   │   ├── toggle.ts
│   │   │   ├── toggle.css
│   │   │   └── toggle.stories.ts
│   │   └── ...
│   ├── styles/
│   │   ├── tokens.css               # デザイントークン
│   │   └── theme.css                # テーマ定義
│   └── index.ts                     # エクスポート
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 4.3 インターフェース設計

Zag.jsの `context` をLitの `@property` として公開することで、外部から挙動を制御可能にする。

**設計原則**:

1. **制御の逆転**: コンポーネント利用者がステートマシンの挙動をカスタマイズできる
2. **イベント駆動**: 状態変更は `CustomEvent` で通知する
3. **プロパティ同期**: Litのプロパティ変更 → Zagのコンテキスト更新 → 再レンダリング

**実装例（Accordion）**:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import * as accordion from '@zag-js/accordion';
import { normalizeProps, useMachine } from '@zag-js/solid';
import { spread } from '../../directives/spread.js';

@customElement('ui-accordion')
export class UiAccordion extends LitElement {
  // ユーザーが制御できるプロパティ
  @property({ type: Boolean }) collapsible = true;
  @property({ type: Boolean }) multiple = false;
  @property({ type: Array }) value: string[] = [];
  @property({ type: Boolean }) disabled = false;

  private machine!: any;
  private api!: any;

  static styles = css`
    :host {
      display: block;
      font-family: var(--font-family, system-ui);
    }

    [data-part="item"] {
      border-bottom: 1px solid var(--border-color, #e0e0e0);
    }

    [data-part="trigger"] {
      width: 100%;
      padding: 1rem;
      text-align: left;
      background: none;
      border: none;
      cursor: pointer;
    }

    [data-part="trigger"]:hover {
      background-color: var(--hover-bg, #f5f5f5);
    }

    [data-part="content"] {
      padding: 1rem;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    const [state, send] = accordion.machine({
      id: 'accordion',
      collapsible: this.collapsible,
      multiple: this.multiple,
      value: this.value,
      disabled: this.disabled,
      onValueChange: (details) => {
        this.value = details.value;
        this.dispatchEvent(new CustomEvent('value-change', { detail: details }));
      },
    });

    this.machine = useMachine(state, send);
    this.machine.subscribe(() => this.requestUpdate());
    this.machine.start();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.machine?.stop();
  }

  render() {
    const state = this.machine.getSnapshot();
    this.api = accordion.connect(state, this.machine.send, normalizeProps);

    return html`
      <div ${spread(this.api.rootProps)}>
        <slot></slot>
      </div>
    `;
  }
}
```

### 4.4 スロット設計

複雑なコンポーネントでは、名前付きスロットを活用する。

```typescript
render() {
  return html`
    <div ${spread(this.api.rootProps)}>
      <div ${spread(this.api.triggerProps)}>
        <slot name="trigger"></slot>
      </div>
      <div ${spread(this.api.contentProps)}>
        <slot name="content"></slot>
      </div>
    </div>
  `;
}
```

**使用例**:

```html
<ui-accordion>
  <span slot="trigger">Toggle Me</span>
  <div slot="content">Hidden content here</div>
</ui-accordion>
```

---

## 5. スタイリング戦略

### 5.1 CSS Custom Properties（デザイントークン）

コンポーネントの外観はCSS変数で制御可能にする。

**ファイル**: `src/styles/tokens.css`

```css
:root {
  /* Colors */
  --ui-primary-color: #007bff;
  --ui-border-color: #e0e0e0;
  --ui-hover-bg: #f5f5f5;
  --ui-focus-ring: 0 0 0 3px rgba(0, 123, 255, 0.25);

  /* Typography */
  --ui-font-family: system-ui, -apple-system, sans-serif;
  --ui-font-size-base: 1rem;

  /* Spacing */
  --ui-spacing-sm: 0.5rem;
  --ui-spacing-md: 1rem;
  --ui-spacing-lg: 1.5rem;

  /* Border */
  --ui-border-radius: 4px;
  --ui-border-width: 1px;
}
```

### 5.2 コンポーネントスタイル

```typescript
static styles = css`
  :host {
    display: block;
    font-family: var(--ui-font-family);
    font-size: var(--ui-font-size-base);
  }

  button {
    padding: var(--ui-spacing-md);
    border-radius: var(--ui-border-radius);
    border: var(--ui-border-width) solid var(--ui-border-color);
    background-color: var(--ui-primary-color);
    color: white;
  }

  button:hover {
    background-color: var(--ui-hover-bg);
  }

  button:focus-visible {
    outline: none;
    box-shadow: var(--ui-focus-ring);
  }
`;
```

### 5.3 テーマのカスタマイズ

利用者はCSS変数を上書きしてテーマをカスタマイズできる。

```html
<style>
  ui-accordion {
    --ui-primary-color: #28a745;
    --ui-border-color: #ccc;
    --ui-font-family: 'Helvetica Neue', sans-serif;
  }
</style>

<ui-accordion collapsible>
  <div slot="trigger">Custom Themed Accordion</div>
  <div slot="content">Content here</div>
</ui-accordion>
```

---

## 6. アクセシビリティ

### 6.1 WAI-ARIA準拠

Zag.jsは以下のARIAパターンを自動的に実装する：

- **Accordion**: [WAI-ARIA Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- **Toggle**: [WAI-ARIA Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- **Dialog**: [WAI-ARIA Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/)
- **Tabs**: [WAI-ARIA Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

### 6.2 キーボードナビゲーション

各コンポーネントは適切なキーボードショートカットをサポートする。

| コンポーネント | キー | 動作 |
|--------------|------|------|
| Accordion | `Enter`, `Space` | トグル展開/折りたたみ |
| Accordion | `Tab` | 次のトリガーへフォーカス移動 |
| Tabs | `ArrowLeft/Right` | タブ間の移動 |
| Tabs | `Home/End` | 最初/最後のタブへ移動 |
| Dialog | `Escape` | ダイアログを閉じる |

### 6.3 スクリーンリーダー対応

- `aria-label`, `aria-labelledby` で適切なラベルを提供
- `aria-expanded`, `aria-selected` で状態を通知
- `role` 属性で意味的な役割を明示

---

## 7. テストとストーリー

### 7.1 Storybook統合

各コンポーネントにはストーリーを用意する。

**ファイル**: `src/components/toggle/toggle.stories.ts`

```typescript
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './toggle.js';

const meta: Meta = {
  title: 'Components/Toggle',
  component: 'ui-toggle',
  argTypes: {
    disabled: { control: 'boolean' },
    pressed: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ui-toggle .disabled=${args.disabled} .pressed=${args.pressed}>
      Toggle Me
    </ui-toggle>
  `,
};

export const Pressed: Story = {
  render: () => html`<ui-toggle pressed>Already Pressed</ui-toggle>`,
};

export const Disabled: Story = {
  render: () => html`<ui-toggle disabled>Disabled Toggle</ui-toggle>`,
};
```

### 7.2 単体テスト

Web Test Runner または Playwright を使用してテストを実装する。

```typescript
import { expect, fixture, html } from '@open-wc/testing';
import { UiToggle } from './toggle.js';

describe('ui-toggle', () => {
  it('should toggle pressed state on click', async () => {
    const el = await fixture<UiToggle>(html`<ui-toggle>Toggle</ui-toggle>`);
    const button = el.shadowRoot!.querySelector('button')!;

    expect(el.pressed).to.be.false;

    button.click();
    await el.updateComplete;

    expect(el.pressed).to.be.true;
  });

  it('should not toggle when disabled', async () => {
    const el = await fixture<UiToggle>(html`<ui-toggle disabled>Toggle</ui-toggle>`);
    const button = el.shadowRoot!.querySelector('button')!;

    button.click();
    await el.updateComplete;

    expect(el.pressed).to.be.false;
  });
});
```

---

## 8. ビルドと配布

### 8.1 Vite設定

**ファイル**: `vite.config.ts`

```typescript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'ui-components',
    },
    rollupOptions: {
      external: ['lit', '@zag-js/solid'],
    },
  },
});
```

### 8.2 package.json

```json
{
  "name": "@your-org/ui-components",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/ui-components.js",
  "module": "./dist/ui-components.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/ui-components.js",
      "types": "./dist/index.d.ts"
    },
    "./accordion": {
      "import": "./dist/components/accordion/accordion.js",
      "types": "./dist/components/accordion/accordion.d.ts"
    }
  },
  "files": [
    "dist"
  ],
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "storybook": "storybook dev -p 6006",
    "test": "web-test-runner"
  },
  "dependencies": {
    "lit": "^3.2.0",
    "@zag-js/solid": "^0.x.x"
  },
  "devDependencies": {
    "@storybook/web-components": "^8.x.x",
    "@web/test-runner": "^0.x.x",
    "typescript": "^5.x.x",
    "vite": "^5.x.x"
  }
}
```

---

## 9. メリットと課題

### 9.1 メリット

| メリット | 詳細 |
|---------|------|
| **A11yの保証** | WAI-ARIAの実装をZag.jsに委譲できるため、高品質なコンポーネントを高速に開発できる |
| **デザインの自由度** | Shadow DOMによりスタイルが完全に分離され、テーマ適用が容易 |
| **軽量** | 仮想DOMを必要とせず、ブラウザ標準技術に近い形で動作する（Lit: ~7KB gzipped） |
| **フレームワーク非依存** | Web Components標準なので、React/Vue/Svelteなど任意のフレームワークから利用可能 |
| **状態管理の明確性** | ステートマシンによる予測可能な状態遷移 |
| **TypeScript完全サポート** | 型安全性が保証される |

### 9.2 課題と対策

| 課題 | 対策 |
|------|------|
| **イベントバインディングの複雑性** | `spread` ディレクティブの適切なメンテナンスが重要。テストで動作を保証する |
| **SSR (Server Side Rendering)** | LitのSSR環境（@lit-labs/ssr）でZag.jsを動作させる場合、ブラウザ専用APIの呼び出しに注意が必要。サーバー側では状態を初期化せず、クライアントでhydrateする |
| **学習コスト** | ステートマシンの概念に不慣れな開発者には学習コストがかかる。十分なドキュメントと例を提供する |
| **デバッグの難しさ** | Zagの状態遷移をデバッグする専用ツールの導入を検討 |

---

## 10. 実装ロードマップ

### Phase 1: 基盤構築

- [x] Spread directive実装
- [ ] ZagElement基底クラス実装
- [ ] デザイントークン定義
- [ ] Storybook環境構築
- [ ] テスト環境構築

### Phase 2: 基本コンポーネント

- [ ] Toggle
- [ ] Accordion
- [ ] Tabs
- [ ] Dialog
- [ ] Tooltip

### Phase 3: 複雑なコンポーネント

- [ ] Select
- [ ] Combobox
- [ ] DatePicker
- [ ] Menu
- [ ] Popover

### Phase 4: データ駆動コンポーネント

- [ ] DataTable
- [ ] Pagination
- [ ] Tree View

### Phase 5: 最適化と文書化

- [ ] パフォーマンス最適化
- [ ] アクセシビリティ監査
- [ ] 包括的なドキュメント
- [ ] 使用例とベストプラクティス

---

## 11. 参考資料

- [Lit公式ドキュメント](https://lit.dev/)
- [Zag.js公式ドキュメント](https://zagjs.com/)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Web Components Best Practices](https://web.dev/custom-elements-best-practices/)
- [Lit Directive API](https://lit.dev/docs/api/custom-directives/)

---

## 12. まとめ

本仕様書は、Lit + Zag.jsによるUIコンポーネントライブラリの設計指針を示したものである。

**核心原則**:

1. **ロジックとビューの分離**: Zag.jsで状態管理、Litでレンダリング
2. **アクセシビリティファースト**: WAI-ARIA準拠を標準とする
3. **カスタマイズ可能**: CSS変数とプロパティで柔軟に制御
4. **標準技術の活用**: Web Components、Shadow DOM、TypeScript

この仕様に従うことで、保守性が高く、アクセシブルで、再利用可能なUIコンポーネントライブラリを構築できる。
