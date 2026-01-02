# トラブルシューティング: Reactの複数インスタンスエラー

## 問題の概要

React Demoで以下のエラーが発生する：

```
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

Uncaught TypeError: can't access property "useRef", t is null
```

## 発生状況

- **環境**: React Demo (port 3000)
- **タイミング**: `@web-components-samples/lit`パッケージをインポートした際
- **原因**: Reactの複数バージョンが共存している

## 根本原因

### 依存関係の衝突

`@web-components-samples/lit`パッケージは`@lit/react`を使用しており、React 18に依存しています。一方、`demo/react`はReact 19を使用しています。

```
demo/react
├── react@19.2.3 ← Demo自体が使用
└── @web-components-samples/lit
    └── @lit/react
        └── react@18.2.0 ← 古いバージョンが含まれる
```

### なぜ問題が発生するのか

Reactは、同じアプリケーション内で複数のインスタンスが存在することを許可していません。Reactのフックシステムは、グローバルな状態を使用しており、複数のReactインスタンスが存在すると、フックの呼び出しが正しく動作しなくなります。

特に、以下のような状況で問題が発生します：

1. **Viteの依存関係解決**: Viteは各パッケージの`node_modules`を独立して解決しようとする
2. **異なるバージョン**: React 18とReact 19が共存する
3. **フックの混在**: Web Component内でフックを使用すると、異なるReactインスタンスのフックが呼び出される

## 解決策

### 採用した解決策: React Demo を React 18 にダウングレード

`@lit/react`は現在React 18をメインサポートしているため、React Demoも React 18を使用することで依存関係の衝突を回避します。

#### 1. React Demoの依存関係を更新

`demo/react/package.json`を React 18にダウングレード：

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5"
  }
}
```

#### 2. Litパッケージの依存関係を確認

`packages/lit/package.json`でReact 18を使用：

```json
{
  "devDependencies": {
    "react": "^18.2.0",
    "@types/react": "^18.2.0"
  },
  "peerDependencies": {
    "react": "^18.0.0"
  }
}
```

#### 3. Vite設定で依存関係を統合

`demo/react/vite.config.ts`に`dedupe`設定を追加：

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    // Ensure only one instance of React and React DOM is used
    dedupe: ['react', 'react-dom'],
  },
});
```

**`dedupe`の役割**:
- Reactの複数インスタンスを検出し、単一のインスタンスに統合する
- pnpmのワークスペース環境で特に重要

#### 4. 依存関係の再インストール

```bash
# ルートディレクトリで実行
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Viteキャッシュをクリア
rm -rf demo/react/node_modules/.vite
```

#### 5. 開発サーバーを起動

```bash
cd demo/react
pnpm dev
```

## 検証方法

### 1. ブラウザコンソールでエラーが消えたか確認

以下のエラーが表示されなければ成功：

- ✅ "Invalid hook call" 警告が消える
- ✅ "can't access property 'useRef'" エラーが消える

### 2. Reactのインスタンス数を確認

ブラウザの開発者ツールで以下を実行：

```javascript
// Reactのバージョンを確認
console.log(React.version);

// 複数のReactインスタンスがないか確認
// （この方法は完全ではないが、目安になる）
```

### 3. Lit Reactコンポーネントが動作するか確認

Lit + Reactラッパーのコンポーネントが正しく表示されることを確認。

## 追加の設定（オプション）

### pnpmの設定でReactを強制的に統合

`package.json`（ルート）に以下を追加することで、pnpmレベルでReactを統合できます：

```json
{
  "pnpm": {
    "overrides": {
      "react": "^19.2.3",
      "react-dom": "^19.2.3"
    }
  }
}
```

**注意**: この設定は、すべてのパッケージで同じReactバージョンを強制します。パッケージによってはReact 19との互換性がない場合があるため、慎重に使用してください。

## まとめ

| 問題 | 原因 | 解決策 |
|------|------|--------|
| Invalid hook call | Reactの複数インスタンスが共存 | Vite設定で`dedupe`を追加 |
| バージョン不一致 | React 18と19が混在 | Litパッケージの依存を19に更新 |
| 開発時のエラー | Viteキャッシュが古い | キャッシュをクリアして再起動 |

## 関連ドキュメント

- [React公式: Invalid Hook Call](https://reactjs.org/link/invalid-hook-call)
- [Vite公式: 依存関係の事前バンドル](https://vitejs.dev/guide/dep-pre-bundling.html)
- [pnpm: ピア依存関係](https://pnpm.io/how-peers-are-resolved)

## 今後の予防策

1. **バージョンの統一**: ワークスペース内でReactのバージョンを統一する
2. **peerDependenciesの適切な設定**: 互換性のある範囲を明示する
3. **Vite設定のテンプレート化**: 新しいデモ環境でも同じ設定を適用する
4. **定期的な依存関係の更新**: `pnpm update`で最新バージョンを維持する

---

**最終更新**: 2026-01-02
**対象環境**: React Demo, Lit Package
**影響範囲**: React 18 → React 19への移行時
