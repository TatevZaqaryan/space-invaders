import { BaseMediator } from './BaseMediator';

export default abstract class BaseViewMediator<T> extends BaseMediator<T> {
  protected setView(viewComponent: T): void {
    this.setViewComponent(viewComponent);
    this.setViewComponentListeners?.();
  }

  protected setViewComponentListeners(): void {}
}
