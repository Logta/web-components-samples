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
