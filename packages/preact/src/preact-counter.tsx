import { useState, useEffect } from 'preact/hooks';
import register from 'preact-custom-element';
import styles from './preact-counter.module.css';
import cssText from './preact-counter.module.css?inline';

interface CounterProps {
  count?: number;
}

function PreactCounter({ count: initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  // count propが変更されたら状態を更新
  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  // CSSをグローバルに注入（一度だけ）
  useEffect(() => {
    const styleId = 'preact-counter-styles';
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
        <div className={styles.label}>Preact Counter:</div>
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

// preact-custom-elementを使ってWeb Componentを作成
register(PreactCounter, 'preact-counter', ['count'], { shadow: false });

export default PreactCounter;
