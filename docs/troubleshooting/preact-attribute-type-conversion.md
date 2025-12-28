# Preact Web Componentの属性型変換問題

## 問題の概要

Preact Web Componentでカウンターの `+` ボタンを押すと、数値が正しく加算されず文字列連結されてしまう。

**症状**:
- 初期値: `0`
- `+` を押す → `01`（期待値: `1`）
- `+` を押す → `011`（期待値: `2`）
- `+` を押す → `0111`（期待値: `3`）

**エラーメッセージ**: なし（動作はするが、ロジックが正しくない）

## 発生状況

- **環境**: すべての環境（React demo、VanillaJS demo、Rails、Go）
- **タイミング**: Preactカウンターでインクリメント/デクリメント操作時
- **対象**: `preact-custom-element`を使用したWeb Component
- **原因**: HTML属性は文字列として渡されるが、`preact-custom-element`は自動型変換を行わない

## 根本原因

### Web Components仕様

Web Componentsの仕様上、**HTML属性の値は常に文字列**です：

```html
<preact-counter count="0"></preact-counter>
<!-- count属性の値は文字列 "0" -->
```

### `preact-custom-element`の特徴

`preact-custom-element`は**軽量性を重視**しており、属性の自動型変換を行いません。属性値をそのまま（文字列として）propsに渡します。

```typescript
// preact-custom-elementの動作
register(PreactCounter, 'preact-counter', ['count'], { shadow: false });
// HTML: <preact-counter count="0"></preact-counter>
// props: { count: "0" }  ← 文字列のまま
```

### 文字列連結が発生する理由

JavaScript/TypeScriptでは、文字列と数値の `+` 演算は文字列連結になります：

```typescript
const [count, setCount] = useState(initialCount);  // initialCount = "0" (文字列)

// ボタンクリック時
setCount(count + 1);  // "0" + 1 = "01" (文字列連結)
setCount(count + 1);  // "01" + 1 = "011" (文字列連結)
```

### 他のフレームワークとの比較

| フレームワーク | ライブラリ | 自動型変換 | 対応方法 |
|--------------|-----------|----------|---------|
| **Preact** | `preact-custom-element` | ❌ なし | 手動で `Number()` 変換が必要 |
| React | `react-to-webcomponent` | ✅ あり | 自動で数値に変換される |
| Svelte | Svelte標準機能 | ✅ あり | コンパイル時に型変換 |
| Lit | Lit標準機能 | ✅ あり | `@property({ type: Number })` で宣言 |
| Vanilla | 手動実装 | ⚠️ 開発者次第 | `parseInt()` などで明示的に変換 |

**なぜPreactだけ自動変換しないのか？**

- **軽量性重視**: 自動型変換のコードを含めず、ライブラリサイズを最小化
- **柔軟性**: 文字列・数値・真偽値など、開発者が自由に扱える
- **Preactの思想**: シンプルで予測可能な動作（明示的な制御）

## 解決策

### 修正前のコード

```typescript
// packages/preact/src/preact-counter.tsx
function PreactCounter({ count: initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);  // ❌ 文字列のまま

  useEffect(() => {
    setCount(initialCount);  // ❌ 文字列のまま
  }, [initialCount]);

  return (
    <button onClick={() => setCount(count + 1)}>+</button>  // ❌ 文字列連結
  );
}
```

### 修正後のコード

```typescript
// packages/preact/src/preact-counter.tsx
function PreactCounter({ count: initialCount = 0 }: CounterProps) {
  // 初期値を数値に変換（HTML属性は文字列として渡されるため）
  const [count, setCount] = useState(Number(initialCount));  // ✅ 数値に変換

  // count propが変更されたら状態を更新
  useEffect(() => {
    setCount(Number(initialCount));  // ✅ 数値に変換
  }, [initialCount]);

  return (
    <button onClick={() => setCount(count + 1)}>+</button>  // ✅ 数値の加算
  );
}
```

### 修正ポイント

1. **`useState`の初期化**: `Number(initialCount)` で数値に変換
2. **`useEffect`での更新**: 属性変更時も `Number(initialCount)` で変換
3. **デフォルト値の考慮**: `Number(initialCount) || 0` でNaNを防ぐことも可能

### ビルドと配置

