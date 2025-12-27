import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import styles from './react-counter.module.css';

interface CounterComponentProps {
  count?: number;
}

function CounterComponent({ count: initialCount = 0 }: CounterComponentProps) {
  const [count, setCount] = useState(initialCount);

  // count propが変更されたら状態を更新
  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <div className={styles.label}>React Counter:</div>
        <button
          className={styles.button}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button
          className={styles.button}
          onClick={() => setCount(count + 1)}
        >
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
