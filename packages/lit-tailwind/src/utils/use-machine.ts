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
 * 型安全なコンテキストアクセスを提供するクラス
 */
class TypeSafeContext {
  private map: Map<string, unknown>;

  constructor(initialContext?: Record<string, any>) {
    this.map = new Map<string, unknown>();
    if (initialContext) {
      Object.entries(initialContext).forEach(([key, value]: [string, unknown]) => {
        this.map.set(key, value);
      });
    }
  }

  get<T>(key: string): T | undefined {
    const value = this.map.get(key);
    return value !== undefined ? (value as T) : undefined;
  }

  set(key: string, value: unknown): void {
    this.map.set(key, value);
  }
}

/**
 * 簡易Service型
 * Zag.jsのService型を模倣した最小限の実装
 */
export interface SimpleService {
  /** コンテキスト値を保持するMap */
  readonly context: {
    get<T>(key: string): T | undefined;
    set(key: string, value: unknown): void;
  };
  /** イベントを送信（現在は未実装） */
  send: (event: unknown) => void;
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
  const context = new TypeSafeContext(options.context);

  // 簡易的なServiceオブジェクトを返す
  return {
    context,
    send: (_event: unknown): void => {
      // 現在はイベント送信は未実装
      // 必要に応じて拡張可能
    }
  };
}
