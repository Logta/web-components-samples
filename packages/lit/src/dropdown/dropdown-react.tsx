import React from 'react';
import { createComponent } from '@lit/react';
import { LitDropdown } from './dropdown.js';

// @lit/reactを使ってLitコンポーネントをReactコンポーネントに変換
export const Dropdown = createComponent({
  tagName: 'lit-dropdown',
  elementClass: LitDropdown,
  react: React,
  events: {
    onChange: 'change',
  },
});

// TypeScript用の型定義
export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options?: DropdownOption[] | string; // 配列またはJSON文字列
  selected?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: CustomEvent<{ value: string; option: DropdownOption }>) => void;
  className?: string;
  style?: React.CSSProperties;
}

// React用のヘルパー型
export interface DropdownPropsTyped extends Omit<DropdownProps, 'options'> {
  options: DropdownOption[];
}