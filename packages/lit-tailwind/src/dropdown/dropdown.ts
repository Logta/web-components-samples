import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import * as menu from '@zag-js/menu';
import { ZagElement } from '../base/zag-element';
import { useMachine, type SimpleService } from '../utils/use-machine';

export interface DropdownOption {
  label: string;
  value: string;
}

/**
 * Dropdownコンポーネント (Zag.js menu実装)
 *
 * WAI-ARIA準拠のドロップダウンメニュー
 * Zag.jsのMenu APIを参考にした独自実装
 */

interface MenuTriggerProps {
  type: 'button';
  'aria-haspopup': 'menu';
  'aria-expanded': boolean;
  'aria-controls': string;
  onClick: () => void;
}

interface MenuContentProps {
  id: string;
  role: 'menu';
  hidden: boolean;
}

interface MenuItemProps {
  role: 'menuitem';
  onClick: () => void;
}

interface MenuApi {
  readonly open: boolean;
  getTriggerProps: () => MenuTriggerProps;
  getContentProps: () => MenuContentProps;
  getItemProps: (option: DropdownOption) => MenuItemProps;
}

@customElement('lit-tailwind-dropdown')
export class LitTailwindDropdown extends ZagElement<MenuApi> {
  static styles = [
    ...super.styles,
    css`
      :host {
        display: inline-block;
        position: relative;
      }
    `
  ];

  @property({ type: Array })
  options: DropdownOption[] = [];

  @property({ type: String })
  selected = '';

  @property({ type: String })
  placeholder = 'Select an option';

  @property({ type: Boolean })
  disabled = false;

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this.handleClickOutside);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleClickOutside);
  }

  private handleClickOutside = (e: Event): void => {
    if (!this.contains(e.target as Node)) {
      this.service.context.set('open', false);
      this.requestUpdate();
    }
  };

  protected createService(): SimpleService {
    const service = useMachine(menu.machine, {
      context: {
        id: this.id || 'dropdown',
        open: false,
        onOpenChange: (open: boolean) => {
          service.context.set('open', open);
          this.requestUpdate();
        },
        getRootNode: () => this.getRootNode(),
      }
    });
    return service;
  }

  protected connectApi(service: SimpleService): MenuApi {
    const getCurrentOpen = (): boolean => {
      const value = service.context.get<boolean>('open');
      return typeof value === 'boolean' ? value : false;
    };
    const getOnOpenChange = (): ((open: boolean) => void) | undefined => {
      return service.context.get<(open: boolean) => void>('onOpenChange');
    };
    const getId = (): string => {
      const value = service.context.get<string>('id');
      return typeof value === 'string' ? value : 'dropdown';
    };

    return {
      get open(): boolean {
        return getCurrentOpen();
      },
      getTriggerProps: (): MenuTriggerProps => ({
        type: 'button' as const,
        'aria-haspopup': 'menu' as const,
        'aria-expanded': getCurrentOpen(),
        'aria-controls': `${getId()}-menu`,
        onClick: (): void => {
          if (!this.disabled) {
            const currentOpen = getCurrentOpen();
            const onOpenChange = getOnOpenChange();
            if (onOpenChange) {
              onOpenChange(!currentOpen);
            }
          }
        }
      }),
      getContentProps: (): MenuContentProps => ({
        id: `${getId()}-menu`,
        role: 'menu' as const,
        hidden: !getCurrentOpen(),
      }),
      getItemProps: (option: DropdownOption): MenuItemProps => ({
        role: 'menuitem' as const,
        onClick: (): void => {
          if (!this.disabled) {
            this.selected = option.value;
            const onOpenChange = getOnOpenChange();
            if (onOpenChange) {
              onOpenChange(false);
            }
            this.dispatchEvent(new CustomEvent('change', {
              detail: { value: option.value, option },
              bubbles: true,
              composed: true,
            }));
          }
        }
      })
    };
  }

  protected updateContext(changedProperties: Map<string, any>): void {
    if (changedProperties.has('disabled')) {
      this.service.context.set('disabled', this.disabled);
    }
  }

  private getSelectedLabel(): string {
    const selectedOpt = this.options.find(opt => opt.value === this.selected);
    return selectedOpt ? selectedOpt.label : this.placeholder;
  }

  render() {
    this.updateApi();

    const selectedLabel = this.getSelectedLabel();
    const isPlaceholder = !this.options.find(opt => opt.value === this.selected);
    const triggerProps = this.api.getTriggerProps();
    const contentProps = this.api.getContentProps();

    return html`
      <div class="relative inline-block w-full min-w-[200px]">
        <button
          type="${triggerProps.type}"
          aria-haspopup="${triggerProps['aria-haspopup']}"
          aria-expanded="${triggerProps['aria-expanded']}"
          aria-controls="${triggerProps['aria-controls']}"
          @click="${triggerProps.onClick}"
          ?disabled="${this.disabled}"
          class="
            w-full px-4 py-2 text-left
            bg-white border-2 border-gray-300 rounded-lg
            hover:border-blue-400 focus:border-blue-500 focus:outline-none
            transition-colors duration-200
            ${this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          "
        >
          <div class="flex justify-between items-center">
            <span class="${isPlaceholder ? 'text-gray-400' : 'text-gray-900'}">
              ${selectedLabel}
            </span>
            <svg
              class="w-5 h-5 transition-transform duration-200 ${this.api.open ? 'rotate-180' : ''}"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        <div
          id="${contentProps.id}"
          role="${contentProps.role}"
          ?hidden="${contentProps.hidden}"
          class="
            absolute z-10 w-full mt-1
            bg-white border-2 border-gray-300 rounded-lg shadow-lg
            max-h-60 overflow-y-auto
          "
        >
          ${this.options.map(option => {
            const itemProps = this.api.getItemProps(option);
            return html`
              <div
                role="${itemProps.role}"
                @click="${itemProps.onClick}"
                class="
                  px-4 py-2 cursor-pointer
                  hover:bg-blue-50
                  ${option.value === this.selected ? 'bg-blue-100 text-blue-900 font-semibold' : 'text-gray-900'}
                  transition-colors duration-150
                "
              >
                ${option.label}
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }
}
