import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';

const app = new Hono();

// 静的ファイルの配信（Web Componentsのビルド済みファイル）
app.use('/components/*', serveStatic({ root: './public' }));

// ルートページ
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iframe Test Server</title>
    <style>
        :root {
            font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            font-weight: 400;
            color-scheme: light dark;
            color: rgba(255, 255, 255, 0.87);
            background-color: #242424;
        }
        body {
            margin: 0;
            padding: 2rem;
            min-height: 100vh;
        }
        h1 {
            color: #9b59b6;
        }
        .links {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 600px;
        }
        a {
            padding: 1rem;
            background: rgba(155, 89, 182, 0.1);
            border: 1px solid rgba(155, 89, 182, 0.3);
            border-radius: 8px;
            color: #9b59b6;
            text-decoration: none;
            transition: all 0.2s;
        }
        a:hover {
            background: rgba(155, 89, 182, 0.2);
            border-color: rgba(155, 89, 182, 0.5);
        }
    </style>
</head>
<body>
    <h1>iframe Test Server</h1>
    <p>このサーバーはiframe内で表示するWeb Componentsのテスト用です。</p>

    <div class="links">
        <a href="/counter">Counter Components</a>
        <a href="/modal">Modal Components</a>
        <a href="/button">Button Components</a>
        <a href="/dropdown">Dropdown Components</a>
        <a href="/all">All Components</a>
    </div>
</body>
</html>`);
});

// カウンターコンポーネントページ
app.get('/counter', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter Components - iframe</title>
    <link rel="stylesheet" href="/components/web-components-samples.css">
    <style>
        :root {
            font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            color-scheme: light dark;
            color: rgba(255, 255, 255, 0.87);
            background-color: #242424;
        }
        body {
            margin: 0;
            padding: 1rem;
        }
        h2 {
            color: #9b59b6;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        .counters-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
    </style>
</head>
<body>
    <h2>Counter Components</h2>
    <div class="counters-grid">
        <my-counter count="0"></my-counter>
        <react-counter count="0"></react-counter>
        <lit-counter count="0"></lit-counter>
        <preact-counter count="0"></preact-counter>
        <svelte-counter count="0"></svelte-counter>
    </div>

    <script type="module" src="/components/vanilla.js"></script>
    <script type="module" src="/components/react.js"></script>
    <script type="module" src="/components/lit.js"></script>
    <script type="module" src="/components/preact.js"></script>
    <script type="module" src="/components/svelte.js"></script>
</body>
</html>`);
});

// モーダルコンポーネントページ
app.get('/modal', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modal Components - iframe</title>
    <link rel="stylesheet" href="/components/web-components-samples.css">
    <style>
        :root {
            font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            color-scheme: light dark;
            color: rgba(255, 255, 255, 0.87);
            background-color: #242424;
        }
        body {
            margin: 0;
            padding: 1rem;
        }
        h2 {
            color: #9b59b6;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        .modals-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
    </style>
</head>
<body>
    <h2>Modal Components</h2>
    <div class="modals-grid">
        <vanilla-modal></vanilla-modal>
        <react-modal></react-modal>
        <lit-modal></lit-modal>
        <preact-modal></preact-modal>
        <svelte-modal></svelte-modal>
    </div>

    <script type="module" src="/components/vanilla.js"></script>
    <script type="module" src="/components/react.js"></script>
    <script type="module" src="/components/lit.js"></script>
    <script type="module" src="/components/preact.js"></script>
    <script type="module" src="/components/svelte.js"></script>
</body>
</html>`);
});

// ボタンコンポーネントページ
app.get('/button', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Components - iframe</title>
    <link rel="stylesheet" href="/components/web-components-samples.css">
    <style>
        :root {
            font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            color-scheme: light dark;
            color: rgba(255, 255, 255, 0.87);
            background-color: #242424;
        }
        body {
            margin: 0;
            padding: 1rem;
        }
        h2 {
            color: #9b59b6;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        .buttons-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
    </style>
</head>
<body>
    <h2>Button Components</h2>
    <div class="buttons-grid">
        <vanilla-button label="Vanilla"></vanilla-button>
        <react-button label="React"></react-button>
        <lit-button label="Lit"></lit-button>
        <preact-button label="Preact"></preact-button>
        <svelte-button label="Svelte"></svelte-button>
    </div>

    <script type="module" src="/components/vanilla.js"></script>
    <script type="module" src="/components/react.js"></script>
    <script type="module" src="/components/lit.js"></script>
    <script type="module" src="/components/preact.js"></script>
    <script type="module" src="/components/svelte.js"></script>
</body>
</html>`);
});

