const s = ":host{display:block;padding:20px;border:2px solid #646cff;border-radius:8px;margin:10px 0;background:#f9f9f9}.counter{display:flex;align-items:center;gap:15px;font-size:18px}button{padding:8px 16px;font-size:16px;border:1px solid #646cff;background:#646cff;color:#fff;border-radius:4px;cursor:pointer;transition:background .2s}button:hover{background:#535bf2}.count{font-weight:700;min-width:40px;text-align:center;font-size:24px;color:#333}.label{color:#666;font-size:14px}";
class o extends HTMLElement {
  constructor() {
    super(), this._count = 0, this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["count"];
  }
  connectedCallback() {
    this.render(), this.shadowRoot.addEventListener("click", this.handleClick.bind(this));
  }
  handleClick(t) {
    const n = t.target;
    n.classList.contains("increment") ? this.count++ : n.classList.contains("decrement") && this.count--;
  }
  attributeChangedCallback(t, n, e) {
    t === "count" && n !== e && (this._count = parseInt(e || "0", 10) || 0, this.render());
  }
  get count() {
    return this._count;
  }
  set count(t) {
    this._count = t, this.setAttribute("count", t.toString()), this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>${s}</style>
      <div class="counter">
        <div class="label">Vanilla JS Counter:</div>
        <button class="decrement">-</button>
        <span class="count">${this._count}</span>
        <button class="increment">+</button>
      </div>
    `;
  }
}
customElements.define("my-counter", o);
export {
  o as default
};
