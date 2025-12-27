#!/bin/bash

# Web ComponentsをRailsのpublicディレクトリにコピーするスクリプト

set -e

echo "Setting up Web Components for Rails..."

# publicディレクトリを作成
mkdir -p public/components

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

# Railsのpublicディレクトリにコピー
echo "Copying built files to Rails public directory..."

cd ../..
cp packages/vanilla/dist/*.js demo/rails/public/components/vanilla.js
cp packages/react/dist/*.js demo/rails/public/components/react.js
cp packages/lit/dist/*.js demo/rails/public/components/lit.js

echo "Setup complete! Web Components are now available in public/components/"
echo "You can now run 'rails server' in the demo/rails directory"
