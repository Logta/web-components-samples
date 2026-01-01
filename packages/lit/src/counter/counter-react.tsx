import React from 'react';
import { createComponent } from '@lit/react';
import { LitCounter } from './counter.js';

// @lit/reactを使ってLitコンポーネントをReactコンポーネントに変換
export const Counter = createComponent({
  tagName: 'lit-counter',
  elementClass: LitCounter,
  react: React,
  events: {
    // 必要に応じてイベントハンドリングを追加
  },
});

// TypeScript用のprops型定義
export interface CounterProps {
  count?: number;
  className?: string;
  style?: React.CSSProperties;
}