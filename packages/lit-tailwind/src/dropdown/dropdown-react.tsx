import React from 'react';
import { createComponent } from '@lit/react';
import { LitTailwindDropdown, type DropdownOption } from './dropdown';

export interface TailwindDropdownProps {
  options?: DropdownOption[];
  selected?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: CustomEvent<{ value: string; option: DropdownOption }>) => void;
}

export const TailwindDropdown = createComponent({
  tagName: 'lit-tailwind-dropdown',
  elementClass: LitTailwindDropdown,
  react: React,
  events: {
    onChange: 'change'
  }
});

export type { DropdownOption };
