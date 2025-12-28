# Q&A #01: Preactの実装方針をなぜ途中で変更したの？

## 質問

Preactモーダルコンポーネントの実装方針を途中で変更した理由は？

当初の計画では Headless UI を使う予定だったが、最終的にネイティブ `<dialog>` を採用した経緯を知りたい。

---

## 回答

### 🔄 実装方針変更の経緯

#### 当初の計画

実装方針ドキュメントでは、Preactも**Headless UI**を使う予定でした：

| フレームワーク | アプローチ | ライブラリ |
|--------------|----------|----------|
| Preact | Headless UI (compat経由) | `@headlessui/react` + `preact/compat` |

#### 実際に実装を試みた結果

**ステップ1**: Headless UIをインストール

```bash
cd packages/preact
pnpm add @headlessui/react
```

**ステップ2**: Reactと同じコードを書いた

```tsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'preact';
import { useState } from 'preact/hooks';

function PreactModal({ isOpen = false }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={closeModal}>
        {/* ... */}
      </Dialog>
    </Transition>
  );
}
```

**ステップ3**: TypeScriptエラーが大量発生 🚨

```
src/preact-modal.tsx(55,40): error TS2322: Type 'FunctionComponent<{}>' is not assignable to type 'ElementType | undefined'.
  Type 'FunctionComponent<{}>' is not assignable to type 'FunctionComponent<any>'.
    Type 'ComponentChildren' is not assignable to type 'ReactNode | Promise<ReactNode>'.
      Type 'object' is not assignable to type 'ReactNode | Promise<ReactNode>'.

src/preact-modal.tsx(56,9): error TS2322: Type 'Element' is not assignable to type 'ReactNode | ((bag: TransitionChildRenderPropArg) => ReactElement<...>)'.
  Property 'children' is missing in type 'VNode<any>' but required in type 'ReactPortal'.
```

### 🔍 問題の根本原因

#### 型システムの不一致

- **`@headlessui/react`の型定義**: React専用に設計されている
- **Preactの型システム**: `VNode<any>` を使用
- **Reactの型システム**: `ReactNode` を使用
- **`preact/compat`の限界**: ランタイムは互換性があっても、TypeScript型は完全に互換ではない

#### 特に問題だった箇所

```tsx
// Fragment の型が合わない
<Transition.Child as={Fragment}>
  {/* VNode vs ReactNode の不一致 */}
  <Dialog.Panel>...</Dialog.Panel>
</Transition.Child>
```

**型エラーの詳細**:

1. `as={Fragment}` → PreactのFragmentとReactのFragmentは型が異なる
2. 子要素 → PreactのVNodeとReactのReactNodeが互換性なし
3. `Dialog.Panel` → 返り値の型が一致しない

### 💡 解決策の検討

#### オプションA: 型エラーを無視 (`// @ts-ignore`)

```tsx
// @ts-ignore
<Transition.Child as={Fragment}>
  {/* ... */}
</Transition.Child>
```

**デメリット**:
- ❌ 実務では推奨されない
- ❌ 他の本当のエラーを見逃す可能性
- ❌ 型安全性を失う
- ❌ リファクタリング時に問題が発生しやすい

#### オプションB: ネイティブ `<dialog>` を使用

```tsx
import { useState, useEffect, useRef } from 'preact/hooks';

function ModalComponent({ isOpen = false }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef}>
      {/* ... */}
    </dialog>
  );
}
```

**メリット**:
- ✅ 型の問題が完全に解決
- ✅ Preactの軽量性を維持（Headless UIを含まない）
- ✅ ブラウザ標準APIでアクセシビリティ確保
- ✅ バンドルサイズ削減
- ✅ TypeScript完全対応

### 🎯 最終判断：オプションBを採用

#### 判断理由

1. **実務に寄せる** = 型安全性を犠牲にしない
   - 実務では型エラーを無視するのは避けるべき
   - TypeScriptの恩恵を最大限に活かす

2. **Preactの哲学に合う** = 軽量性重視
   - Preact自体が「軽量なReact代替」
   - Headless UI追加でバンドルサイズが増える矛盾

3. **アクセシビリティ維持** = `<dialog>`要素が標準でARIA対応
   - `role="dialog"` 自動付与
   - `aria-modal="true"` 自動付与
   - フォーカストラップ自動
   - ESCキー自動対応

4. **実装の一貫性** = Vanilla/Litと同じパターン
   - ネイティブ`<dialog>`を使うパターンが確立
   - 学習コストの削減

### 📊 結果の比較

| 項目 | Headless UI + compat | ネイティブ `<dialog>` |
|------|---------------------|---------------------|
| **バンドルサイズ** | ~+10KB | 0KB（追加なし） |
| **TypeScript型安全性** | ❌ 大量の型エラー | ✅ 完全な型安全性 |
| **アクセシビリティ** | ✅ 自動処理 | ✅ ブラウザ標準 |
| **実装難易度** | ❌ 型エラー対処必要 | ✅ シンプル |
| **メンテナンス性** | ❌ 将来の型変更リスク | ✅ 安定したAPI |
| **Preactの哲学** | ❌ 軽量性を損なう | ✅ 軽量性を維持 |

