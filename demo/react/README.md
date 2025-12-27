# React Demo

このディレクトリには、React環境でWeb Componentsを使用するデモが含まれています。

## セットアップ

```bash
# プロジェクトルートから実行
pnpm install

# Reactデモを起動
cd demo/react
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

- すべてのWeb ComponentsがReact環境でシームレスに動作
- TypeScript型定義により、IDEでの補完サポート
- Viteによる高速な開発体験
