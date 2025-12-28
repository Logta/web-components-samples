import { css, html, LitElement, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './counter.css?inline';

export class LitCounter extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  @property({ type: Number })
  count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  render() {
    return html`
      <div class="counter">
        <div class="label">Lit Counter:</div>
        <button @click=${this.decrement}>-</button>
        <span class="count">${this.count}</span>
        <button @click=${this.increment}>+</button>
      </div>
    `;
  }
}

customElements.define('lit-counter', LitCounter);
