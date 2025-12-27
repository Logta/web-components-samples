# モーダルコンポーネント実装方針

## 概要

各フレームワークでモーダルコンポーネントを実装する際の方針をまとめたドキュメント。
実務を想定し、アクセシビリティとユーザビリティを重視した実装を行う。

---

## 実装方針サマリー

| フレームワーク | アプローチ | ライブラリ | 理由 |
|--------------|----------|----------|------|
| React | Headless UI | `@headlessui/react` | 実務標準、アクセシビリティ完備 |
| Preact | Headless UI (compat経由) | `@headlessui/react` + `preact/compat` | React互換性、軽量 |
| Svelte | Headless UI | `svelte-headlessui` | Svelteネイティブ、型安全 |
| Vanilla | ネイティブ `<dialog>` | なし | ブラウザ標準、依存関係なし |
| Lit | ネイティブ `<dialog>` | なし | Web Components標準 |

---

## Headless UI vs ネイティブ `<dialog>` 比較

### Headless UI（React/Preact/Svelte）

**メリット**:
- ✅ アクセシビリティ自動処理（ARIA属性、ロール）
- ✅ フォーカストラップ自動管理
- ✅ キーボード操作完備（ESC、Tab）
- ✅ トランジション/アニメーション対応
- ✅ 実務で広く採用されている
- ✅ TypeScript型定義完備
- ✅ 複雑なモーダルパターン対応（Nested Modal、Multi-step）

**デメリット**:
- ❌ 依存関係が増える
- ❌ バンドルサイズ増加

**使用ケース**:
- フレームワークを使っている場合（React/Preact/Svelte）
- 複雑なモーダルロジックが必要
- 実務プロジェクトで再利用性を重視

---

### ネイティブ `<dialog>`（Vanilla/Lit）

**メリット**:
- ✅ ブラウザ標準API（依存関係なし）
- ✅ アクセシビリティ組み込み済み
- ✅ `::backdrop` 擬似要素でオーバーレイ簡単
- ✅ `.showModal()` でモーダル動作、`.show()` で非モーダル
- ✅ ESCキー自動対応
- ✅ フォーカストラップ自動
- ✅ バンドルサイズゼロ

**デメリット**:
- ❌ トランジション/アニメーションは手動実装
- ❌ 一部古いブラウザでサポートなし（Polyfillで対応可能）

**使用ケース**:
- 軽量なWeb Componentsを作りたい
- 依存関係を最小限にしたい
- ブラウザ標準を優先

---

## 各フレームワークの詳細実装方針

### 1. React - Headless UI

**パッケージ**: `@headlessui/react`

#### インストール

```bash
cd packages/react
pnpm add @headlessui/react
```

#### 基本実装

```tsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function ReactModal({ isOpen = false, onClose = () => {} }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="modal-overlay" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop" aria-hidden="true" />
        </Transition.Child>

        <div className="modal-container">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="modal-panel">
              <Dialog.Title>Modal Title</Dialog.Title>
              <Dialog.Description>
                This is a modal dialog built with Headless UI.
              </Dialog.Description>

              <slot></slot>

              <div className="modal-actions">
                <button onClick={onClose}>Close</button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
```

#### Web Component化

```tsx
import reactToWebComponent from 'react-to-webcomponent';
import * as ReactDOMClient from 'react-dom/client';

const ReactModalElement = reactToWebComponent(ReactModal, React, ReactDOMClient);

if (!customElements.get('react-modal')) {
  customElements.define('react-modal', ReactModalElement);
}
```

#### 主な機能

- ✅ `Dialog` - モーダルのルート要素
- ✅ `Dialog.Panel` - モーダルコンテンツ
- ✅ `Dialog.Title` - アクセシビリティ用タイトル
- ✅ `Dialog.Description` - 説明テキスト
- ✅ `Transition` - アニメーション制御
- ✅ `onClose` - 閉じるコールバック（ESC、背景クリック）

---

### 2. Preact - Headless UI (compat経由)

**パッケージ**: `@headlessui/react` + `preact/compat`

#### インストール

```bash
cd packages/preact
pnpm add @headlessui/react
```

#### vite.config.ts設定

```typescript
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
});
```

#### 基本実装

Reactとほぼ同じコードが動作：

```tsx
import { Dialog, Transition } from '@headlessui/react';
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function PreactModal({ isOpen = false, onClose = () => {} }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="modal-overlay" onClose={onClose}>
        {/* React版とほぼ同じ */}
      </Dialog>
    </Transition>
  );
}
```

#### Web Component化

```tsx
import { customElement } from 'preact-custom-element';

customElement('preact-modal', PreactModal, ['isOpen', 'onClose']);
```

#### 注意点

- ⚠️ 一部のHeadless UI機能に制限がある場合あり
- ⚠️ バンドルサイズに注意（preact/compatを含む）

