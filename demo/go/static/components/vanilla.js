const i = ":host{display:block;padding:20px;border:2px solid #646cff;border-radius:8px;margin:10px 0;background:#f9f9f9}.counter{display:flex;align-items:center;gap:15px;font-size:18px}button{padding:8px 16px;font-size:16px;border:1px solid #646cff;background:#646cff;color:#fff;border-radius:4px;cursor:pointer;transition:background .2s}button:hover{background:#535bf2}.count{font-weight:700;min-width:40px;text-align:center;font-size:24px;color:#333}.label{color:#666;font-size:14px}";
class s extends HTMLElement {
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
    const o = t.target;
    o.classList.contains("increment") ? this.count++ : o.classList.contains("decrement") && this.count--;
  }
  attributeChangedCallback(t, o, e) {
    t === "count" && o !== e && (this._count = parseInt(e || "0", 10) || 0, this.render());
  }
  get count() {
    return this._count;
  }
  set count(t) {
    this._count = t, this.setAttribute("count", t.toString()), this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>${i}</style>
      <div class="counter">
        <div class="label">Vanilla JS Counter:</div>
        <button class="decrement">-</button>
        <span class="count">${this._count}</span>
        <button class="increment">+</button>
      </div>
    `;
  }
}
customElements.define("my-counter", s);
const l = ".container{display:inline-block}.open-button{padding:.75rem 1.5rem;background-color:#10b981;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}.open-button:hover{background-color:#059669}.open-button:focus{outline:2px solid #10b981;outline-offset:2px}dialog{border:none;border-radius:12px;padding:0;max-width:28rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;animation:slideIn .3s cubic-bezier(.4,0,.2,1)}dialog::backdrop{background-color:#00000080;animation:fadeIn .3s cubic-bezier(.4,0,.2,1)}@keyframes slideIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.modal-panel{padding:1.5rem;background-color:#fff}.modal-header{margin-bottom:1rem}.modal-title{font-size:1.5rem;font-weight:700;color:#111827;margin:0}.modal-body{margin-top:.5rem}.modal-description{font-size:.875rem;color:#6b7280;margin-bottom:1rem}.modal-content{margin-top:1rem}.modal-content p{margin:0 0 .75rem;color:#374151;line-height:1.6}.modal-content ul{margin:0;padding-left:1.5rem;color:#374151;line-height:1.8}.modal-content li{margin-bottom:.25rem}.modal-actions{margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end}.close-button{padding:.625rem 1.25rem;background-color:#10b981;color:#fff;border:none;border-radius:6px;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s}.close-button:hover{background-color:#059669}.close-button:focus{outline:2px solid #10b981;outline-offset:2px}@media(max-width:640px){dialog{max-width:90vw}.modal-panel{padding:1.25rem}.modal-title{font-size:1.25rem}}";
class a extends HTMLElement {
  constructor() {
    super(), this.dialog = null, this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render(), this.dialog = this.shadowRoot.querySelector("dialog"), this.setupEventListeners();
  }
  disconnectedCallback() {
    this.removeEventListeners();
  }
  setupEventListeners() {
    const t = this.shadowRoot.querySelector(".open-button"), o = this.shadowRoot.querySelector(".close-button");
    t?.addEventListener("click", this.openModal.bind(this)), o?.addEventListener("click", this.closeModal.bind(this)), this.dialog?.addEventListener("close", this.handleClose.bind(this)), this.dialog?.addEventListener("click", this.handleBackdropClick.bind(this));
  }
  removeEventListeners() {
    const t = this.shadowRoot.querySelector(".open-button"), o = this.shadowRoot.querySelector(".close-button");
    t?.removeEventListener("click", this.openModal.bind(this)), o?.removeEventListener("click", this.closeModal.bind(this)), this.dialog?.removeEventListener("close", this.handleClose.bind(this)), this.dialog?.removeEventListener("click", this.handleBackdropClick.bind(this));
  }
  // モーダルを開く（公開API）
  openModal() {
    this.dialog?.showModal();
  }
  // モーダルを閉じる（公開API）
  closeModal() {
    this.dialog?.close();
  }
  handleClose() {
    this.dispatchEvent(new CustomEvent("modal-close"));
  }
  // 背景（backdrop）クリックで閉じる
  handleBackdropClick(t) {
    const e = t.target.getBoundingClientRect();
    (t.clientX < e.left || t.clientX > e.right || t.clientY < e.top || t.clientY > e.bottom) && this.closeModal();
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>${l}</style>

      <div class="container">
        <button type="button" class="open-button">
          Open Vanilla Modal
        </button>

        <dialog>
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Vanilla JS Modal</h3>
            </div>

            <div class="modal-body">
              <p class="modal-description">
                This is a modal dialog built with native HTML &lt;dialog&gt; element.
              </p>

              <div class="modal-content">
                <p>
                  This modal demonstrates the native &lt;dialog&gt; element features:
                </p>
                <ul>
                  <li>✅ Built-in accessibility (ARIA attributes)</li>
                  <li>✅ Automatic focus trap</li>
                  <li>✅ ESC key to close (native)</li>
                  <li>✅ Click outside to close</li>
                  <li>✅ ::backdrop pseudo-element</li>
                  <li>✅ Zero dependencies</li>
                </ul>
              </div>
            </div>

            <div class="modal-actions">
              <button type="button" class="close-button">
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    `;
  }
}
customElements.define("vanilla-modal", a);
export {
  s as MyCounter,
  a as VanillaModal
};
