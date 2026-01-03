import { TailwindElement } from '../base-element';
import type { SimpleService } from '../utils/use-machine';

/**
 * Zag.jsを使用するコンポーネントの基底クラス
 *
 * サブクラスは以下を実装する必要がある:
 * - createService(): SimpleServiceを作成
 * - connectApi(service): ServiceからAPIを生成
 */
export abstract class ZagElement<TApi = any> extends TailwindElement {
  protected service!: SimpleService;
  protected api!: TApi;

  /**
   * SimpleServiceを作成する（サブクラスで実装）
   *
   * useMachineヘルパーを使ってServiceを作成して返す
   */
  protected abstract createService(): SimpleService;

  /**
   * ServiceからAPIを生成する（サブクラスで実装）
   *
   * Zag.jsのconnect関数を使ってAPIを生成して返す
   */
  protected abstract connectApi(service: SimpleService): TApi;

  /**
   * プロパティ変更時にサービスのコンテキストを更新
   *
   * サブクラスで必要に応じてオーバーライド
   */
  protected updateContext(_changedProperties: Map<string, any>): void {
    // デフォルトは何もしない
  }

  connectedCallback() {
    super.connectedCallback();

    // サービスの初期化
    this.service = this.createService();

    // 初期APIの生成
    this.api = this.connectApi(this.service);
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    // プロパティ変更時にコンテキストを更新
    this.updateContext(changedProperties);

    // APIを再生成
    this.api = this.connectApi(this.service);
  }

  /**
   * render()内で呼び出してAPIを更新
   */
  protected updateApi() {
    this.api = this.connectApi(this.service);
  }
}
