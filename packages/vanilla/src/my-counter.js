class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._count = 0;
  }

  static get observedAttributes() {
    return ['count'];
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('.increment').addEventListener('click', () => {
      this.count++;
    });
    this.shadowRoot.querySelector('.decrement').addEventListener('click', () => {
      this.count--;
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'count' && oldValue !== newValue) {
      this._count = parseInt(newValue, 10) || 0;
      this.render();
    }
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
    this.setAttribute('count', value);
    this.render();
  }

  render() {
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
