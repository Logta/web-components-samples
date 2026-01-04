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

/**
 * ToggleボタンのDOM属性とイベントハンドラー
 */
interface ToggleRootProps {
  type: 'button';
  role: 'button';
  'aria-pressed': boolean;
  disabled: boolean;
  onClick: () => void;
}

/**
 * Toggle API
 */
interface ToggleApi {
  /** トグルが押された状態かどうか */
  readonly pressed: boolean;
  /** トグルが無効化されているかどうか */
  readonly disabled: boolean;
  /** ルート要素（ボタン）のpropsを取得 */
  getRootProps: () => ToggleRootProps;
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
    const getCurrentPressed = (): boolean => {
      const value = service.context.get<boolean>('pressed');
      return typeof value === 'boolean' ? value : this.pressed;
    };
    const getCurrentDisabled = (): boolean => {
      const value = service.context.get<boolean>('disabled');
      return typeof value === 'boolean' ? value : this.disabled;
    };
    const getOnPressedChange = (): ((pressed: boolean) => void) | undefined => {
      return service.context.get<(pressed: boolean) => void>('onPressedChange');
    };

    return {
      get pressed(): boolean {
        return getCurrentPressed();
      },
      get disabled(): boolean {
        return getCurrentDisabled();
      },
      getRootProps: (): ToggleRootProps => ({
        type: 'button' as const,
        role: 'button' as const,
        'aria-pressed': getCurrentPressed(),
        disabled: getCurrentDisabled(),
        onClick: (): void => {
          const currentDisabled = getCurrentDisabled();
          const currentPressed = getCurrentPressed();
          const onPressedChange = getOnPressedChange();
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
