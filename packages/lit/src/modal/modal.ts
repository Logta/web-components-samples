import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import styles from './modal.css?inline';

@customElement('lit-modal')
export class LitModal extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  @property({ type: Boolean })
  open = false;

  @query('dialog')
  private dialog?: HTMLDialogElement;

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('open')) {
      if (this.open) {
        this.dialog?.showModal();
      } else {
        this.dialog?.close();
      }
    }
  }

  private openModal() {
    this.open = true;
  }

  private closeModal() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('modal-close'));
  }

  private handleClose() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('modal-close'));
  }

  private handleBackdropClick(event: MouseEvent) {
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

  render() {
    return html`
      <div class="container">
        <button type="button" class="open-button" @click=${this.openModal}>
          Open Lit Modal
        </button>

        <dialog @close=${this.handleClose} @click=${this.handleBackdropClick}>
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Lit Modal</h3>
            </div>

            <div class="modal-body">
              <p class="modal-description">
                This is a modal dialog built with Lit and native HTML &lt;dialog&gt; element.
              </p>

              <div class="modal-content">
                <p>
                  This modal demonstrates Lit + &lt;dialog&gt; integration:
                </p>
                <ul>
                  <li>✅ Lit reactive properties</li>
                  <li>✅ Native &lt;dialog&gt; accessibility</li>
                  <li>✅ Automatic focus trap</li>
                  <li>✅ ESC key to close (native)</li>
                  <li>✅ Click outside to close</li>
                  <li>✅ ::backdrop pseudo-element</li>
                </ul>
              </div>
            </div>

            <div class="modal-actions">
              <button type="button" class="close-button" @click=${this.closeModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-modal': LitModal;
  }
}
