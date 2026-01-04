import React from 'react';
import { createComponent } from '@lit/react';
import { LitTailwindButton } from './button';

export interface TailwindButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onButtonClick?: (event: CustomEvent) => void;
}

export const TailwindButton = createComponent({
  tagName: 'lit-tailwind-button',
  elementClass: LitTailwindButton,
  react: React,
  events: {
    onButtonClick: 'button-click'
  }
});
