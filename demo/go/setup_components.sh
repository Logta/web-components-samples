#!/bin/bash

# Web ComponentsをGoのstaticディレクトリにコピーするスクリプト

set -e

echo "Setting up Web Components for Go..."

# staticディレクトリを作成
mkdir -p static/components

# プロジェクトルートに移動
cd ../..

# 各パッケージをビルド
echo "Building packages..."

cd packages/vanilla
pnpm build
cd ../react
pnpm build
cd ../lit
pnpm build

# Goのstaticディレクトリにコピー
echo "Copying built files to Go static directory..."

cd ../..
cp packages/vanilla/dist/*.js demo/go/static/components/vanilla.js
cp packages/react/dist/*.js demo/go/static/components/react.js
cp packages/lit/dist/*.js demo/go/static/components/lit.js

echo "Setup complete! Web Components are now available in static/components/"
echo "You can now run 'go run main.go' in the demo/go directory"
