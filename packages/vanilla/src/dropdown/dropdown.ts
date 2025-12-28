import styles from './dropdown.css?inline';

interface DropdownOption {
  label: string;
  value: string;
}

class VanillaDropdown extends HTMLElement {
  private _isOpen: boolean = false;
  private _selectedValue: string = '';
  private _options: DropdownOption[] = [];
  declare shadowRoot: ShadowRoot;

  static get observedAttributes(): string[] {
    return ['options', 'selected', 'placeholder', 'disabled'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
    this.setupEventListeners();
  }

  disconnectedCallback(): void {
    document.removeEventListener('click', this.handleClickOutside);
  }

  private handleClickOutside = (event: Event): void => {
    if (!this.contains(event.target as Node)) {
      this._isOpen = false;
      this.render();
    }
  };

  private setupEventListeners(): void {
    const button = this.shadowRoot.querySelector('.dropdown__button');
    if (button) {
      button.addEventListener('click', () => {
        if (!this.disabled) {
          this._isOpen = !this._isOpen;
          this.render();
        }
      });
    }

    const items = this.shadowRoot.querySelectorAll('.dropdown__item');
    items.forEach((item, index) => {
      item.addEventListener('click', () => {
        if (!this.disabled) {
          this._selectedValue = this._options[index].value;
          this._isOpen = false;
          this.render();
          this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this._selectedValue, option: this._options[index] },
            bubbles: true,
            composed: true,
          }));
        }
      });
    });

    if (this._isOpen) {
      document.addEventListener('click', this.handleClickOutside);
    } else {
      document.removeEventListener('click', this.handleClickOutside);
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return;

    switch (name) {
      case 'options':
        try {
          this._options = newValue ? JSON.parse(newValue) : [];
        } catch (e) {
          console.error('Invalid options JSON:', e);
          this._options = [];
        }
        break;
      case 'selected':
        this._selectedValue = newValue || '';
        break;
    }
    this.render();
  }

  get options(): DropdownOption[] {
    return this._options;
  }

  set options(value: DropdownOption[]) {
    this._options = value;
    this.setAttribute('options', JSON.stringify(value));
  }

  get selected(): string {
    return this._selectedValue;
  }

  set selected(value: string) {
    this._selectedValue = value;
    this.setAttribute('selected', value);
  }

  get placeholder(): string {
    return this.getAttribute('placeholder') || 'Select an option';
  }

  set placeholder(value: string) {
    this.setAttribute('placeholder', value);
  }

  get disabled(): boolean {
    return this.hasAttribute('disabled');
  }

  set disabled(value: boolean) {
    if (value) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  private getSelectedLabel(): string {
    const selected = this._options.find(opt => opt.value === this._selectedValue);
    return selected ? selected.label : this.placeholder;
  }

  render(): void {
    const selectedLabel = this.getSelectedLabel();
    const isPlaceholder = !this._options.find(opt => opt.value === this._selectedValue);

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <div class="dropdown">
        <button
          class="dropdown__button ${this.disabled ? 'dropdown__button--disabled' : ''}"
          ${this.disabled ? 'disabled' : ''}
        >
          <span class="${isPlaceholder ? 'dropdown__placeholder' : ''}">${selectedLabel}</span>
          <span class="dropdown__arrow ${this._isOpen ? 'dropdown__arrow--open' : ''}"></span>
        </button>
        <div class="dropdown__menu ${this._isOpen ? 'dropdown__menu--open' : ''}">
          ${this._options.map((option) => `
            <div class="dropdown__item ${option.value === this._selectedValue ? 'dropdown__item--selected' : ''}">
              ${option.label}
            </div>
          `).join('')}
        </div>
      </div>
    `;
    this.setupEventListeners();
  }
}

customElements.define('vanilla-dropdown', VanillaDropdown);

export default VanillaDropdown;
