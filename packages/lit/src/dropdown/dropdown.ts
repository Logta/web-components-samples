import { LitElement, html, css, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './dropdown.css?inline';

interface DropdownOption {
  label: string;
  value: string;
}

export class LitDropdown extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  @property({ type: String })
  options: string = '[]';

  @property({ type: String })
  selected: string = '';

  @property({ type: String })
  placeholder: string = 'Select an option';

  @property({ type: Boolean })
  disabled: boolean = false;

  @state()
  private isOpen: boolean = false;

  private parsedOptions: DropdownOption[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.parseOptions();
    document.addEventListener('click', this.handleClickOutside);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleClickOutside);
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('options')) {
      this.parseOptions();
    }
  }

  private parseOptions() {
    try {
      this.parsedOptions = JSON.parse(this.options);
    } catch (e) {
      this.parsedOptions = [];
    }
  }

  private handleClickOutside = (e: Event) => {
    if (!this.contains(e.target as Node)) {
      this.isOpen = false;
    }
  };

  private handleToggle() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  private handleSelect(option: DropdownOption) {
    if (!this.disabled) {
      this.selected = option.value;
      this.isOpen = false;
      this.dispatchEvent(new CustomEvent('change', {
        detail: { value: option.value, option },
        bubbles: true,
        composed: true,
      }));
    }
  }

  private getSelectedLabel(): string {
    const selectedOpt = this.parsedOptions.find(opt => opt.value === this.selected);
    return selectedOpt ? selectedOpt.label : this.placeholder;
  }

  render() {
    const selectedLabel = this.getSelectedLabel();
    const isPlaceholder = !this.parsedOptions.find(opt => opt.value === this.selected);

    return html`
      <div class="dropdown">
        <button
          class="dropdown__button ${this.disabled ? 'dropdown__button--disabled' : ''}"
          @click="${this.handleToggle}"
          ?disabled="${this.disabled}"
        >
          <span class="${isPlaceholder ? 'dropdown__placeholder' : ''}">
            ${selectedLabel}
          </span>
          <span class="dropdown__arrow ${this.isOpen ? 'dropdown__arrow--open' : ''}"></span>
        </button>
        ${this.isOpen ? html`
          <div class="dropdown__menu">
            ${this.parsedOptions.map(option => html`
              <div
                class="dropdown__item ${option.value === this.selected ? 'dropdown__item--selected' : ''}"
                @click="${() => this.handleSelect(option)}"
              >
                ${option.label}
              </div>
            `)}
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('lit-dropdown', LitDropdown);