### 🔧 実装の詳細

#### 最終的な実装コード

```tsx
// packages/preact/src/preact-modal.tsx
import { useState, useEffect, useRef } from 'preact/hooks';
import register from 'preact-custom-element';
import styles from './preact-modal.module.css';

interface ModalComponentProps {
  isOpen?: boolean;
  title?: string;
  description?: string;
}

function ModalComponent({
  isOpen: initialIsOpen = false,
  title = 'Preact Modal',
  description = 'This is a modal dialog built with Preact and native HTML <dialog> element.'
}: ModalComponentProps) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // isOpen propが変更されたら状態を更新
  useEffect(() => {
    setIsOpen(initialIsOpen);
  }, [initialIsOpen]);

  // isOpenの変更に応じてdialogを開閉
  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleBackdropClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    // ダイアログ要素自体がクリックされた場合（コンテンツ外）
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      closeModal();
    }
  }

  return (
    <div className={styles.container}>
      <button type="button" onClick={openModal} className={styles.openButton}>
        Open Preact Modal
      </button>

      <dialog
        ref={dialogRef}
        onClose={closeModal}
        onClick={handleBackdropClick}
        className={styles.dialog}
      >
        <div className={styles.modalPanel}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>{title}</h3>
          </div>
          <div className={styles.modalBody}>
            <p className={styles.modalDescription}>{description}</p>
            {/* ... */}
          </div>
          <div className={styles.modalActions}>
            <button type="button" className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

// Web Component化
register(ModalComponent, 'preact-modal', ['isOpen', 'title', 'description'], { shadow: false });

export default ModalComponent;
```

#### 実装のポイント

1. **`useRef<HTMLDialogElement>`** - dialog要素への参照を保持
2. **`useEffect` で開閉管理** - プロパティ変更に応じて`.showModal()`/`.close()`を呼び出し
3. **背景クリック処理** - クリック座標を判定してダイアログ外クリックを検出
4. **型安全** - TypeScriptエラーなし

### 📝 ドキュメントへの反映

この経緯を実装方針ドキュメントに反映しました：

**[ADR-001: Modal Implementation Strategy](./adr-001-modal-implementation.md)**

```markdown
## 実装方針サマリー

| フレームワーク | アプローチ | ライブラリ | 理由 |
|--------------|----------|----------|------|
| React | Headless UI | `@headlessui/react` | 実務標準、アクセシビリティ完備 |
| Preact | ネイティブ `<dialog>` | なし | 軽量、型の問題回避 |
| Svelte | Headless UI | `svelte-headlessui` | Svelteネイティブ、型安全 |
| Vanilla | ネイティブ `<dialog>` | なし | ブラウザ標準、依存関係なし |
| Lit | ネイティブ `<dialog>` | なし | Web Components標準 |
```

**まとめセクション**:

> **Preact で Headless UI を使わなかった理由**:
> - `@headlessui/react` と Preact の型の不一致
> - `preact/compat` を使用しても TypeScript エラーが解決しない
> - ネイティブ `<dialog>` を採用することで、バンドルサイズを最小限に抑え、Preact の軽量性を活かせる

---

## 🎓 学び・教訓

### 1. 実装を試してから判断する

- **理論（ドキュメント）≠ 実践（コード）**
- 計画段階で完璧な判断は難しい
- 実際にコードを書いて問題を発見することが重要

### 2. 実務における優先順位

**型安全性 > 新しいライブラリの採用**

```tsx
// ❌ 実務では避けるべき
// @ts-ignore
<Headless UI Component />

// ✅ 実務で推奨
<dialog>
  {/* 型エラーなし */}
</dialog>
```

### 3. フレームワークの哲学を尊重

- **Preact** = 軽量・高速がコンセプト
- Headless UI追加 = コンセプトと矛盾
- ネイティブ`<dialog>` = Preactの哲学に合致

### 4. 柔軟な方針変更の重要性

実装過程で以下を発見：
- ✅ 当初の計画に固執しない
- ✅ より良い解決策があれば採用
- ✅ ドキュメントを更新して経緯を記録

---

## 関連ドキュメント

- [ADR-001: Modal Implementation Strategy](./adr-001-modal-implementation.md)
- [Preact Modal実装コード](../../packages/preact/src/preact-modal.tsx)
- [Preact Attribute Type Conversion](../troubleshooting/preact-attribute-type-conversion.md)

---

## まとめ

**最終的な判断**: Preact Modalは**ネイティブ `<dialog>`** で実装

**理由**:
1. ✅ TypeScript型エラーを完全に解決
2. ✅ Preactの軽量性を維持（0KB追加）
3. ✅ ブラウザ標準APIでアクセシビリティ確保
4. ✅ 実務で推奨される型安全なコード

**教訓**:
- 実装を試してから最終判断する
- 型エラーを無視しない
- フレームワークの哲学を尊重する
- 柔軟に方針を変更する勇気を持つ

この判断により、Preactの強み（軽量性）を活かしつつ、型安全で保守性の高いコードを実現できました。
