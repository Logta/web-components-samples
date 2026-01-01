import React from 'react';
import { createComponent } from '@lit/react';
import { LitTailwindCounter } from './counter.js';

// @lit/reactを使ってLitコンポーネントをReactコンポーネントに変換
export const TailwindCounter = createComponent({
  tagName: 'lit-tailwind-counter',
  elementClass: LitTailwindCounter,
  react: React,
  events: {
    // 必要に応じてイベントハンドリングを追加
  },
});

// TypeScript用のprops型定義
export interface TailwindCounterProps {
  count?: number;
  className?: string;
  style?: React.CSSProperties;
}