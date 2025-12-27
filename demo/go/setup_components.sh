#!/bin/bash

# Web ComponentsをGoのstaticディレクトリにバンドルするスクリプト

set -e

# demo/goディレクトリに移動
cd "$(dirname "$0")"

echo "Setting up Web Components for Go..."

# staticディレクトリを作成
mkdir -p static/components

# Go専用のバンドルを作成（すべての依存関係を含める）
echo "Building bundled components with all dependencies..."

# 絶対パスで設定ファイルを指定
pnpm vite build --config "$(pwd)/bundle-components.config.ts"

echo ""
echo "✅ Setup complete! Web Components are now available in static/components/"
echo ""
echo "Generated files:"
ls -lh static/components/
echo ""
echo "You can now run 'go run main.go' in the demo/go directory"