```bash
# Preactパッケージをビルド
cd packages/preact
pnpm build

# Rails/Go環境に配置
cd ../../demo/rails && ./setup_components.sh
cd ../../demo/go && ./setup_components.sh
```

## Preact Web Componentのベストプラクティス

### 1. 数値属性の変換

```typescript
interface Props {
  count?: number;
  max?: number;
}

function Component({ count = 0, max = 100 }: Props) {
  const [countValue, setCountValue] = useState(Number(count) || 0);
  const [maxValue, setMaxValue] = useState(Number(max) || 100);

  useEffect(() => {
    setCountValue(Number(count) || 0);
    setMaxValue(Number(max) || 100);
  }, [count, max]);
}
```

### 2. 真偽値属性の変換

```typescript
interface Props {
  disabled?: boolean;
  visible?: boolean;
}

function Component({ disabled = false, visible = true }: Props) {
  // HTML属性: disabled="true" → 文字列 "true"
  // 文字列 "false" も truthy なので Boolean() が必要
  const [isDisabled, setIsDisabled] = useState(
    disabled === true || disabled === 'true'
  );
  const [isVisible, setIsVisible] = useState(
    visible === true || visible === 'true'
  );

  useEffect(() => {
    setIsDisabled(disabled === true || disabled === 'true');
    setIsVisible(visible === true || visible === 'true');
  }, [disabled, visible]);
}
```

### 3. 配列・オブジェクト属性の変換

```typescript
interface Props {
  items?: string;  // JSON文字列として渡される
  config?: string;
}

function Component({ items = '[]', config = '{}' }: Props) {
  const [itemsArray, setItemsArray] = useState<any[]>(
    JSON.parse(items || '[]')
  );
  const [configObj, setConfigObj] = useState<any>(
    JSON.parse(config || '{}')
  );

  useEffect(() => {
    try {
      setItemsArray(JSON.parse(items || '[]'));
      setConfigObj(JSON.parse(config || '{}'));
    } catch (e) {
      console.error('Failed to parse JSON attribute', e);
    }
  }, [items, config]);
}
```

## 参考：他のフレームワークでの対応

### Vanilla JS（手動実装）

```typescript
// packages/vanilla/src/my-counter.ts
class MyCounter extends HTMLElement {
  static get observedAttributes() {
    return ['count'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'count') {
      // parseInt()で明示的に数値変換
      this._count = parseInt(newValue || '0', 10) || 0;
      this.render();
    }
  }
}
```

### Lit（型宣言で自動変換）

```typescript
// packages/lit/src/lit-counter.ts
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

export class LitCounter extends LitElement {
  // @property デコレーターで型を指定すると自動変換
  @property({ type: Number })
  count: number = 0;  // 自動で数値に変換される
}
```

### React（react-to-webcomponent が自動変換）

```typescript
// packages/react/src/react-counter.tsx
function CounterComponent({ count: initialCount = 0 }: CounterComponentProps) {
  // react-to-webcomponent が自動で型推論と変換を行う
  const [count, setCount] = useState(initialCount);  // 自動で数値になる
}
```

### Svelte（コンパイラが自動変換）

```svelte
<!-- packages/svelte/src/svelte-counter.svelte -->
<svelte:options customElement="svelte-counter" />

<script lang="ts">
  export let count: number = 0;  // コンパイル時に型変換コードが挿入される
</script>
```

## まとめ

- **問題**: Preactカウンターで数値の代わりに文字列連結が発生（0 → 01 → 011）
- **原因**: `preact-custom-element` は HTML属性を文字列のまま渡し、自動型変換を行わない
- **解決**: `Number()` で明示的に数値変換する
- **特徴**: Preactの軽量性・柔軟性の代償として、型変換は開発者の責任
- **ベストプラクティス**:
  - 数値: `Number(value) || 0`
  - 真偽値: `value === true || value === 'true'`
  - 配列/オブジェクト: `JSON.parse(value || '{}')`

## 関連ドキュメント

- [GEMINI.md - 重要な設計判断と制約](../GEMINI.md)
- [packages/README.md - パッケージ仕様](../.gemini/rules/packages.md)
- [preact-custom-element公式ドキュメント](https://github.com/preactjs/preact-custom-element)
