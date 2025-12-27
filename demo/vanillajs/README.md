# Vanilla JS Demo

このディレクトリには、純粋なJavaScript環境でWeb Componentsを使用するデモが含まれています。

## セットアップ

```bash
# プロジェクトルートから実行
pnpm install

# Vanilla JSデモを起動
cd demo/vanillajs
pnpm dev
```

## デモ内容

このデモでは、以下の3つのWeb Componentsを使用しています:

1. **Vanilla JS Counter** (`my-counter`)
   - 純粋なJavaScriptで作成されたWeb Component

2. **React Counter** (`react-counter`)
   - ReactコンポーネントをWeb Componentとしてラップしたもの

3. **Lit Counter** (`lit-counter`)
   - Litフレームワークで作成されたWeb Component

## 特徴

- フレームワーク不要で動作
- 標準のWeb Components APIのみを使用
- JavaScriptで動的にコンポーネントを追加可能
- Viteによる高速な開発体験
