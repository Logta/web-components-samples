import type { Machine } from '@zag-js/core';

/**
 * Lit用のuseMachine実装
 *
 * Zag.jsのMachineとコンテキストを受け取り、簡易的なServiceラッパーを返す
 */

export interface UseMachineOptions {
  /**
   * マシンのコンテキスト（初期値）
   */
  context?: Record<string, any>;
}

/**
 * 簡易Service型
 * Zag.jsのService型を模倣した最小限の実装
 */
export interface SimpleService {
  context: Map<string, any>;
  send: (event: any) => void;
}

/**
 * MachineとコンテキストからSimpleServiceを作成
 *
 * @param _machine - Zag.jsのMachine定義（現在は未使用）
 * @param options - マシンのオプション
 * @returns SimpleService インスタンス
 */
export function useMachine(
  _machine: Machine<any>,
  options: UseMachineOptions = {}
): SimpleService {
  // コンテキストをMapとして保持
  const contextMap = new Map<string, any>();

  if (options.context) {
    Object.entries(options.context).forEach(([key, value]) => {
      contextMap.set(key, value);
    });
  }

  // 簡易的なServiceオブジェクトを返す
  return {
    context: contextMap,
    send: (_event: any) => {
      // 現在はイベント送信は未実装
      // 必要に応じて拡張可能
    }
  };
}
