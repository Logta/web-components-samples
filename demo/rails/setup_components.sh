#!/bin/bash

# Web ComponentsをRailsのpublicディレクトリにバンドルするスクリプト

set -e

# demo/railsディレクトリに移動
cd "$(dirname "$0")"

echo "Setting up Web Components for Rails..."

# publicディレクトリを作成
mkdir -p public/components

# Rails専用のバンドルを作成（すべての依存関係を含める）
echo "Building bundled components with all dependencies..."

# 絶対パスで設定ファイルを指定
pnpm vite build --config "$(pwd)/bundle-components.config.ts"

echo ""
echo "✅ Setup complete! Web Components are now available in public/components/"
echo ""
echo "Generated files:"
ls -lh public/components/
echo ""
echo "You can now run 'bundle install && rails server' in the demo/rails directory"
