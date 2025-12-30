# 技術解説: フレームワークによるスロット（slot）の扱いの違い

## 概要

このドキュメントでは、Web Componentsを生成する際に利用するライブラリ、`preact-custom-element`（Preact用）と`react-to-webcomponent`（React用）における、子要素（`children`）とスロット（`<slot>`）の扱いの違いについて解説します。

この違いを理解することは、コンポーネントの再利用性やコンポジションの設計において重要です。

## 1. Preact (`preact-custom-element`) の場合

`preact-custom-element` は、Preactコンポーネントの `props.children` やJSX内の `<slot>` 要素を、Web Components標準のネイティブなスロットメカニズムに **透過的かつ自動的に** マッピングします。

### 特徴

- **直感的**: Web Componentsの作法に近く、特別なラッパーや追加のコードなしでスロットを利用できます。
- **シンプル**: Preactコンポーネント側では、通常の `props.children` や `<slot>` を記述するだけです。

### 実装例 (`packages/preact/src/modal/modal.tsx` より)

Preactコンポーネント側で、HTMLの `<slot>` タグをそのまま使用できます。

```tsx
// ...
function PreactModal(props: PreactModalProps) {
  // ...
  return (
    <dialog ref={dialogRef} open={props.open}>
      <div className={styles.container}>
        // ...
        <header className={styles.header}>
          <slot name="header"></slot>
        </header>
        <main className={styles.body}>
          <slot></slot> {/* Default slot */}
        </main>
        // ...
      </div>
    </dialog>
  );
}

register(PreactModal, 'preact-modal', ['open', 'header'], { shadow: false });
```

### 使用例

Web Componentとして利用する際は、標準的なHTMLのスロット構文がそのまま使えます。

```html
<preact-modal open>
  <h2 slot="header">モーダルのヘッダー</h2>
  <p>これがモーダルの本文です。</p>
</preact-modal>
```

## 2. React (`react-to-webcomponent`) の場合

`react-to-webcomponent` は、Preactとは異なり、`children` を **自動的にはスロットにマッピングしません**。Reactコンポーネント全体がカプセル化されるため、スロットを利用するには **手動での実装** が必要になります。

### 特徴

- **一手間必要**: スロットのコンテンツを検知し、Reactのレンダリングツリーに組み込むための追加のコードが必要です。
- **Reactの流儀で管理**: スロットのコンテンツをReactの `state` として管理するため、Reactのライフサイクルやエコシステム内でスロットを完全に制御できます。

### 実装例 (`packages/react/src/modal/modal.tsx` より)

スロットのコンテンツを `useEffect` でDOMから取得し、Reactの `state` にセットする必要があります。

```tsx
// ...
function ReactModal(props: ReactModalProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [header, setHeader] = useState<React.ReactNode>(null);
  const [body, setBody] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (!props.open || !rootRef.current) return;

    // 1. DOMからslot属性を持つ要素を探索
    const headerSlot = rootRef.current.querySelector('[slot="header"]');
    if (headerSlot) {
      // 2. Reactコンポーネントとしてラップし、stateにセット
      setHeader(<Slot host={rootRef.current} name="header" />);
    }

    // デフォルトスロットも同様に処理
    const bodySlot = Array.from(rootRef.current.childNodes).find(
      (node) => !node.nodeName.includes('SLOT') && !node.hasAttribute?.('slot')
    );
    if (bodySlot) {
      setBody(<Slot host={rootRef.current} />);
    }

    // `Slot`コンポーネントはslotchangeイベントをリッスンし、
    // 内容の変更を検知して再レンダリングする責務を持つ
  }, [props.open]);

  // 3. stateにセットされたスロットコンテンツをレンダリング
  return (
    <div ref={rootRef}>
      <dialog ref={dialogRef} open={props.open}>
        {/* ... */}
        <header className={styles.header}>
          {header || props.header}
        </header>
        <main className={styles.body}>
          {body || props.children}
        </main>
        {/* ... */}
      </dialog>
    </div>
  );
}
```

## まとめ

| フレームワーク | ライブラリ | スロットの扱い | メリット | デメリット |
| :--- | :--- | :--- | :--- | :--- |
| **Preact** | `preact-custom-element` | **自動**でネイティブスロットにマッピング | 実装がシンプルで直感的 | |
| **React** | `react-to-webcomponent` | **手動**でDOMから取得し、Stateに組み込む | Reactの流儀でスロットを制御可能 | 実装に一手間かかり、複雑になる |

### 考察

この挙動の違いは、各ライブラリの設計思想を反映していると考えられます。

-   **`preact-custom-element`**: 軽量であり、可能な限りWeb標準の挙動に近づけようとする思想。
-   **`react-to-webcomponent`**: Reactのコンポーネントツリーと状態管理の仕組みの中で、すべてを完結させようとする思想。

どちらのアプローチも一長一短ありますが、この違いを理解することで、より適切なコンポーネント設計が可能になります。
