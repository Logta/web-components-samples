import React, { useEffect, useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import styles from './react-counter.module.css';
import cssText from './react-counter.module.css?inline';

interface CounterComponentProps {
  count?: number;
}

function CounterComponent({ count: initialCount = 0 }: CounterComponentProps) {
  const [count, setCount] = useState(initialCount);

  // count propが変更されたら状態を更新
  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  // CSSをグローバルに注入（一度だけ）
  useEffect(() => {
    const styleId = 'react-counter-styles';
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = cssText;
      document.head.appendChild(styleElement);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <div className={styles.label}>React Counter:</div>
        <button type="button" className={styles.button} onClick={() => setCount(count - 1)}>
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button type="button" className={styles.button} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

// react-to-webcomponentを使ってWeb Componentを作成
const ReactCounterElement = reactToWebComponent(CounterComponent, React, ReactDOMClient);

// Web Componentとして定義
if (!customElements.get('react-counter')) {
  customElements.define('react-counter', ReactCounterElement);
}

export default CounterComponent;
export { ReactCounterElement };
