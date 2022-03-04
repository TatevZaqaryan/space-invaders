import { GameVOProxy } from '../../model/game/GameVOProxy';
import BaseSceneMediator from './BaseSceneMediator';
import GameScene from './GameScene';

export default class GameSceneMediator extends BaseSceneMediator<GameScene> {
  constructor() {
    super(GameSceneMediator.name, null);
  }
  public onRegister(): void {
    super.onRegister();
    this.setView();
  }

  public registerNotificationInterests(): void {
    this.subscribeToNotifications(GameVOProxy.REGISTERED);
  }

  protected handleNotification(notificationName: string, ...args: any[]): void {
    switch (notificationName) {
      case GameVOProxy.REGISTERED:
        this.startScene();
        break;

        break;
      default:
        this.handleDefaultNotifications(notificationName, ...args);
        break;
    }
  }

  protected setView(): void {
    const scene: GameScene = new GameScene();
    this.sceneManager.add(GameScene.name, scene);
    this.setViewComponent(scene);
  }
  protected setViewComponentListeners(): void {
    super.setViewComponentListeners();

    this.viewComponent.events.on(
      GameScene.UPDATE_ENEMIES_EVENT,
      this.onUpdateEnemies,
      this,
    );
    this.viewComponent.events.on(
      GameScene.KEY_TYPED_EVENT,
      this.onKeyTyped,
      this,
    );
  }

  protected onUpdateEnemies(): void {
    this.sendNotification(GameScene.UPDATE_ENEMIES);
  }

  protected onKeyTyped(key: string): void {
    this.sendNotification(GameScene.KEY_TYPED, key);
  }
}
