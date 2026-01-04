import { useEffect, useState } from 'react';
import './App.css';

// Lit React コンポーネントをインポート
import { Counter, Button, Dropdown, Modal } from '@web-components-samples/lit';

// Lit Tailwind React コンポーネントをインポート
import {
  TailwindCounter,
  TailwindButton,
  TailwindDropdown,
  TailwindModal,
  TailwindToggle
} from '@web-components-samples/lit-tailwind/react';

// Web Componentsをインポート（従来のサンプル用）
import '@web-components-samples/vanilla';
import '@web-components-samples/react';
import '@web-components-samples/preact';
import '@web-components-samples/svelte';
import '@web-components-samples/lit-tailwind/wc';

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTailwindModalOpen, setIsTailwindModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [tailwindSelectedValue, setTailwindSelectedValue] = useState('');
  const [togglePressed, setTogglePressed] = useState(false);

  useEffect(() => {
    console.log('React Components with @lit/react loaded');
  }, []);

  const dropdownOptions = [
    { label: 'React', value: 'react' },
    { label: 'Lit', value: 'lit' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
  ];

  const handleButtonClick = (variant: string) => {
    alert(`${variant} button clicked!`);
  };

  const handleDropdownChange = (event: CustomEvent<{ value: string; option: any }>) => {
    setSelectedValue(event.detail.value);
    console.log('Selected:', event.detail);
  };

  const handleTailwindDropdownChange = (event: CustomEvent<{ value: string; option: any }>) => {
    setTailwindSelectedValue(event.detail.value);
    console.log('Tailwind Selected:', event.detail);
  };

  return (
    <div className="app">
      <h1>React + Lit Components Demo</h1>
      <p>このデモでは、@lit/reactを使用してLitコンポーネントをReactコンポーネントとして使用しています。</p>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Lit Components (@lit/react)</h2>

        <h3>カウンター</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <Counter count={count} />
          <button onClick={() => setCount(count + 1)}>React Increment</button>
          <button onClick={() => setCount(count - 1)}>React Decrement</button>
        </div>

        <h3>ボタン</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Button label="Primary" variant="primary" onButtonClick={() => handleButtonClick('Primary')} />
          <Button label="Secondary" variant="secondary" onButtonClick={() => handleButtonClick('Secondary')} />
          <Button label="Success" variant="success" onButtonClick={() => handleButtonClick('Success')} />
          <Button label="Danger" variant="danger" onButtonClick={() => handleButtonClick('Danger')} />
        </div>

        <h3>ドロップダウン</h3>
        <div style={{ marginBottom: '1rem' }}>
          <Dropdown
            options={JSON.stringify(dropdownOptions)}
            placeholder="Select a framework"
            selected={selectedValue}
            onChange={handleDropdownChange}
          />
          <p>Selected: {selectedValue || 'None'}</p>
        </div>

        <h3>モーダル</h3>
        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => setIsModalOpen(true)}>Open Lit Modal</button>
          <Modal
            open={isModalOpen}
            onModalClose={() => setIsModalOpen(false)}
          />
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Lit Tailwind Components (@lit/react + Zag.js)</h2>

        <h3>カウンター</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <TailwindCounter count={count} />
          <button onClick={() => setCount(count + 1)}>React Increment</button>
          <button onClick={() => setCount(count - 1)}>React Decrement</button>
        </div>

        <h3>ボタン</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <TailwindButton label="Primary" variant="primary" onButtonClick={() => handleButtonClick('Tailwind Primary')} />
          <TailwindButton label="Secondary" variant="secondary" onButtonClick={() => handleButtonClick('Tailwind Secondary')} />
          <TailwindButton label="Success" variant="success" onButtonClick={() => handleButtonClick('Tailwind Success')} />
          <TailwindButton label="Danger" variant="danger" onButtonClick={() => handleButtonClick('Tailwind Danger')} />
        </div>

        <h3>トグル</h3>
        <div style={{ marginBottom: '1rem' }}>
          <TailwindToggle
            pressed={togglePressed}
            onPressedChange={(e: CustomEvent<{ pressed: boolean }>) => setTogglePressed(e.detail.pressed)}
          />
          <p>Toggle State: {togglePressed ? 'ON' : 'OFF'}</p>
        </div>

        <h3>ドロップダウン</h3>
        <div style={{ marginBottom: '1rem' }}>
          <TailwindDropdown
            options={dropdownOptions}
            placeholder="Select a framework"
            selected={tailwindSelectedValue}
            onChange={handleTailwindDropdownChange}
          />
          <p>Selected: {tailwindSelectedValue || 'None'}</p>
        </div>

        <h3>モーダル</h3>
        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => setIsTailwindModalOpen(true)}>Open Tailwind Modal</button>
          <TailwindModal
            open={isTailwindModalOpen}
            onModalClose={() => setIsTailwindModalOpen(false)}
          />
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>従来のWeb Components（比較用）</h2>

        <h3>Counter Components</h3>
        <div className="counters-grid">
          <my-counter count={0}></my-counter>
          <react-counter count={0}></react-counter>
          <preact-counter count={0}></preact-counter>
          <svelte-counter count={0}></svelte-counter>
          <lit-tailwind-counter count={0}></lit-tailwind-counter>
        </div>

        <h3>Button Components</h3>
        <div className="buttons-grid">
          <vanilla-button label="Vanilla Button"></vanilla-button>
          <react-button label="React Button"></react-button>
          <preact-button label="Preact Button"></preact-button>
          <svelte-button label="Svelte Button"></svelte-button>
          <lit-tailwind-button label="Tailwind Button"></lit-tailwind-button>
        </div>

        <h3>Toggle Components</h3>
        <div className="buttons-grid">
          <lit-tailwind-toggle></lit-tailwind-toggle>
        </div>

        <h3>Dropdown Components</h3>
        <div className="dropdowns-grid">
          <vanilla-dropdown
            options='[{"label": "Option 1", "value": "1"}, {"label": "Option 2", "value": "2"}, {"label": "Option 3", "value": "3"}]'
            placeholder="Vanilla Dropdown"
          ></vanilla-dropdown>
          <react-dropdown
            options='[{"label": "React", "value": "react"}, {"label": "Svelte", "value": "svelte"}, {"label": "Vue", "value": "vue"}]'
            placeholder="React Dropdown"
          ></react-dropdown>
          <preact-dropdown
            options='[{"label": "Preact", "value": "preact"}, {"label": "React", "value": "react"}, {"label": "Inferno", "value": "inferno"}]'
            placeholder="Preact Dropdown"
          ></preact-dropdown>
          <svelte-dropdown
            options='[{"label": "Svelte", "value": "svelte"}, {"label": "SolidJS", "value": "solid"}, {"label": "Qwik", "value": "qwik"}]'
            placeholder="Svelte Dropdown"
          ></svelte-dropdown>
        </div>

        <h3>Modal Components</h3>
        <div className="buttons-grid">
          <lit-tailwind-modal></lit-tailwind-modal>
        </div>
      </section>

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
        <h4>React コンポーネント (@lit/react)</h4>
        <ul>
          <li><strong>完全なTypeScript型サポート</strong>: IntelliSenseと型チェックが利用可能</li>
          <li><strong>Reactライフサイクル統合</strong>: propsの変更が自動的に反映</li>
          <li><strong>イベントハンドリング</strong>: React標準のイベントハンドラーとして使用可能</li>
          <li><strong>状態管理連携</strong>: React Stateと自然に連携</li>
        </ul>
        
        <h4>従来のWeb Components</h4>
        <ul>
          <li><strong>直接のDOM操作</strong>: HTML属性として値を設定</li>
          <li><strong>カスタムイベント</strong>: addEventListener で対応</li>
          <li><strong>フレームワーク非依存</strong>: どの環境でも動作</li>
        </ul>

        <p>
          <strong>iframe-serverを起動する:</strong> プロジェクトルートで <code>mise iframe-server</code> を実行してください。
        </p>
      </div>
    </div>
  );
}

export default App;
