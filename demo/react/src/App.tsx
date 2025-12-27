import { useEffect } from 'react';
import './App.css';

// Web Componentsをインポート
import '@web-components-samples/vanilla';
import '@web-components-samples/react';
import '@web-components-samples/lit';

// TypeScript用の型定義を拡張
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-counter': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { count?: number }, HTMLElement>;
      'react-counter': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { count?: number }, HTMLElement>;
      'lit-counter': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { count?: number }, HTMLElement>;
    }
  }
}

function App() {
  useEffect(() => {
    console.log('Web Components loaded in React environment');
  }, []);

  return (
    <div className="app">
      <h1>Web Components in React Demo</h1>
      <p>このデモでは、React環境で3つの異なるWeb Componentsを使用しています。</p>

      <div className="demo-section">
        <h2>1. Vanilla JS Counter</h2>
        <p>純粋なJavaScriptで作成されたWeb Component</p>
        <my-counter count={5}></my-counter>
      </div>

      <div className="demo-section">
        <h2>2. React Counter (as Web Component)</h2>
        <p>Reactで作成されたコンポーネントをWeb Componentとしてラップ</p>
        <react-counter count={10}></react-counter>
      </div>

      <div className="demo-section">
        <h2>3. Lit Counter</h2>
        <p>Litフレームワークで作成されたWeb Component</p>
        <lit-counter count={3}></lit-counter>
      </div>

      <div className="info">
        <h3>使い方</h3>
        <p>各カウンターの + / - ボタンをクリックして、カウンターを操作できます。</p>
        <p>すべてのコンポーネントが標準のWeb Components APIを使用しているため、Reactアプリケーション内でシームレスに動作します。</p>
      </div>
    </div>
  );
}

export default App;
