import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import * as toggle from '@zag-js/toggle';
import { ZagElement } from '../base/zag-element';
import { useMachine, type SimpleService } from '../utils/use-machine';

/**
 * Toggleコンポーネント (Zag.js風実装)
 *
 * WAI-ARIA準拠のトグルボタン
 * Zag.jsのAPIを参考にした独自実装
 */

interface ToggleApi {
  pressed: boolean;
  disabled: boolean;
  getRootProps: () => Record<string, any>;
}

@customElement('lit-tailwind-toggle')
export class LitTailwindToggle extends ZagElement<ToggleApi> {
  static styles = [
    ...super.styles,
    css`
      :host {
        display: inline-block;
      }
    `
  ];

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  pressed = false;

  protected createService(): SimpleService {
    const service = useMachine(toggle.machine, {
      context: {
        id: this.id || 'toggle',
        disabled: this.disabled,
        pressed: this.pressed,
        onPressedChange: (pressed: boolean) => {
          this.pressed = pressed;
          // コンテキストも更新
          service.context.set('pressed', pressed);
          this.dispatchEvent(new CustomEvent('pressed-change', {
            detail: { pressed },
            bubbles: true,
            composed: true
          }));
        },
        getRootNode: () => this.getRootNode(),
      }
    });
    return service;
  }

  protected connectApi(service: SimpleService): ToggleApi {
    // 現在の値を取得（クロージャで固定しない）
    const getCurrentPressed = () => service.context.get('pressed') ?? this.pressed;
    const getCurrentDisabled = () => service.context.get('disabled') ?? this.disabled;
    const onPressedChange = service.context.get('onPressedChange');

    return {
      get pressed() {
        return getCurrentPressed();
      },
      get disabled() {
        return getCurrentDisabled();
      },
      getRootProps: () => ({
        type: 'button',
        role: 'button',
        'aria-pressed': getCurrentPressed(),
        disabled: getCurrentDisabled(),
        onClick: () => {
          const currentDisabled = getCurrentDisabled();
          const currentPressed = getCurrentPressed();
          if (!currentDisabled && onPressedChange) {
            onPressedChange(!currentPressed);
          }
        }
      })
    };
  }

  protected updateContext(changedProperties: Map<string, any>): void {
    if (changedProperties.has('disabled')) {
      this.service.context.set('disabled', this.disabled);
    }
    if (changedProperties.has('pressed')) {
      this.service.context.set('pressed', this.pressed);
    }
  }

  render() {
    this.updateApi();

    return html`
      <button
        type="${this.api.getRootProps().type}"
        role="${this.api.getRootProps().role}"
        aria-pressed="${this.api.getRootProps()['aria-pressed']}"
        ?disabled="${this.api.getRootProps().disabled}"
        @click="${this.api.getRootProps().onClick}"
        class="
          px-6 py-3 rounded-lg font-semibold text-white
          transition-all duration-200
          shadow-md hover:shadow-lg
          transform hover:scale-105 active:scale-95
          ${this.api.pressed
            ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 ring-2 ring-blue-300'
            : 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700'
          }
          ${this.api.disabled
            ? 'opacity-50 cursor-not-allowed transform-none'
            : 'cursor-pointer'
          }
        "
      >
        <slot></slot>
      </button>
    `;
  }
}
