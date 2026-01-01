/// <reference types="vite/client" />

// ?inline importの型定義
declare module "*.css?inline" {
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
      'lit-tailwind-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { count?: number },
        HTMLElement
      >;
    }
  }
}