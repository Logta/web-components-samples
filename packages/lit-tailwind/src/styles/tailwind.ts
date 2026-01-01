import { css, unsafeCSS } from 'lit';
import globalCss from '../tailwind.css?inline';

// 全コンポーネントで共有されるTailwindスタイル実体
export const tailwindStyles = css`${unsafeCSS(globalCss)}`;