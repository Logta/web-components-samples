#!/bin/bash

# Web ComponentsをGoのstaticディレクトリにコピーするスクリプト

set -e

# demo/goディレクトリに移動
cd "$(dirname "$0")"

echo "Setting up Web Components for Go..."

# staticディレクトリを作成
mkdir -p static/components

# ビルド済みファイルをコピー
echo "Copying bundled components..."

# 各コンポーネントをコピー
cp ../../packages/vanilla/dist/my-counter.js static/components/vanilla.js
cp ../../packages/react/dist/bundle/react-counter.js static/components/react.js
cp ../../packages/react/dist/bundle/react-counter.css static/components/web-components-samples.css 2>/dev/null || true
cp ../../packages/lit/dist/bundle/lit-counter.js static/components/lit.js
cp ../../packages/preact/dist/preact-counter.js static/components/preact.js
cp ../../packages/svelte/dist/bundle/svelte-counter.js static/components/svelte.js

echo ""
echo "✅ Setup complete! Web Components are now available in static/components/"
echo ""
echo "Generated files:"
ls -lh static/components/
echo ""
echo "You can now run 'go run main.go' in the demo/go directory"