---

### 3. Svelte - svelte-headlessui

**パッケージ**: `svelte-headlessui`

#### インストール

```bash
cd packages/svelte
pnpm add svelte-headlessui
```

#### 基本実装

```svelte
<script lang="ts">
  import { Dialog, DialogOverlay, DialogTitle, Transition, TransitionChild } from 'svelte-headlessui';

  export let isOpen = false;

  function close() {
    isOpen = false;
  }
</script>

<Transition show={isOpen}>
  <Dialog on:close={close} class="modal-overlay">
    <TransitionChild
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <DialogOverlay class="backdrop" />
    </TransitionChild>

    <div class="modal-container">
      <TransitionChild
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div class="modal-panel">
          <DialogTitle>Modal Title</DialogTitle>

          <slot></slot>

          <div class="modal-actions">
            <button on:click={close}>Close</button>
          </div>
        </div>
      </TransitionChild>
    </div>
  </Dialog>
</Transition>

<style>
  /* スタイル */
</style>
```

#### Web Component化

`svelte.config.js`:

```javascript
export default {
  compilerOptions: {
    customElement: true,
  },
};
```

`svelte-modal.svelte`:

```svelte
<svelte:options customElement="svelte-modal" />

<script lang="ts">
  // 上記と同じ
</script>
```

#### 主な機能

- ✅ Svelteネイティブな構文
- ✅ 型安全（TypeScript）
- ✅ Reactと同等の機能

---

### 4. Vanilla - ネイティブ `<dialog>`

**依存関係**: なし

#### 基本実装

```typescript
class VanillaModal extends HTMLElement {
  private dialog: HTMLDialogElement | null = null;
  declare shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
    this.dialog = this.shadowRoot.querySelector('dialog');

    // イベントリスナー
    this.dialog?.addEventListener('close', this.handleClose.bind(this));
    this.dialog?.addEventListener('click', this.handleBackdropClick.bind(this));
  }

  disconnectedCallback(): void {
    this.dialog?.removeEventListener('close', this.handleClose.bind(this));
    this.dialog?.removeEventListener('click', this.handleBackdropClick.bind(this));
  }

  // モーダルを開く
  open(): void {
    this.dialog?.showModal();
  }

  // モーダルを閉じる
  close(): void {
    this.dialog?.close();
  }

  private handleClose(): void {
    this.dispatchEvent(new CustomEvent('modal-close'));
  }

  // 背景クリックで閉じる
  private handleBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.tagName === 'DIALOG') {
      this.close();
    }
  }

  render(): void {
    this.shadowRoot.innerHTML = `
      <style>
        dialog {
          border: none;
          border-radius: 8px;
          padding: 2rem;
          max-width: 500px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        dialog::backdrop {
          background-color: rgba(0, 0, 0, 0.5);
        }

        .modal-header {
          margin-bottom: 1rem;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0;
        }

        .modal-actions {
          margin-top: 1.5rem;
          display: flex;
          gap: 0.5rem;
          justify-content: flex-end;
        }

        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .close-btn {
          background-color: #6366f1;
          color: white;
        }
      </style>

      <dialog>
        <div class="modal-header">
          <h2 class="modal-title">Vanilla Modal</h2>
        </div>

        <div class="modal-content">
          <slot></slot>
        </div>

        <div class="modal-actions">
          <button class="close-btn" onclick="this.closest('dialog').close()">
            Close
          </button>
        </div>
      </dialog>
    `;
  }
}

customElements.define('vanilla-modal', VanillaModal);
```

#### 使用方法

```html
<vanilla-modal>
  <p>This is modal content.</p>
</vanilla-modal>

<button onclick="document.querySelector('vanilla-modal').open()">
  Open Modal
</button>
```

#### 主な機能

- ✅ `.showModal()` - モーダルとして開く（背景インタラクション無効）
- ✅ `.show()` - 非モーダルとして開く
- ✅ `.close()` - 閉じる
- ✅ `::backdrop` - 背景オーバーレイ
- ✅ ESCキー自動対応
- ✅ フォーカストラップ自動

---

### 5. Lit - ネイティブ `<dialog>`

**依存関係**: `lit`

#### 基本実装

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('lit-modal')
export class LitModal extends LitElement {
  @property({ type: Boolean })
  open = false;

  @query('dialog')
  private dialog?: HTMLDialogElement;

  static styles = css`
    dialog {
      border: none;
      border-radius: 8px;
      padding: 2rem;
      max-width: 500px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-header {
      margin-bottom: 1rem;
    }

    .modal-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
    }

    .modal-actions {
      margin-top: 1.5rem;
      display: flex;
      gap: 0.5rem;
      justify-content: flex-end;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: #6366f1;
      color: white;
    }
  `;

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('open')) {
      if (this.open) {
        this.dialog?.showModal();
      } else {
        this.dialog?.close();
      }
    }
  }

  private handleClose() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('modal-close'));
  }

  private handleBackdropClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'DIALOG') {
      this.handleClose();
    }
  }

  render() {
    return html`
      <dialog @close=${this.handleClose} @click=${this.handleBackdropClick}>
        <div class="modal-header">
          <h2 class="modal-title">Lit Modal</h2>
        </div>

        <div class="modal-content">
          <slot></slot>
        </div>

        <div class="modal-actions">
          <button @click=${this.handleClose}>Close</button>
        </div>
      </dialog>
    `;
  }
}
```

#### 使用方法

```html
<lit-modal id="myModal">
  <p>This is modal content.</p>
