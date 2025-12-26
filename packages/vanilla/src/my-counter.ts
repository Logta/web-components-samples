class MyCounter extends HTMLElement {
  private _count: number = 0;
  declare shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes(): string[] {
    return ['count'];
  }

  connectedCallback(): void {
    this.render();
    this.shadowRoot.querySelector('.increment')?.addEventListener('click', () => {
      this.count++;
    });
    this.shadowRoot.querySelector('.decrement')?.addEventListener('click', () => {
      this.count--;
    });
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'count' && oldValue !== newValue) {
      this._count = parseInt(newValue || '0', 10) || 0;
      this.render();
    }
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
    this.setAttribute('count', value.toString());
    this.render();
  }

  render(): void {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 20px;
          border: 2px solid #646cff;
          border-radius: 8px;
          margin: 10px 0;
          background: #f9f9f9;
        }
        .counter {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 18px;
        }
        button {
          padding: 8px 16px;
          font-size: 16px;
          border: 1px solid #646cff;
          background: #646cff;
          color: white;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }
        button:hover {
          background: #535bf2;
        }
        .count {
          font-weight: bold;
          min-width: 40px;
          text-align: center;
          font-size: 24px;
          color: #333;
        }
        .label {
          color: #666;
          font-size: 14px;
        }
      </style>
      <div class="counter">
        <div class="label">Vanilla JS Counter:</div>
        <button class="decrement">-</button>
        <span class="count">${this._count}</span>
        <button class="increment">+</button>
      </div>
    `;
  }
}

customElements.define('my-counter', MyCounter);

export default MyCounter;
