import { html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../base-element';
import styles from './counter.css?inline';

@customElement('lit-tailwind-counter')
export class LitTailwindCounter extends TailwindElement {
  static styles = [
    ...super.styles,
    css`${unsafeCSS(styles)}`,
    css`:host { display: block; }`
  ];

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
      <div class="counter-container">
        <div class="counter-header">
          <h2 class="counter-title">Lit + Tailwind Counter</h2>
          <p class="counter-subtitle">
            Shadow DOM + Constructable Stylesheets
          </p>
        </div>
        
        <div class="counter-controls">
          <button
            type="button"
            @click=${this.decrement}
            class="counter-button counter-button--decrement"
          >
            <span class="counter-button-text">−</span>
          </button>
          
          <div class="counter-display">
            <div class="counter-value">${this.count}</div>
            <div class="counter-label">current value</div>
          </div>
          
          <button
            type="button"
            @click=${this.increment}
            class="counter-button counter-button--increment"
          >
            <span class="counter-button-text">+</span>
          </button>
        </div>
        
        <div class="counter-footer">
          <div class="counter-badge">
            <span class="counter-indicator"></span>
            Powered by Tailwind CSS v4
          </div>
        </div>
      </div>
    `;
  }
}