import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../base-element';

/**
 * Tailwind Button コンポーネント
 *
 * 様々なバリアントとサイズに対応したボタンコンポーネント
 */
@customElement('lit-tailwind-button')
export class LitTailwindButton extends TailwindElement {
  static styles = [
    ...super.styles,
    css`
      :host {
        display: inline-block;
      }
    `
  ];

  @property({ type: String })
  label = 'Button';

  @property({ type: String })
  variant: 'primary' | 'secondary' | 'success' | 'danger' = 'primary';

  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

  @property({ type: Boolean })
  disabled = false;

  private handleClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('button-click', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      }));
    }
  }

  private getButtonClasses(): string {
    const baseClasses = 'font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95';

    // Variant classes
    const variantClasses = {
      primary: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white',
      secondary: 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white',
      success: 'bg-green-600 hover:bg-green-700 active:bg-green-800 text-white',
      danger: 'bg-red-600 hover:bg-red-700 active:bg-red-800 text-white',
    };

    // Size classes
    const sizeClasses = {
      small: 'px-4 py-2 text-sm',
      medium: 'px-6 py-3 text-base',
      large: 'px-8 py-4 text-lg',
    };

    // Disabled classes
    const disabledClasses = this.disabled
      ? 'opacity-50 cursor-not-allowed transform-none'
      : 'cursor-pointer';

    return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${disabledClasses}`;
  }

  render() {
    return html`
      <button
        class="${this.getButtonClasses()}"
        ?disabled="${this.disabled}"
        @click="${this.handleClick}"
      >
        ${this.label}
      </button>
    `;
  }
}
