import { useState } from 'react';
import { createRoot, Root } from 'react-dom/client';
import styles from './react-counter.module.css';

interface CounterComponentProps {
  initialCount?: number;
}

function CounterComponent({ initialCount = 0 }: CounterComponentProps) {
  const [count, setCount] = useState(initialCount);

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

class ReactCounter extends HTMLElement {
  private _root: Root | null = null;

  connectedCallback(): void {
    const mountPoint = document.createElement('div');
    this.appendChild(mountPoint);

    const initialCount = parseInt(this.getAttribute('count') || '0', 10) || 0;
    this._root = createRoot(mountPoint);
    this._root.render(<CounterComponent initialCount={initialCount} />);
  }

  disconnectedCallback(): void {
    if (this._root) {
      this._root.unmount();
    }
  }

  static get observedAttributes(): string[] {
    return ['count'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null): void {
    if (name === 'count' && this._root) {
      const count = parseInt(newValue || '0', 10) || 0;
      this._root.render(<CounterComponent initialCount={count} />);
    }
  }
}

customElements.define('react-counter', ReactCounter);

export default ReactCounter;
