import { LitElement } from 'lit';
import { tailwindStyles } from '../styles/tailwind';

/**
 * Tailwind CSSが適用されたベースエレメント
 * すべてのコンポーネントはこのクラスから継承してTailwind CSSを使用できます
 */
export class TailwindElement extends LitElement {
  static styles = [tailwindStyles];
}