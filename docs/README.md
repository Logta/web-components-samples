# Web Components Samples - ドキュメント

このディレクトリには、プロジェクトの技術的な詳細、設計上の決定、トラブルシューティングガイドが含まれています。

## 📚 目次

### 🏛️ 設計とアーキテクチャ

アーキテクチャ、設計上の決定、および技術的な詳細を説明するドキュメントです。

1.  **[ADR-001: モーダル実装戦略](./architecture/adr-001-modal-implementation.md)**
    *   さまざまなフレームワークでモーダルコンポーネントを実装するための意思決定プロセス。
    *   Headless UIとネイティブ`<dialog>`の比較。

2.  **[ADR-002: Preactのネイティブダイアログへの移行](./architecture/adr-002-preact-native-dialog.md)**
    *   型の問題により、Preactのモーダル実装がHeadless UIからネイティブ`<dialog>`要素に変更された理由。

3.  **[分析: バンドルサイズの比較](./architecture/analysis-bundle-size.md)**
    *   React、Lit、Svelte、Preact、およびVanilla JSでビルドされたWeb Componentsのバンドルサイズの詳細な比較。

4.  **[解説: ReactのCSS注入](./architecture/explanation-react-css-injection.md)**
    *   ReactベースのWeb Componentが、Shadow DOMを使用する他のフレームワークと比較して、なぜCSS注入に特別なメカニズムを必要とするのかについての説明。

### 🐛 トラブルシューティング

開発中に遭遇した一般的な問題の解決策。

1.  **[Reactの依存関係解決](./troubleshooting/react-dependencies.md)**
    *   Rails/Go環境で 'react' 指定子が再マップされない問題の解決。

2.  **[未定義の `process.env`](./troubleshooting/process-env.md)**
    *   ブラウザ環境で "process is not defined" エラーをViteの `define` オプションを使用して修正。

3.  **[ReactのTypeScriptエラー](./troubleshooting/react-typescript-error.md)**
    *   React 19のAPI変更による `reactToWebComponent()` の第三引数の型エラーの処理。

4.  **[ReactのCSSが適用されない](./troubleshooting/react-css-not-applied.md)**
    *   React Web ComponentでCSS Modulesのスタイルが表示されない理由と、`?inline` インポートでの修正方法。

5.  **[Svelteのモジュール解決](./troubleshooting/svelte-module-resolution.md)**
    *   ビルドプロセス中のSvelteの内部モジュール解決に関連するエラーの解決。

6.  **[Preactの属性型変換](./troubleshooting/preact-attribute-type-conversion.md)**
    *   Preactカウンターで数値が文字列として連結される問題（例: 0 -> 01 -> 011）の修正。

7.  **[ReactのWeb Component Props](./troubleshooting/react-webcomponent-props.md)**
    *   `react-to-webcomponent`でHTML属性がReact propsに渡されない問題の解決。
    *   `reactToWebComponent()`の`props`オプションの設定方法。

8.  **[Dropdownのイベント伝播問題](./troubleshooting/dropdown-event-propagation.md)**
    *   ReactとSvelteのDropdownでクリックしても選択肢が表示されない問題。
    *   イベントバブリングと`event.stopPropagation()`の使用方法。

9.  **[Dropdownのdisabled属性が効かない](./troubleshooting/dropdown-disabled-attribute.md)**
    *   ReactとSvelteのDropdownで`disabled`属性が認識されない問題。
    *   Web ComponentsのBoolean属性の仕様と`@r2wc`ライブラリの問題。
    *   MutationObserverを使った解決方法。

## 🗂️ New Project Documentation Structure

```
web-components-samples/
├── README.md
├── GEMINI.md
├── docs/
│   ├── README.md  (this file)
│   ├── architecture/
│   │   ├── adr-001-modal-implementation.md
│   │   ├── adr-002-preact-native-dialog.md
│   │   ├── analysis-bundle-size.md
│   │   └── explanation-react-css-injection.md
│   └── troubleshooting/
│       ├── dropdown-event-propagation.md
│       ├── preact-attribute-type-conversion.md
│       ├── process-env.md
│       ├── react-css-not-applied.md
│       ├── react-dependencies.md
│       ├── react-typescript-error.md
│       ├── react-webcomponent-props.md
│       ├── svelte-module-resolution.md
│       └── dropdown-disabled-attribute.md
└── ... (other project files)

```

## 📖 推奨される読む順番

### 初めての方

1. [プロジェクト README](../README.md) - プロジェクト全体の概要
2. [GEMINI.md](../GEMINI.md) - 重要な設計判断と制約
3. [なぜ React Web Component だけ CSS 注入が必要なのか？](./why-react-css-injection.md) - 技術的背景

### 問題に遭遇した方

問題の症状に応じて、該当するトラブルシューティングガイドを参照してください：

- **"specifier 'react' は露出していますが..."** → [トラブルシューティング #1](./01-react-dependencies.md)
- **"process is not defined"** → [トラブルシューティング #2](./troubleshooting/process-env.md)
- **TypeScript の型エラー** → [トラブルシューティング #3](./troubleshooting/react-typescript-error.md)
- **スタイルが適用されない** → [トラブルシューティング #4](./troubleshooting/react-css-not-applied.md)
- **Svelte のモジュール解決エラー** → [トラブルシューティング #5](./troubleshooting/svelte-module-resolution.md)
- **Preact の数値が文字列連結される** → [トラブルシューティング #6](./troubleshooting/preact-attribute-type-conversion.md)
- **React の属性が props に渡されない** → [トラブルシューティング #7](./troubleshooting/react-webcomponent-props.md)
- **Dropdown をクリックしても選択肢が表示されない** → [トラブルシューティング #8](./troubleshooting/dropdown-event-propagation.md)
- **Dropdown の disabled 属性が効かない** → [トラブルシューティング #9](./troubleshooting/dropdown-disabled-attribute.md)

### よくある質問

- **React のバンドルサイズが大きい理由は？** → [Q&A: React バンドルサイズ](../questions/react-bundle-size.md)

### より深く理解したい方

1. [.gemini/rules/packages.md](../.gemini/rules/packages.md) - パッケージの詳細仕様
2. [.gemini/rules/demo.md](../.gemini/rules/demo.md) - デモアプリケーションの詳細仕様
3. 各トラブルシューティングガイドの「根本原因」セクション

## 🔍 トラブルシューティングの分類

### ビルド設定関連

- [#1: React 依存関係の解決](./01-react-dependencies.md)
- [#2: process.env 未定義エラー](./02-process-env.md)
- [#5: Svelte 内部モジュール解決エラー](./05-svelte-internal-module-resolution.md)

### TypeScript/型エラー関連

- [#3: React TypeScript エラー](./troubleshooting/react-typescript-error.md)
- [#6: Preact 属性の型変換問題](./troubleshooting/preact-attribute-type-conversion.md)
- [#7: React Web Component Props](./troubleshooting/react-webcomponent-props.md)

### イベント処理関連

- [#8: Dropdown イベント伝播問題](./troubleshooting/dropdown-event-propagation.md)
- [#9: Dropdown disabled 属性問題](./troubleshooting/dropdown-disabled-attribute.md)

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
- [GEMINI.md](../GEMINI.md)
- [パッケージ仕様](../.gemini/rules/packages.md)
- [デモ仕様](../.gemini/rules/demo.md)

## ❓ 質問やフィードバック

このドキュメントに関する質問や改善提案がある場合は、プロジェクトの Issue や Pull Request で気軽にお知らせください。
