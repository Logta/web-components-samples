import styles from './my-counter.css?inline';

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
    // イベント委譲で親要素にリスナーを1回だけ登録
    this.shadowRoot.addEventListener('click', this.handleClick.bind(this));
  }

  private handleClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('increment')) {
      this.count++;
    } else if (target.classList.contains('decrement')) {
      this.count--;
    }
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
      <style>${styles}</style>
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
