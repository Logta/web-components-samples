import { useEffect } from 'react';
import './App.css';

// Web Componentsをインポート
import '@web-components-samples/vanilla';
import '@web-components-samples/react';
import '@web-components-samples/lit';

function App() {
  useEffect(() => {
    console.log('Web Components loaded in React environment');
  }, []);

  return (
    <div className="app">
      <h1>Web Components in React Demo</h1>
      <p>このデモでは、React環境で3つの異なるWeb Componentsを使用しています。</p>

      <div className="counters-grid">
        <my-counter count={0}></my-counter>
        <react-counter count={0}></react-counter>
        <lit-counter count={0}></lit-counter>
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