// ドロップダウンコンポーネントページ
app.get('/dropdown', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Components - iframe</title>
    <link rel="stylesheet" href="/components/web-components-samples.css">
    <style>
        :root {
            font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            color-scheme: light dark;
            color: rgba(255, 255, 255, 0.87);
            background-color: #242424;
        }
        body {
            margin: 0;
            padding: 1rem;
        }
        h2 {
            color: #9b59b6;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        .dropdowns-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
    </style>
</head>
<body>
    <h2>Dropdown Components</h2>
    <div class="dropdowns-grid">
        <vanilla-dropdown
            options='[{"label": "Option 1", "value": "1"}, {"label": "Option 2", "value": "2"}]'
            placeholder="Vanilla"
        ></vanilla-dropdown>
        <react-dropdown
            options='[{"label": "React", "value": "react"}, {"label": "Vue", "value": "vue"}]'
            placeholder="React"
        ></react-dropdown>
        <lit-dropdown
            options='[{"label": "Lit", "value": "lit"}, {"label": "Fast", "value": "fast"}]'
            placeholder="Lit"
        ></lit-dropdown>
        <preact-dropdown
            options='[{"label": "Preact", "value": "preact"}, {"label": "Inferno", "value": "inferno"}]'
            placeholder="Preact"
        ></preact-dropdown>
        <svelte-dropdown
            options='[{"label": "Svelte", "value": "svelte"}, {"label": "Solid", "value": "solid"}]'
            placeholder="Svelte"
        ></svelte-dropdown>
    </div>

    <script type="module" src="/components/vanilla.js"></script>
    <script type="module" src="/components/react.js"></script>
    <script type="module" src="/components/lit.js"></script>
    <script type="module" src="/components/preact.js"></script>
    <script type="module" src="/components/svelte.js"></script>
</body>
</html>`);
});

// 全コンポーネントページ
app.get('/all', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Components - iframe</title>
    <link rel="stylesheet" href="/components/web-components-samples.css">
    <style>
        :root {
            font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            color-scheme: light dark;
            color: rgba(255, 255, 255, 0.87);
            background-color: #242424;
        }
        body {
            margin: 0;
            padding: 1rem;
        }
        h2 {
            color: #9b59b6;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            margin-top: 2rem;
        }
        h2:first-of-type {
            margin-top: 0;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }
    </style>
</head>
<body>
    <h2>Counter Components</h2>
    <div class="grid">
        <my-counter count="0"></my-counter>
        <react-counter count="0"></react-counter>
        <lit-counter count="0"></lit-counter>
        <preact-counter count="0"></preact-counter>
        <svelte-counter count="0"></svelte-counter>
    </div>

    <h2>Modal Components</h2>
    <div class="grid">
        <vanilla-modal></vanilla-modal>
        <react-modal></react-modal>
        <lit-modal></lit-modal>
        <preact-modal></preact-modal>
        <svelte-modal></svelte-modal>
    </div>

    <h2>Button Components</h2>
    <div class="grid">
        <vanilla-button label="Vanilla"></vanilla-button>
        <react-button label="React"></react-button>
        <lit-button label="Lit"></lit-button>
        <preact-button label="Preact"></preact-button>
        <svelte-button label="Svelte"></svelte-button>
    </div>

    <h2>Dropdown Components</h2>
    <div class="grid">
        <vanilla-dropdown
            options='[{"label": "Option 1", "value": "1"}, {"label": "Option 2", "value": "2"}]'
            placeholder="Vanilla"
        ></vanilla-dropdown>
        <react-dropdown
            options='[{"label": "React", "value": "react"}, {"label": "Vue", "value": "vue"}]'
            placeholder="React"
        ></react-dropdown>
        <lit-dropdown
            options='[{"label": "Lit", "value": "lit"}, {"label": "Fast", "value": "fast"}]'
            placeholder="Lit"
        ></lit-dropdown>
        <preact-dropdown
            options='[{"label": "Preact", "value": "preact"}, {"label": "Inferno", "value": "inferno"}]'
            placeholder="Preact"
        ></preact-dropdown>
        <svelte-dropdown
            options='[{"label": "Svelte", "value": "svelte"}, {"label": "Solid", "value": "solid"}]'
            placeholder="Svelte"
        ></svelte-dropdown>
    </div>

    <script type="module" src="/components/vanilla.js"></script>
    <script type="module" src="/components/react.js"></script>
    <script type="module" src="/components/lit.js"></script>
    <script type="module" src="/components/preact.js"></script>
    <script type="module" src="/components/svelte.js"></script>
</body>
</html>`);
});

const port = 4001;

console.log(`🚀 iframe Test Server starting on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
