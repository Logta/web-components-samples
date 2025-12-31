#!/bin/bash

# Web Componentsをiframe-serverのpublicディレクトリにコピーするスクリプト

set -e

# packages/iframe-serverディレクトリに移動
cd "$(dirname "$0")"

echo "Setting up Web Components for iframe-server..."

# publicディレクトリを作成
mkdir -p public/components

# ビルド済みファイルをコピー
echo "Copying bundled components..."

# 各コンポーネントをコピー
cp ../vanilla/dist/index.js public/components/vanilla.js
cp ../react/dist/bundle/index.js public/components/react.js
cp ../react/dist/bundle/index.css public/components/web-components-samples.css 2>/dev/null || true
cp ../lit/dist/bundle/index.js public/components/lit.js
cp ../preact/dist/index.js public/components/preact.js
cp ../preact/dist/index.css public/components/preact.css 2>/dev/null || true
cp ../svelte/dist/bundle/index.js public/components/svelte.js

echo ""
echo "✅ Setup complete! Web Components are now available in public/components/"
echo ""
echo "Generated files:"
ls -lh public/components/
echo ""
echo "You can now run 'pnpm dev' in the packages/iframe-server directory"
