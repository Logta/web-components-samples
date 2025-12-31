const d = ":host{display:block;padding:20px;border:2px solid #646cff;border-radius:8px;margin:10px 0;background:#f9f9f9}.counter{display:flex;align-items:center;gap:15px;font-size:18px}button{padding:8px 16px;font-size:16px;border:1px solid #646cff;background:#646cff;color:#fff;border-radius:4px;cursor:pointer;transition:background .2s}button:hover{background:#535bf2}.count{font-weight:700;min-width:40px;text-align:center;font-size:24px;color:#333}.label{color:#666;font-size:14px}";
class l extends HTMLElement {
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
      <style>${d}</style>
      <div class="counter">
        <div class="label">Vanilla JS Counter:</div>
        <button class="decrement">-</button>
        <span class="count">${this._count}</span>
        <button class="increment">+</button>
      </div>
    `;
  }
}
customElements.define("my-counter", l);
const a = ".container{display:inline-block}.open-button{padding:.75rem 1.5rem;background-color:#10b981;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}.open-button:hover{background-color:#059669}.open-button:focus{outline:2px solid #10b981;outline-offset:2px}dialog{border:none;border-radius:12px;padding:0;max-width:28rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;animation:slideIn .3s cubic-bezier(.4,0,.2,1)}dialog::backdrop{background-color:#00000080;animation:fadeIn .3s cubic-bezier(.4,0,.2,1)}@keyframes slideIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.modal-panel{padding:1.5rem;background-color:#fff}.modal-header{margin-bottom:1rem}.modal-title{font-size:1.5rem;font-weight:700;color:#111827;margin:0}.modal-body{margin-top:.5rem}.modal-description{font-size:.875rem;color:#6b7280;margin-bottom:1rem}.modal-content{margin-top:1rem}.modal-content p{margin:0 0 .75rem;color:#374151;line-height:1.6}.modal-content ul{margin:0;padding-left:1.5rem;color:#374151;line-height:1.8}.modal-content li{margin-bottom:.25rem}.modal-actions{margin-top:1.5rem;display:flex;gap:.75rem;justify-content:flex-end}.close-button{padding:.625rem 1.25rem;background-color:#10b981;color:#fff;border:none;border-radius:6px;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s}.close-button:hover{background-color:#059669}.close-button:focus{outline:2px solid #10b981;outline-offset:2px}@media(max-width:640px){dialog{max-width:90vw}.modal-panel{padding:1.25rem}.modal-title{font-size:1.25rem}}";
class c extends HTMLElement {
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
      <style>${a}</style>

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
              <slot name="content">
                <!-- デフォルトコンテンツ -->
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
              </slot>
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
customElements.define("vanilla-modal", c);
const u = ".button{display:inline-flex;align-items:center;justify-content:center;padding:.5rem 1rem;font-size:1rem;font-weight:500;border:none;border-radius:.375rem;cursor:pointer;transition:all .2s ease-in-out;font-family:inherit}.button:disabled{opacity:.5;cursor:not-allowed}.button:not(:disabled):hover{transform:translateY(-1px);box-shadow:0 4px 6px #0000001a}.button:not(:disabled):active{transform:translateY(0)}.button--primary{background-color:#3b82f6;color:#fff}.button--primary:not(:disabled):hover{background-color:#2563eb}.button--secondary{background-color:#6b7280;color:#fff}.button--secondary:not(:disabled):hover{background-color:#4b5563}.button--success{background-color:#10b981;color:#fff}.button--success:not(:disabled):hover{background-color:#059669}.button--danger{background-color:#ef4444;color:#fff}.button--danger:not(:disabled):hover{background-color:#dc2626}.button--small{padding:.25rem .75rem;font-size:.875rem}.button--large{padding:.75rem 1.5rem;font-size:1.125rem}";
class h extends HTMLElement {
  static get observedAttributes() {
    return ["label", "variant", "size", "disabled", "onbuttonclick"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render(), this.setupEventListeners();
  }
  setupEventListeners() {
    const t = this.shadowRoot.querySelector("button");
    t && t.addEventListener("click", () => {
      if (!this.disabled) {
        this.dispatchEvent(new CustomEvent("button-click", {
          bubbles: !0,
          composed: !0
        }));
        const o = this.getAttribute("onbuttonclick");
        if (o)
          try {
            new Function(o)();
          } catch (e) {
            console.error("Error executing onbuttonclick:", e);
          }
      }
    });
  }
  attributeChangedCallback() {
    this.render();
  }
  get label() {
    return this.getAttribute("label") || "Button";
  }
  set label(t) {
    this.setAttribute("label", t);
  }
  get variant() {
    return this.getAttribute("variant") || "primary";
  }
  set variant(t) {
    this.setAttribute("variant", t);
  }
  get size() {
    return this.getAttribute("size") || "medium";
  }
  set size(t) {
    this.setAttribute("size", t);
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(t) {
    t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }
  getButtonClasses() {
    const t = ["button"];
    return t.push(`button--${this.variant}`), this.size !== "medium" && t.push(`button--${this.size}`), t.join(" ");
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>${u}</style>
      <button
        class="${this.getButtonClasses()}"
        ${this.disabled ? "disabled" : ""}
      >
        ${this.label}
      </button>
    `, this.setupEventListeners();
  }
}
customElements.define("vanilla-button", h);
const b = ".dropdown{position:relative;display:inline-block;width:100%;max-width:300px}.dropdown__button{width:100%;padding:.5rem 2.5rem .5rem 1rem;font-size:1rem;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:all .2s ease-in-out;position:relative}.dropdown__button:hover{border-color:#9ca3af}.dropdown__button:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f61a}.dropdown__button--disabled{opacity:.5;cursor:not-allowed}.dropdown__arrow{position:absolute;right:1rem;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #6b7280;transition:transform .2s ease-in-out}.dropdown__arrow--open{transform:rotate(180deg)}.dropdown__menu{position:absolute;top:calc(100% + .25rem);left:0;right:0;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;box-shadow:0 10px 15px -3px #0000001a;max-height:300px;overflow-y:auto;z-index:10;display:none}.dropdown__menu--open{display:block}.dropdown__item{padding:.5rem 1rem;cursor:pointer;transition:background-color .2s ease-in-out;display:flex;align-items:center}.dropdown__item:hover{background-color:#f3f4f6}.dropdown__item--selected{background-color:#eff6ff;color:#3b82f6;font-weight:500}.dropdown__placeholder{color:#9ca3af}";
class p extends HTMLElement {
  constructor() {
    super(), this._isOpen = !1, this._selectedValue = "", this._options = [], this.handleClickOutside = (t) => {
      this.contains(t.target) || (this._isOpen = !1, this.render());
    }, this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["options", "selected", "placeholder", "disabled", "onvaluechange"];
  }
  connectedCallback() {
    this.render(), this.setupEventListeners();
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.handleClickOutside);
  }
  setupEventListeners() {
    const t = this.shadowRoot.querySelector(".dropdown__button");
    t && t.addEventListener("click", () => {
      this.disabled || (this._isOpen = !this._isOpen, this.render());
    }), this.shadowRoot.querySelectorAll(".dropdown__item").forEach((e, s) => {
      e.addEventListener("click", () => {
        if (!this.disabled) {
          this._selectedValue = this._options[s].value, this._isOpen = !1, this.render(), this.dispatchEvent(new CustomEvent("change", {
            detail: { value: this._selectedValue, option: this._options[s] },
            bubbles: !0,
            composed: !0
          }));
          const n = this.getAttribute("onvaluechange");
          if (n)
            try {
              new Function("value", "option", n)(this._selectedValue, this._options[s]);
            } catch (r) {
              console.error("Error executing onvaluechange:", r);
            }
        }
      });
    }), this._isOpen ? document.addEventListener("click", this.handleClickOutside) : document.removeEventListener("click", this.handleClickOutside);
  }
  attributeChangedCallback(t, o, e) {
    if (o !== e) {
      switch (t) {
        case "options":
          try {
            this._options = e ? JSON.parse(e) : [];
          } catch (s) {
            console.error("Invalid options JSON:", s), this._options = [];
          }
          break;
        case "selected":
          this._selectedValue = e || "";
          break;
      }
      this.render();
    }
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this._options = t, this.setAttribute("options", JSON.stringify(t));
  }
  get selected() {
    return this._selectedValue;
  }
  set selected(t) {
    this._selectedValue = t, this.setAttribute("selected", t);
  }
  get placeholder() {
    return this.getAttribute("placeholder") || "Select an option";
  }
  set placeholder(t) {
    this.setAttribute("placeholder", t);
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(t) {
    t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }
  getSelectedLabel() {
    const t = this._options.find((o) => o.value === this._selectedValue);
    return t ? t.label : this.placeholder;
  }
  render() {
    const t = this.getSelectedLabel(), o = !this._options.find((e) => e.value === this._selectedValue);
    this.shadowRoot.innerHTML = `
      <style>${b}</style>
      <div class="dropdown">
        <button
          class="dropdown__button ${this.disabled ? "dropdown__button--disabled" : ""}"
          ${this.disabled ? "disabled" : ""}
        >
          <span class="${o ? "dropdown__placeholder" : ""}">${t}</span>
          <span class="dropdown__arrow ${this._isOpen ? "dropdown__arrow--open" : ""}"></span>
        </button>
        <div class="dropdown__menu ${this._isOpen ? "dropdown__menu--open" : ""}">
          ${this._options.map((e) => `
            <div class="dropdown__item ${e.value === this._selectedValue ? "dropdown__item--selected" : ""}">
              ${e.label}
            </div>
          `).join("")}
        </div>
      </div>
    `, this.setupEventListeners();
  }
}
customElements.define("vanilla-dropdown", p);
export {
  l as MyCounter,
  h as VanillaButton,
  p as VanillaDropdown,
  c as VanillaModal
};
