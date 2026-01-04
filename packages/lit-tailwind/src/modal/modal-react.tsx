import React from 'react';
import { createComponent } from '@lit/react';
import { LitTailwindModal } from './modal';

export interface TailwindModalProps {
  open?: boolean;
  onModalClose?: (event: CustomEvent) => void;
  children?: React.ReactNode;
}

export const TailwindModal = createComponent({
  tagName: 'lit-tailwind-modal',
  elementClass: LitTailwindModal,
  react: React,
  events: {
    onModalClose: 'modal-close'
  }
});
