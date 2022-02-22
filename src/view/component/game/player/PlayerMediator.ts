import { GameVOProxy } from '../../../../model/game/GameVOProxy';
import BaseViewMediator from '../../../base/BaseViewMediator';
import GameScene from '../../../scenes/GameScene';
import { Player } from './Player';

export default class PlayerMediator extends BaseViewMediator<Player> {
  constructor() {
    super(PlayerMediator.name, null);
  }
  public registerNotificationInterests(): void {
    this.subscribeToNotifications();
  }
  public onRegister(): void {
    super.onRegister();
    this.setView();
  }

  protected async handleNotification(
    notificationName: string,
    ...args: any[]
  ): Promise<void> {
    switch (notificationName) {
      default:
        this.onUnhandledNotification(notificationName);
        break;
    }
  }

  protected setView(): void {
    const view = new Player(this.sceneManager.getScene(GameScene.name));
    super.setView(view);
  }
  protected get gameVOProxy(): GameVOProxy {
    return this.facade.retrieveProxy(GameVOProxy.NAME);
  }
}
