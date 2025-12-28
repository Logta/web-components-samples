import styles from './button.css?inline';

class VanillaButton extends HTMLElement {
  declare shadowRoot: ShadowRoot;

  static get observedAttributes(): string[] {
    return ['label', 'variant', 'size', 'disabled'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    const button = this.shadowRoot.querySelector('button');
    if (button) {
      button.addEventListener('click', () => {
        if (!this.disabled) {
          this.dispatchEvent(new CustomEvent('button-click', {
            bubbles: true,
            composed: true,
          }));
        }
      });
    }
  }

  attributeChangedCallback(): void {
    this.render();
  }

  get label(): string {
    return this.getAttribute('label') || 'Button';
  }

  set label(value: string) {
    this.setAttribute('label', value);
  }

  get variant(): string {
    return this.getAttribute('variant') || 'primary';
  }

  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get size(): string {
    return this.getAttribute('size') || 'medium';
  }

  set size(value: string) {
    this.setAttribute('size', value);
  }

  get disabled(): boolean {
    return this.hasAttribute('disabled');
  }

  set disabled(value: boolean) {
    if (value) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
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

  render(): void {
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <button
        class="${this.getButtonClasses()}"
        ${this.disabled ? 'disabled' : ''}
      >
        ${this.label}
      </button>
    `;
    this.setupEventListeners();
  }
}

customElements.define('vanilla-button', VanillaButton);

export default VanillaButton;
