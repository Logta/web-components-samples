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
    }
  }
}
