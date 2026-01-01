// Reactコンポーネントとしてエクスポート（メイン）
export { Counter } from './counter/counter-react';
export { Button } from './button/button-react';
export { Dropdown } from './dropdown/dropdown-react';
export { Modal } from './modal/modal-react';

// React用の型定義
export type { CounterProps } from './counter/counter-react';
export type { ButtonProps } from './button/button-react';
export type { DropdownProps, DropdownPropsTyped, DropdownOption } from './dropdown/dropdown-react';
export type { ModalProps } from './modal/modal-react';

// Lit関連のエクスポート（開発者がカスタムコンポーネント作成時に使用）
export { LitCounter } from './counter/counter';
export { LitModal } from './modal/modal';
export { LitButton } from './button/button';
export { LitDropdown } from './dropdown/dropdown';

// Web Componentとして自動登録（@lit/reactが内部で利用）
import './counter/counter';
import './modal/modal';
import './button/button';
import './dropdown/dropdown';
