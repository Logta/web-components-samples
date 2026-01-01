import React from 'react';
import { createComponent } from '@lit/react';
import { LitModal } from './modal.js';

// @lit/reactを使ってLitコンポーネントをReactコンポーネントに変換
export const Modal = createComponent({
  tagName: 'lit-modal',
  elementClass: LitModal,
  react: React,
  events: {
    onModalClose: 'modal-close',
  },
});

// TypeScript用のprops型定義
export interface ModalProps {
  open?: boolean;
  onModalClose?: (event: CustomEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}