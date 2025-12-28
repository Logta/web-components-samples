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
      'react-dropdown': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { options?: string; selected?: string; placeholder?: string; disabled?: boolean; },
        HTMLElement
      >;
      'svelte-dropdown': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { options?: string; selected?: string; placeholder?: string; disabled?: boolean; },
        HTMLElement
      >;
    }
  }
}
