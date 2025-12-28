import styles from './modal.css?inline';

class VanillaModal extends HTMLElement {
  private dialog: HTMLDialogElement | null = null;
  declare shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
    this.dialog = this.shadowRoot.querySelector('dialog');
    this.setupEventListeners();
  }

  disconnectedCallback(): void {
    this.removeEventListeners();
  }

  private setupEventListeners(): void {
    const openButton = this.shadowRoot.querySelector('.open-button');
    const closeButton = this.shadowRoot.querySelector('.close-button');

    openButton?.addEventListener('click', this.openModal.bind(this));
    closeButton?.addEventListener('click', this.closeModal.bind(this));
    this.dialog?.addEventListener('close', this.handleClose.bind(this));
    this.dialog?.addEventListener('click', this.handleBackdropClick.bind(this));
  }

  private removeEventListeners(): void {
    const openButton = this.shadowRoot.querySelector('.open-button');
    const closeButton = this.shadowRoot.querySelector('.close-button');

    openButton?.removeEventListener('click', this.openModal.bind(this));
    closeButton?.removeEventListener('click', this.closeModal.bind(this));
    this.dialog?.removeEventListener('close', this.handleClose.bind(this));
    this.dialog?.removeEventListener('click', this.handleBackdropClick.bind(this));
  }

  // モーダルを開く（公開API）
  openModal(): void {
    this.dialog?.showModal();
  }

  // モーダルを閉じる（公開API）
  closeModal(): void {
    this.dialog?.close();
  }

  private handleClose(): void {
    this.dispatchEvent(new CustomEvent('modal-close'));
  }

  // 背景（backdrop）クリックで閉じる
  private handleBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    // ダイアログ要素自体がクリックされた場合（コンテンツ外）
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      this.closeModal();
    }
  }

  render(): void {
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>

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

customElements.define('vanilla-modal', VanillaModal);

export default VanillaModal;
