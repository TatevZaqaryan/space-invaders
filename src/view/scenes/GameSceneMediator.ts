import BaseSceneMediator from './BaseSceneMediator';
import BootScene from './BootScene';
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
    this.subscribeToNotifications(BootScene.LOAD_COMPLETE_NOTIFICATION);
  }

  protected handleNotification(notificationName: string, ...args: any[]): void {
    switch (notificationName) {
      case BootScene.LOAD_COMPLETE_NOTIFICATION:
        this.startScene();
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
}
