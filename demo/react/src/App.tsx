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

      <h2>Counter Components</h2>
      <div className="counters-grid">
        <my-counter count={0}></my-counter>
        <react-counter count={0}></react-counter>
        <lit-counter count={0}></lit-counter>
        <preact-counter count={0}></preact-counter>
        <svelte-counter count={0}></svelte-counter>
      </div>

      <h2>Modal Components</h2>
      <div className="modals-grid">
        <vanilla-modal></vanilla-modal>
        <react-modal></react-modal>
        <lit-modal></lit-modal>
        <preact-modal></preact-modal>
        <svelte-modal></svelte-modal>
      </div>

      <h2>Button Components</h2>
      <div className="buttons-grid">
        <vanilla-button label="Vanilla Button"></vanilla-button>
        <react-button label="React Button"></react-button>
        <lit-button label="Lit Button"></lit-button>
        <preact-button label="Preact Button"></preact-button>
        <svelte-button label="Svelte Button"></svelte-button>
      </div>

      <h2>Dropdown Components</h2>
      <div className="dropdowns-grid">
        <vanilla-dropdown
          options='[{"label": "Option 1", "value": "1"}, {"label": "Option 2", "value": "2"}, {"label": "Option 3", "value": "3"}]'
          placeholder="Vanilla Dropdown"
        ></vanilla-dropdown>
        <react-dropdown
          options='[{"label": "React", "value": "react"}, {"label": "Svelte", "value": "svelte"}, {"label": "Vue", "value": "vue"}]'
          placeholder="React Dropdown"
        ></react-dropdown>
        <lit-dropdown
          options='[{"label": "Lit", "value": "lit"}, {"label": "Fast", "value": "fast"}, {"label": "Stencil", "value": "stencil"}]'
          placeholder="Lit Dropdown"
        ></lit-dropdown>
        <preact-dropdown
          options='[{"label": "Preact", "value": "preact"}, {"label": "React", "value": "react"}, {"label": "Inferno", "value": "inferno"}]'
          placeholder="Preact Dropdown"
        ></preact-dropdown>
        <svelte-dropdown
          options='[{"label": "Svelte", "value": "svelte"}, {"label": "SolidJS", "value": "solid"}, {"label": "Qwik", "value": "qwik"}]'
          placeholder="Svelte Dropdown"
        ></svelte-dropdown>
      </div>

      <h2>iframe Test (Cross-Origin)</h2>
      <p>
        以下のiframeは別のポート（4001）で動作するiframe-serverからコンポーネントを読み込んでいます。
        <br />
        クロスオリジン環境でのWeb Componentsの動作を確認できます。
      </p>
      <div className="iframe-container">
        <iframe
          src="http://localhost:4001/all"
          width="100%"
          height="600"
          style={{ border: '2px solid rgba(155, 89, 182, 0.3)', borderRadius: '8px' }}
          title="iframe test - all components"
        />
      </div>

      <div className="info">
        <h3>使い方</h3>
        <p>各カウンターの + / - ボタンをクリックして、カウンターを操作できます。</p>
        <p>
          すべてのコンポーネントが標準のWeb Components
          APIを使用しているため、Reactアプリケーション内でシームレスに動作します。
        </p>
        <p>
          <strong>iframe-serverを起動する:</strong> プロジェクトルートで <code>mise iframe-server</code> を実行してください。
        </p>
      </div>
    </div>
  );
}

export default App;
