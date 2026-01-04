import { html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import * as dialog from '@zag-js/dialog';
import { ZagElement } from '../base/zag-element';
import { useMachine, type SimpleService } from '../utils/use-machine';

/**
 * Modalコンポーネント (Zag.js dialog実装)
 *
 * WAI-ARIA準拠のモーダルダイアログ
 * Zag.jsのDialog APIを参考にした独自実装
 */

interface DialogTriggerProps {
  type: 'button';
  'aria-haspopup': 'dialog';
  onClick: () => void;
}

interface DialogBackdropProps {
  hidden: boolean;
  onClick: () => void;
}

interface DialogContentProps {
  role: 'dialog';
  'aria-modal': boolean;
  hidden: boolean;
}

interface DialogCloseTriggerProps {
  type: 'button';
  'aria-label': string;
  onClick: () => void;
}

interface DialogApi {
  readonly open: boolean;
  getTriggerProps: () => DialogTriggerProps;
  getBackdropProps: () => DialogBackdropProps;
  getContentProps: () => DialogContentProps;
  getCloseTriggerProps: () => DialogCloseTriggerProps;
}

@customElement('lit-tailwind-modal')
export class LitTailwindModal extends ZagElement<DialogApi> {
  static styles = [
    ...super.styles,
    css`
      :host {
        display: block;
      }
    `
  ];

  @property({ type: Boolean })
  open = false;

  @query('dialog')
  private nativeDialog?: HTMLDialogElement;

  protected createService(): SimpleService {
    const service = useMachine(dialog.machine, {
      context: {
        id: this.id || 'modal',
        open: this.open,
        onOpenChange: (open: boolean) => {
          this.open = open;
          service.context.set('open', open);

          // ネイティブdialog要素の状態を同期
          if (open) {
            this.nativeDialog?.showModal();
          } else {
            this.nativeDialog?.close();
          }

          if (!open) {
            this.dispatchEvent(new CustomEvent('modal-close', {
              bubbles: true,
              composed: true,
            }));
          }
        },
        getRootNode: () => this.getRootNode(),
      }
    });
    return service;
  }

  protected connectApi(service: SimpleService): DialogApi {
    const getCurrentOpen = (): boolean => {
      const value = service.context.get<boolean>('open');
      return typeof value === 'boolean' ? value : this.open;
    };
    const getOnOpenChange = (): ((open: boolean) => void) | undefined => {
      return service.context.get<(open: boolean) => void>('onOpenChange');
    };

    return {
      get open(): boolean {
        return getCurrentOpen();
      },
      getTriggerProps: (): DialogTriggerProps => ({
        type: 'button' as const,
        'aria-haspopup': 'dialog' as const,
        onClick: (): void => {
          const onOpenChange = getOnOpenChange();
          if (onOpenChange) {
            onOpenChange(true);
          }
        }
      }),
      getBackdropProps: (): DialogBackdropProps => ({
        hidden: !getCurrentOpen(),
        onClick: (): void => {
          const onOpenChange = getOnOpenChange();
          if (onOpenChange) {
            onOpenChange(false);
          }
        }
      }),
      getContentProps: (): DialogContentProps => ({
        role: 'dialog' as const,
        'aria-modal': true,
        hidden: !getCurrentOpen(),
      }),
      getCloseTriggerProps: (): DialogCloseTriggerProps => ({
        type: 'button' as const,
        'aria-label': 'Close dialog',
        onClick: (): void => {
          const onOpenChange = getOnOpenChange();
          if (onOpenChange) {
            onOpenChange(false);
          }
        }
      })
    };
  }

  protected updateContext(changedProperties: Map<string, any>): void {
    if (changedProperties.has('open')) {
      this.service.context.set('open', this.open);
      const onOpenChange = this.service.context.get<(open: boolean) => void>('onOpenChange');
      if (onOpenChange) {
        onOpenChange(this.open);
      }
    }
  }

  private handleDialogClose(): void {
    this.open = false;
    const onOpenChange = this.service.context.get<(open: boolean) => void>('onOpenChange');
    if (onOpenChange) {
      onOpenChange(false);
    }
  }

  render() {
    this.updateApi();

    const triggerProps = this.api.getTriggerProps();
    const backdropProps = this.api.getBackdropProps();
    const contentProps = this.api.getContentProps();
    const closeProps = this.api.getCloseTriggerProps();

    return html`
      <div class="container mx-auto p-4">
        <button
          type="${triggerProps.type}"
          aria-haspopup="${triggerProps['aria-haspopup']}"
          @click="${triggerProps.onClick}"
          class="
            px-6 py-3 rounded-lg font-semibold text-white
            bg-blue-600 hover:bg-blue-700 active:bg-blue-800
            transition-all duration-200
            shadow-md hover:shadow-lg
            transform hover:scale-105 active:scale-95
            cursor-pointer
          "
        >
          Open Modal
        </button>

        <!-- Backdrop -->
        <div
          ?hidden="${backdropProps.hidden}"
          @click="${backdropProps.onClick}"
          class="
            fixed inset-0 z-40
            bg-black/50 backdrop-blur-sm
          "
        ></div>

        <!-- Dialog -->
        <dialog
          role="${contentProps.role}"
          aria-modal="${contentProps['aria-modal']}"
          ?hidden="${contentProps.hidden}"
          @close="${() => this.handleDialogClose()}"
          class="
            fixed top-1/2 left-1/2 z-50
            -translate-x-1/2 -translate-y-1/2
            rounded-2xl shadow-2xl border-2 border-gray-200
            p-0 max-w-2xl w-full
            backdrop:bg-transparent
          "
        >
          <div class="bg-white rounded-2xl overflow-hidden">
            <!-- Header -->
            <div class="
              px-6 py-4
              bg-gradient-to-r from-blue-600 to-blue-700
              border-b border-blue-800
            ">
              <h3 class="text-2xl font-bold text-white">
                Tailwind Modal
              </h3>
            </div>

            <!-- Body -->
            <div class="px-6 py-6">
              <slot name="content">
                <!-- デフォルトコンテンツ -->
                <p class="text-gray-700 mb-4">
                  This is a modal dialog built with Lit + Tailwind CSS + Zag.js and native HTML &lt;dialog&gt; element.
                </p>

                <div class="bg-gray-50 rounded-lg p-4">
                  <p class="font-semibold text-gray-900 mb-2">
                    This modal demonstrates:
                  </p>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>Zag.js Dialog state machine</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>Lit reactive properties</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>Native &lt;dialog&gt; accessibility</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>Automatic focus trap</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>ESC key to close (native)</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">✅</span>
                      <span>Click backdrop to close</span>
                    </li>
                  </ul>
                </div>
              </slot>
            </div>

            <!-- Actions -->
            <div class="
              px-6 py-4
              bg-gray-50 border-t border-gray-200
              flex justify-end gap-3
            ">
              <button
                type="${closeProps.type}"
                aria-label="${closeProps['aria-label']}"
                @click="${closeProps.onClick}"
                class="
                  px-6 py-2 rounded-lg font-semibold
                  bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white
                  transition-all duration-200
                  shadow-md hover:shadow-lg
                  transform hover:scale-105 active:scale-95
                  cursor-pointer
                "
              >
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
    'lit-tailwind-modal': LitTailwindModal;
  }
}
