import { useEffect } from 'react';
import './App.css';

// Web Componentsをインポート
import '@web-components-samples/vanilla';
import '@web-components-samples/react';
import '@web-components-samples/lit';
import '@web-components-samples/preact';
import '@web-components-samples/svelte';

function App() {
  useEffect(() => {
    console.log('Web Components loaded in React environment');
  }, []);

  return (
    <div className="app">
      <h1>Web Components in React Demo</h1>
      <p>このデモでは、React環境で5つの異なるWeb Componentsを使用しています。</p>

      <div className="counters-grid">
        <my-counter count={0}></my-counter>
        <react-counter count={0}></react-counter>
        <lit-counter count={0}></lit-counter>
        <preact-counter count={0}></preact-counter>
        <svelte-counter count={0}></svelte-counter>
      </div>

      <h2>Modal Components</h2>
      <p>各フレームワークで実装されたモーダルコンポーネントのデモです。</p>

      <div className="modals-grid">
        <vanilla-modal></vanilla-modal>
        <react-modal></react-modal>
        <lit-modal></lit-modal>
        <preact-modal></preact-modal>
        <svelte-modal></svelte-modal>
      </div>

      <div className="info">
        <h3>使い方</h3>
        <p>各カウンターの + / - ボタンをクリックして、カウンターを操作できます。</p>
        <p>
          すべてのコンポーネントが標準のWeb Components
          APIを使用しているため、Reactアプリケーション内でシームレスに動作します。
        </p>
      </div>
    </div>
  );
}

export default App;
