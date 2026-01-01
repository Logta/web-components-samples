import React from 'react';
import { createComponent } from '@lit/react';
import { LitButton } from './button.js';

// @lit/reactを使ってLitコンポーネントをReactコンポーネントに変換
export const Button = createComponent({
  tagName: 'lit-button',
  elementClass: LitButton,
  react: React,
  events: {
    onButtonClick: 'button-click',
  },
});

// TypeScript用のprops型定義
export interface ButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onButtonClick?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}