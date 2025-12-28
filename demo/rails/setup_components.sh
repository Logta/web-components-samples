#!/bin/bash

# Web ComponentsをRailsのpublicディレクトリにコピーするスクリプト

set -e

# demo/railsディレクトリに移動
cd "$(dirname "$0")"

echo "Setting up Web Components for Rails..."

# publicディレクトリを作成
mkdir -p public/components

# ビルド済みファイルをコピー
echo "Copying bundled components..."

# 各コンポーネントをコピー
cp ../../packages/vanilla/dist/index.js public/components/vanilla.js
cp ../../packages/react/dist/bundle/react-counter.js public/components/react.js
cp ../../packages/react/dist/bundle/react-counter.css public/components/web-components-samples.css 2>/dev/null || true
cp ../../packages/lit/dist/bundle/lit-counter.js public/components/lit.js
cp ../../packages/preact/dist/index.js public/components/preact.js
cp ../../packages/preact/dist/index.css public/components/preact.css 2>/dev/null || true
cp ../../packages/svelte/dist/bundle/svelte-counter.js public/components/svelte.js

echo ""
echo "✅ Setup complete! Web Components are now available in public/components/"
echo ""
echo "Generated files:"
ls -lh public/components/
echo ""
echo "You can now run 'bundle install && rails server' in the demo/rails directory"
