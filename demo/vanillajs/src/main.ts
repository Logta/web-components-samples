// Web Componentsをインポート
import '@web-components-samples/vanilla';
import '@web-components-samples/react';
import '@web-components-samples/lit';

console.log('Web Components loaded in Vanilla JS environment');

// 動的にカウンターを追加する機能
const addCounterBtn = document.getElementById('add-counter-btn');
const dynamicContainer = document.getElementById('dynamic-container');

if (addCounterBtn && dynamicContainer) {
  let counterCount = 0;

  addCounterBtn.addEventListener('click', () => {
    counterCount++;

    // ランダムにカウンタータイプを選択
    const counterTypes = ['my-counter', 'react-counter', 'lit-counter'];
    const randomType = counterTypes[Math.floor(Math.random() * counterTypes.length)];

    const counter = document.createElement(randomType);
    counter.setAttribute('count', '0');

    const wrapper = document.createElement('div');
    wrapper.className = 'dynamic-counter';
    wrapper.innerHTML = `<p><strong>カウンター #${counterCount}</strong> (${randomType})</p>`;
    wrapper.appendChild(counter);

    dynamicContainer.appendChild(wrapper);
  });
}
