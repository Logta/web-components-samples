/// <reference types="vite/client" />

declare module '*.css?inline' {
  const content: string;
  export default content;
}

// @lit/react関連の型定義
declare module "*.js" {
  const content: any;
  export default content;
}

// React用のJSX型定義
declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      'lit-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
      'lit-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 
          label?: string;
          variant?: 'primary' | 'secondary' | 'success' | 'danger';
          size?: 'small' | 'medium' | 'large';
          disabled?: boolean;
        },
        HTMLElement
      >;
      'lit-dropdown': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 
          options?: string;
          selected?: string;
          placeholder?: string;
          disabled?: boolean;
        },
        HTMLElement
      >;
      'lit-modal': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 
          open?: boolean;
        },
        HTMLElement
      >;
    }
  }
}
