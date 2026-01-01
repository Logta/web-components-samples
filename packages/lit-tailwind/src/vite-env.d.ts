/// <reference types="vite/client" />

// ?inline importの型定義
declare module "*.css?inline" {
  const content: string;
  export default content;
}