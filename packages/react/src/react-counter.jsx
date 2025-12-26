import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function CounterComponent({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  const styles = {
    container: {
      display: 'block',
      padding: '20px',
      border: '2px solid #61dafb',
      borderRadius: '8px',
      margin: '10px 0',
      background: '#f0f9ff',
    },
    counter: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontSize: '18px',
    },
    button: {
      padding: '8px 16px',
      fontSize: '16px',
      border: '1px solid #61dafb',
      background: '#61dafb',
      color: '#000',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background 0.2s',
    },
    count: {
      fontWeight: 'bold',
      minWidth: '40px',
      textAlign: 'center',
      fontSize: '24px',
      color: '#333',
    },
    label: {
      color: '#666',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.counter}>
        <div style={styles.label}>React Counter:</div>
        <button
          style={styles.button}
          onClick={() => setCount(count - 1)}
          onMouseOver={(e) => (e.target.style.background = '#4fa8c5')}
          onMouseOut={(e) => (e.target.style.background = '#61dafb')}
        >
          -
        </button>
        <span style={styles.count}>{count}</span>
        <button
          style={styles.button}
          onClick={() => setCount(count + 1)}
          onMouseOver={(e) => (e.target.style.background = '#4fa8c5')}
          onMouseOut={(e) => (e.target.style.background = '#61dafb')}
        >
          +
        </button>
      </div>
    </div>
  );
}

class ReactCounter extends HTMLElement {
  constructor() {
    super();
    this._root = null;
  }

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.appendChild(mountPoint);

    const initialCount = parseInt(this.getAttribute('count'), 10) || 0;
    this._root = createRoot(mountPoint);
    this._root.render(<CounterComponent initialCount={initialCount} />);
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
    }
  }

  static get observedAttributes() {
    return ['count'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'count' && this._root) {
      const count = parseInt(newValue, 10) || 0;
      this._root.render(<CounterComponent initialCount={count} />);
    }
  }
}

customElements.define('react-counter', ReactCounter);

export default ReactCounter;
