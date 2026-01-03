import { directive, Directive, ElementPart, PartInfo, PartType } from 'lit/directive.js';

/**
 * Spread Directive
 *
 * Zag.jsが生成するpropsオブジェクトをDOM要素に展開する。
 * - 属性: setAttribute で適用
 * - イベント: addEventListener で適用
 * - null/undefined: removeAttribute
 *
 * 使用例:
 * html`<button ${spread(api.triggerProps)}>Toggle</button>`
 */
class SpreadDirective extends Directive {
  private previousProps: Record<string, any> = {};
  private listeners: Map<string, EventListener> = new Map();

  constructor(partInfo: PartInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.ELEMENT) {
      throw new Error('spread() can only be used on elements');
    }
  }

  render(_props: Record<string, any>) {
    return '';
  }

  update(part: ElementPart, [props]: [Record<string, any>]) {
    const element = part.element;

    // 以前のプロパティで現在存在しないものを削除
    Object.keys(this.previousProps).forEach((key) => {
      if (!(key in props)) {
        if (key.startsWith('on') && typeof this.previousProps[key] === 'function') {
          const eventName = key.slice(2).toLowerCase();
          const listener = this.listeners.get(eventName);
          if (listener) {
            element.removeEventListener(eventName, listener);
            this.listeners.delete(eventName);
          }
        } else {
          element.removeAttribute(key);
        }
      }
    });

    Object.entries(props).forEach(([key, value]) => {
      // イベントハンドラー（onClick, onFocus など）
      if (key.startsWith('on') && typeof value === 'function') {
        const eventName = key.slice(2).toLowerCase();
        const previousListener = this.listeners.get(eventName);

        // 既存のリスナーを削除
        if (previousListener) {
          element.removeEventListener(eventName, previousListener);
        }

        // 新しいリスナーを追加
        element.addEventListener(eventName, value as EventListener);
        this.listeners.set(eventName, value as EventListener);
      }
      // null/undefined の場合は属性を削除
      else if (value == null) {
        element.removeAttribute(key);
      }
      // boolean属性
      else if (typeof value === 'boolean') {
        if (value) {
          element.setAttribute(key, '');
        } else {
          element.removeAttribute(key);
        }
      }
      // 通常の属性
      else {
        const currentValue = element.getAttribute(key);
        const newValue = String(value);
        if (currentValue !== newValue) {
          element.setAttribute(key, newValue);
        }
      }
    });

    this.previousProps = { ...props };
  }

  disconnected() {
    // クリーンアップ: すべてのイベントリスナーを削除
    this.listeners.clear();
  }
}

export const spread = directive(SpreadDirective);
