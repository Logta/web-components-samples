import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './button.css?inline';

export class LitButton extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  @property({ type: String })
  label: string = 'Button';

  @property({ type: String })
  variant: 'primary' | 'secondary' | 'success' | 'danger' = 'primary';

  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

  @property({ type: Boolean })
  disabled: boolean = false;

  private handleClick() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('button-click', {
        bubbles: true,
        composed: true,
      }));
    }
  }

  private getButtonClasses(): string {
    const classes = ['button'];
    classes.push(`button--${this.variant}`);
    if (this.size !== 'medium') {
      classes.push(`button--${this.size}`);
    }
    return classes.join(' ');
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

customElements.define('lit-button', LitButton);