</lit-modal>

<button onclick="document.getElementById('myModal').open = true">
  Open Modal
</button>
```

#### 主な機能

- ✅ `@property` でリアクティブプロパティ
- ✅ `updated()` でプロパティ変更監視
- ✅ `@query` でDOMクエリ
- ✅ ネイティブ `<dialog>` の全機能

---

## CSS設計方針

### 共通スタイル変数

すべてのモーダルで共通のデザイントークンを使用：

```css
:root {
  /* Modal */
  --modal-backdrop: rgba(0, 0, 0, 0.5);
  --modal-bg: #ffffff;
  --modal-border-radius: 8px;
  --modal-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  --modal-max-width: 500px;
  --modal-padding: 2rem;

  /* Animation */
  --modal-transition-duration: 300ms;
  --modal-transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### レスポンシブデザイン

```css
@media (max-width: 640px) {
  dialog {
    max-width: 90vw;
    padding: 1.5rem;
  }
}
```

---

## アクセシビリティ要件

### 必須項目

- ✅ `role="dialog"` - Headless UIは自動、`<dialog>`も自動
- ✅ `aria-modal="true"` - モーダルであることを示す
- ✅ `aria-labelledby` - タイトルとの紐付け
- ✅ `aria-describedby` - 説明テキストとの紐付け
- ✅ フォーカストラップ - Headless UIと`<dialog>`は自動
- ✅ ESCキーで閉じる - Headless UIと`<dialog>`は自動
- ✅ 初期フォーカス - 最初のインタラクティブ要素へ

### キーボード操作

| キー | 動作 |
|-----|------|
| `Escape` | モーダルを閉じる |
| `Tab` | 次のフォーカス可能要素へ |
| `Shift + Tab` | 前のフォーカス可能要素へ |

---

## テスト方針

### 単体テスト

```typescript
describe('Modal Component', () => {
  it('opens when isOpen is true', () => {
    // テストコード
  });

  it('closes on ESC key', () => {
    // テストコード
  });

  it('closes on backdrop click', () => {
    // テストコード
  });

  it('traps focus inside modal', () => {
    // テストコード
  });
});
```

### アクセシビリティテスト

- axe-core でWCAG 2.1 AA準拠チェック
- キーボードナビゲーション手動テスト
- スクリーンリーダーテスト（NVDA、VoiceOver）

---

## バンドルサイズ比較

| フレームワーク | ライブラリ | バンドルサイズ (gzip) |
|--------------|----------|---------------------|
| React | Headless UI | +5.5 KB |
| Preact | Headless UI (compat) | +6.0 KB |
| Svelte | svelte-headlessui | +4.2 KB |
| Vanilla | なし | 0 KB |
| Lit | なし | 0 KB |

---

## 実装順序

1. **React** - Headless UI基本実装
2. **Vanilla** - ネイティブ `<dialog>` 実装
3. **Lit** - ネイティブ `<dialog>` + Litリアクティブ実装
4. **Preact** - React実装をPreact移植
5. **Svelte** - svelte-headlessui実装

---

## 参考リンク

### Headless UI
- [Headless UI React - Dialog](https://headlessui.com/react/dialog)
- [svelte-headlessui - Dialog](https://github.com/rgossiaux/svelte-headlessui)

### ネイティブ `<dialog>`
- [MDN - `<dialog>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dialog)
- [web.dev - Building a dialog component](https://web.dev/building-a-dialog-component/)

### アクセシビリティ
- [WAI-ARIA Authoring Practices - Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [WCAG 2.1 - Focus Management](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)

---

## まとめ

**実務に寄せた実装方針**:
- React/Preact/Svelte → **Headless UI** で実装（アクセシビリティ自動処理）
- Vanilla/Lit → **ネイティブ `<dialog>`** で実装（軽量、標準）

**次のステップ**:
1. React Modalから実装開始
2. Vanilla/Lit Modalで `<dialog>` の使い方を学ぶ
3. 各フレームワーク間でスタイルを統一
4. アクセシビリティテスト実施
