/// <reference types="vite/client" />

declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      'my-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
      'react-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
      'lit-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
      'preact-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
      'svelte-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
      'vanilla-modal': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { isOpen?: boolean; title?: string; description?: string },
        HTMLElement
      >;
      'react-modal': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { isOpen?: boolean; title?: string; description?: string },
        HTMLElement
      >;
      'lit-modal': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { open?: boolean; title?: string; description?: string },
        HTMLElement
      >;
      'preact-modal': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { isOpen?: boolean; title?: string; description?: string },
        HTMLElement
      >;
      'svelte-modal': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { isOpen?: boolean; title?: string; description?: string },
        HTMLElement
      >;
      'vanilla-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { label?: string; variant?: string; size?: string; disabled?: boolean },
        HTMLElement
      >;
      'react-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { label?: string; variant?: string; size?: string; disabled?: boolean },
        HTMLElement
      >;
      'lit-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { label?: string; variant?: string; size?: string; disabled?: boolean },
        HTMLElement
      >;
      'preact-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { label?: string; variant?: string; size?: string; disabled?: boolean },
        HTMLElement
      >;
      'svelte-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { label?: string; variant?: string; size?: string; disabled?: boolean },
        HTMLElement
      >;
      'vanilla-dropdown': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { options?: string; selected?: string; placeholder?: string; disabled?: boolean },
        HTMLElement
      >;
      'react-dropdown': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { options?: string; selected?: string; placeholder?: string; disabled?: boolean },
        HTMLElement
      >;
      'lit-dropdown': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { options?: string; selected?: string; placeholder?: string; disabled?: boolean },
        HTMLElement
      >;
      'preact-dropdown': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { options?: string; selected?: string; placeholder?: string; disabled?: boolean },
        HTMLElement
      >;
      'svelte-dropdown': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { options?: string; selected?: string; placeholder?: string; disabled?: boolean },
        HTMLElement
      >;
      'lit-tailwind-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
      'lit-tailwind-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { label?: string; variant?: string; size?: string; disabled?: boolean },
        HTMLElement
      >;
      'lit-tailwind-toggle': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { pressed?: boolean; disabled?: boolean },
        HTMLElement
      >;
      'lit-tailwind-dropdown': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { options?: string; selected?: string; placeholder?: string; disabled?: boolean },
        HTMLElement
      >;
      'lit-tailwind-modal': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { open?: boolean },
        HTMLElement
      >;
    }
  }
}

// Lit パッケージの型宣言
declare module '@web-components-samples/lit' {
  import { LitElement } from 'lit';
  import React from 'react';

  export interface CounterProps {
    count?: number;
  }

  export interface ButtonProps {
    label?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onButtonClick?: (event: CustomEvent) => void;
  }

  export interface DropdownProps {
    options?: string;
    selected?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (event: CustomEvent<{ value: string; option: any }>) => void;
  }

  export interface ModalProps {
    open?: boolean;
    onModalClose?: (event: CustomEvent) => void;
  }

  export const Counter: React.ComponentType<CounterProps>;
  export const Button: React.ComponentType<ButtonProps>;
  export const Dropdown: React.ComponentType<DropdownProps>;
  export const Modal: React.ComponentType<ModalProps>;
}
