import React from 'react';
import { createComponent } from '@lit/react';
import { LitTailwindToggle } from './toggle';

export interface TailwindToggleProps {
  disabled?: boolean;
  pressed?: boolean;
  onPressedChange?: (event: CustomEvent<{ pressed: boolean }>) => void;
  children?: React.ReactNode;
}

export const TailwindToggle = createComponent({
  tagName: 'lit-tailwind-toggle',
  elementClass: LitTailwindToggle,
  react: React,
  events: {
    onPressedChange: 'pressed-change'
  }
});
