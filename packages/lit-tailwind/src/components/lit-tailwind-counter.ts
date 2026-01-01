import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from './base-element';

@customElement('lit-tailwind-counter')
export class LitTailwindCounter extends TailwindElement {
  static styles = [
    ...super.styles,
    css`:host { display: block; }`
  ];

  @property({ type: Number })
  count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  render() {
    return html`
      <div class="p-8 bg-white border border-gray-200 rounded-2xl shadow-2xl max-w-sm mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold mb-3 text-gray-800">Lit + Tailwind Counter</h2>
          <p class="text-gray-600 text-sm bg-blue-50 border border-blue-200 rounded-full px-4 py-2 inline-block">
            Shadow DOM + Constructable Stylesheets
          </p>
        </div>
        
        <div class="flex items-center justify-center gap-6 bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <button
            type="button"
            @click=${this.decrement}
            class="w-14 h-14 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-xl flex items-center justify-center text-white text-3xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 border-2 border-red-300"
          >
            <span class="leading-none">−</span>
          </button>
          
          <div class="text-center px-4">
            <div class="text-4xl font-bold text-blue-600 mb-1 tabular-nums">${this.count}</div>
            <div class="text-xs text-gray-500 uppercase tracking-wider font-medium">current value</div>
          </div>
          
          <button
            type="button"
            @click=${this.increment}
            class="w-14 h-14 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-xl flex items-center justify-center text-white text-3xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 border-2 border-green-300"
          >
            <span class="leading-none">+</span>
          </button>
        </div>
        
        <div class="text-center">
          <div class="text-xs text-gray-600 bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-full px-4 py-2 inline-flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Powered by Tailwind CSS v4
          </div>
        </div>
      </div>
    `;
  }
}