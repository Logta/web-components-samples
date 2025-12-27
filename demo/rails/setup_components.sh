#!/bin/bash

# Web ComponentsをRailsのpublicディレクトリにバンドルするスクリプト

set -e

echo "Setting up Web Components for Rails..."

# publicディレクトリを作成
mkdir -p public/components

# Rails専用のバンドルを作成（すべての依存関係を含める）
echo "Building bundled components with all dependencies..."

# Viteを使ってバンドル
pnpm vite build --config bundle-components.config.ts

echo ""
echo "✅ Setup complete! Web Components are now available in public/components/"
echo ""
echo "Generated files:"
ls -lh public/components/
echo ""
echo "You can now run 'bundle install && rails server' in the demo/rails directory"
