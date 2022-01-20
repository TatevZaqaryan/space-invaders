import BaseViewMediator from '../../../base/BaseViewMediator';
import GameScene from '../../../scenes/GameScene';
import { Enemies } from './Enemies';

export default class EnemiesMediator extends BaseViewMediator<Enemies> {
  constructor() {
    super(EnemiesMediator.name, null);
  }

  public onRegister(): void {
    super.onRegister();
    this.setView();
  }

  public registerNotificationInterests(): void {
    this.subscribeToNotifications();
  }

  protected handleNotification(notificationName: string, ...args: any[]): void {
    switch (notificationName) {
      default:
        this.onUnhandledNotification(notificationName);
        break;
    }
  }

  protected setView(): void {
    const scene: GameScene = this.sceneManager.getScene(
      GameScene.name,
    ) as GameScene;
    const view: Enemies = new Enemies(scene);
    super.setView(view);
  }
}
