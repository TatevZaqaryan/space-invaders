import { RocketMediator } from '../component/game/RocketMediator';
import BaseSceneMediator from './BaseSceneMediator';
import BootScene from './BootScene';
import { GameScene } from './GameScene';

export default class GameSceneMediator extends BaseSceneMediator<GameScene> {
  public static NAME: string = ' GameSceneMediator';
  public registerNotificationInterests(): void {
    this.subscribeToNotifications(BootScene.LOAD_COMPLETE_NOTIFICATION);
  }

  public handleNotification(notificationName: string, ...args: any[]): void {
    switch (notificationName) {
      case BootScene.LOAD_COMPLETE_NOTIFICATION:
        this.startScene();
        break;
      default:
        this.handleDefaultNotifications(notificationName, ...args);
        break;
    }
  }
  constructor() {
    super(GameSceneMediator.NAME, null);
  }
  public onRegister(): void {
    super.onRegister();
    this.setView();
    this.onReady();
  }

  protected setView(): void {
    const scene: GameScene = new GameScene();
    this.sceneManager.add(GameScene.NAME, scene);
    this.setViewComponent(scene);
  }

  private onReady(): void {
    this.facade.registerMediator(new RocketMediator());
  }
}
