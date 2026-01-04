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
cp ../../packages/vanilla/dist/index.js static/components/vanilla.js
cp ../../packages/react/dist/bundle/index.js static/components/react.js
cp ../../packages/react/dist/bundle/index.css static/components/web-components-samples.css 2>/dev/null || true
cp ../../packages/lit/dist/bundle/index.js static/components/lit.js
cp ../../packages/lit-tailwind/dist/bundle/index.js static/components/lit-tailwind.js
cp ../../packages/preact/dist/index.js static/components/preact.js
cp ../../packages/preact/dist/index.css static/components/preact.css 2>/dev/null || true
cp ../../packages/svelte/dist/bundle/index.js static/components/svelte.js

echo ""
echo "✅ Setup complete! Web Components are now available in static/components/"
echo ""
echo "Generated files:"
ls -lh static/components/
echo ""
echo "You can now run 'go run main.go' in the demo/go directory"
