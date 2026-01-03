import { createNormalizer } from '@zag-js/types';

/**
 * Lit用のnormalizeProps実装
 *
 * Zag.jsのpropsをLitのテンプレートで使えるように正規化する
 * - イベントハンドラー: onClickなどをそのまま保持（spread directiveで処理）
 * - data-*属性: そのまま保持
 * - aria-*属性: そのまま保持
 * - boolean属性: true/falseをそのまま保持
 *
 * Litではspread directiveがイベントと属性を適切に処理するため、
 * propsをそのまま返す単純な実装
 */
export const normalizeProps = createNormalizer((props: Record<string, any>) => {
  return props;
});
