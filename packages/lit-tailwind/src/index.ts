// Reactコンポーネントとしてエクスポート（メイン）
export { TailwindCounter } from './counter/counter-react';
export type { TailwindCounterProps } from './counter/counter-react';

// Lit関連のエクスポート（開発者がカスタムコンポーネント作成時に使用）
export { LitTailwindCounter } from './counter/counter';
export { TailwindElement } from './base-element';
export { tailwindStyles } from './styles/tailwind';

// Web Componentとして自動登録（@lit/reactが内部で利用）
import './counter/counter';