# Web Components Samples - ドキュメント

このディレクトリには、プロジェクトの技術的な詳細やトラブルシューティングガイドが含まれています。

## 📚 目次

### トラブルシューティング

プロジェクト開発中に遭遇した問題と解決策を詳しく解説しています。

1. **[トラブルシューティング #1: React 依存関係の解決](./01-react-dependencies.md)**

   - 問題: "specifier 'react' は露出していますが、どこにも再マップされていません"
   - Rails/Go 環境で React の依存関係が解決できない問題
   - バンドル戦略とビルド設定の解説

2. **[トラブルシューティング #2: process.env 未定義エラー](./02-process-env.md)**

   - 問題: "process is not defined"
   - ブラウザ環境で`process.env`が存在しない問題
   - Vite の`define`オプションでビルド時に置換
   - バンドルサイズの大幅削減（66%削減）

3. **[トラブルシューティング #3: React TypeScript エラー](./03-react-typescript-error.md)**

   - 問題: `reactToWebComponent()`の第 3 引数の型エラー
   - React 19 での API 変更への対応
   - `react-dom/client`の正しいインポート方法

4. **[トラブルシューティング #4: React CSS が適用されない](./04-react-css-not-applied.md)**

   - 問題: React Web Component の CSS Modules スタイルが表示されない
   - Shadow DOM の有無による違い
   - `?inline` import と実行時 CSS 注入の実装

5. **[トラブルシューティング #5: Svelte 内部モジュール解決エラー](./05-svelte-internal-module-resolution.md)**

   - 問題: Svelte の内部モジュール解決に関するエラー
   - ビルド設定とバンドルの問題

6. **[トラブルシューティング #6: Preact 属性の型変換問題](./06-preact-attribute-type-conversion.md)**
   - 問題: Preact カウンターで数値が文字列連結される（0→01→011）
   - `preact-custom-element`は自動型変換を行わない特徴
   - `Number()`による明示的な型変換の実装

### 技術解説

7. **[なぜ React Web Component だけ CSS 注入が必要なのか？](./why-react-css-injection.md)**
   - Vanilla JS、Lit、React の 3 つのアプローチの比較
   - Shadow DOM の仕組みと利点
   - Vite のライブラリモードでの CSS 処理
   - 解決策の詳細な実装方法

### Q&A

よくある質問と回答をまとめています。

8. **[なぜ React Web Component のファイルサイズが大きいのか？](../questions/react-bundle-size.md)**
   - React、Lit、Vanilla JS のバンドルサイズ比較
   - React が大きい理由（React 本体 + ReactDOM + react-to-webcomponent）
   - サイズを削減する方法（Preact、CDN、Code Splitting）
   - ユースケース別の推奨実装

## 🗂️ プロジェクト全体のドキュメント構成

```
web-components-samples/
├── README.md                        # プロジェクト概要（日本語）
├── README.en.md                     # プロジェクト概要（英語）
├── CLAUDE.md                        # Claude Code用プロジェクトガイド
├── .claude/
│   └── rules/
│       ├── packages.md              # パッケージの詳細仕様
│       └── demo.md                  # デモアプリケーションの詳細仕様
└── docs/                            # 技術ドキュメント（このディレクトリ）
    ├── troubleshootings/
    │   ├── README.md                # このファイル
    │   ├── 01-react-dependencies.md
    │   ├── 02-process-env.md
    │   ├── 03-react-typescript-error.md
    │   ├── 04-react-css-not-applied.md
    │   ├── 05-svelte-internal-module-resolution.md
    │   ├── 06-preact-attribute-type-conversion.md
    │   └── why-react-css-injection.md
    └── questions/
        └── react-bundle-size.md     # Q&A: ファイルサイズについて
```

## 📖 推奨される読む順番

### 初めての方

1. [プロジェクト README](../README.md) - プロジェクト全体の概要
2. [CLAUDE.md](../CLAUDE.md) - 重要な設計判断と制約
3. [なぜ React Web Component だけ CSS 注入が必要なのか？](./why-react-css-injection.md) - 技術的背景

### 問題に遭遇した方

問題の症状に応じて、該当するトラブルシューティングガイドを参照してください：

- **"specifier 'react' は露出していますが..."** → [トラブルシューティング #1](./01-react-dependencies.md)
- **"process is not defined"** → [トラブルシューティング #2](./02-process-env.md)
- **TypeScript の型エラー** → [トラブルシューティング #3](./03-react-typescript-error.md)
- **スタイルが適用されない** → [トラブルシューティング #4](./04-react-css-not-applied.md)
- **Svelte のモジュール解決エラー** → [トラブルシューティング #5](./05-svelte-internal-module-resolution.md)
- **Preact の数値が文字列連結される** → [トラブルシューティング #6](./06-preact-attribute-type-conversion.md)

### よくある質問

- **React のバンドルサイズが大きい理由は？** → [Q&A: React バンドルサイズ](../questions/react-bundle-size.md)

### より深く理解したい方

1. [.claude/rules/packages.md](../.claude/rules/packages.md) - パッケージの詳細仕様
2. [.claude/rules/demo.md](../.claude/rules/demo.md) - デモアプリケーションの詳細仕様
3. 各トラブルシューティングガイドの「根本原因」セクション

## 🔍 トラブルシューティングの分類

### ビルド設定関連

- [#1: React 依存関係の解決](./01-react-dependencies.md)
- [#2: process.env 未定義エラー](./02-process-env.md)
- [#5: Svelte 内部モジュール解決エラー](./05-svelte-internal-module-resolution.md)

### TypeScript/型エラー関連

- [#3: React TypeScript エラー](./03-react-typescript-error.md)
- [#6: Preact 属性の型変換問題](./06-preact-attribute-type-conversion.md)

### スタイリング関連

- [#4: React CSS が適用されない](./04-react-css-not-applied.md)
- [なぜ React Web Component だけ CSS 注入が必要なのか？](./why-react-css-injection.md)

### パフォーマンス・最適化関連

- [Q&A: React バンドルサイズ](../questions/react-bundle-size.md)

## 📝 ドキュメントの更新

このドキュメントは、プロジェクトの進化とともに更新されます。新しい問題に遭遇した場合や、より良い解決策を見つけた場合は、該当するドキュメントを更新してください。

### ドキュメント更新のガイドライン

1. **問題の明確な記述**: どのような状況で問題が発生するか
2. **根本原因の説明**: なぜその問題が発生するのか
3. **解決策の詳細**: 具体的なコード例と手順
4. **関連ドキュメントへのリンク**: 他のドキュメントとの関連性

## 🛠️ 技術スタック

このプロジェクトで使用している主要な技術：

- **パッケージマネージャー**: pnpm 10.12.3
- **Node.js**: 24.3.0
- **ビルドツール**: Vite 7.3.0
- **TypeScript**: Strict mode
- **React**: 19.2.3
- **Lit**: 3.2.2
- **Ruby**: 3.3.6（Rails demo）
- **Go**: 1.25.5（Go demo）
- **タスクランナー**: mise

## 📊 バンドルサイズ

Rails/Go demo（gzip 圧縮後）:

| ファイル                     | サイズ（元）  | サイズ（gzip） |
| ---------------------------- | ------------- | -------------- |
| `vanilla.js`                 | 1.61 KB       | 0.79 KB        |
| `lit.js`                     | 22.38 KB      | 7.29 KB        |
| `react.js`                   | 324.52 KB     | 74.83 KB       |
| `web-components-samples.css` | 0.54 KB       | 0.31 KB        |
| **合計**                     | **348.05 KB** | **83.22 KB**   |

## 🔗 関連リンク

### 外部リソース

- [Web Components 公式](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [React 公式ドキュメント](https://react.dev/)
- [Lit 公式ドキュメント](https://lit.dev/)
- [Vite 公式ドキュメント](https://vitejs.dev/)
- [react-to-webcomponent](https://github.com/bitovi/react-to-webcomponent)

### プロジェクト内ドキュメント

- [プロジェクト README](../README.md)
- [CLAUDE.md](../CLAUDE.md)
- [パッケージ仕様](../.claude/rules/packages.md)
- [デモ仕様](../.claude/rules/demo.md)

## ❓ 質問やフィードバック

このドキュメントに関する質問や改善提案がある場合は、プロジェクトの Issue や Pull Request で気軽にお知らせください。
