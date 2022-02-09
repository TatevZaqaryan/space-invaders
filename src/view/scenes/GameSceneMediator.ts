import BaseSceneMediator from './BaseSceneMediator';
import GameScene from './GameScene';
import MenuScene from './MenuScene';

export default class GameSceneMediator extends BaseSceneMediator<GameScene> {
  constructor() {
    super(GameSceneMediator.name, null);
  }
  public onRegister(): void {
    super.onRegister();
    this.setView();
  }

  public registerNotificationInterests(): void {
    this.subscribeToNotifications(MenuScene.START_BUTTON_CLICKED_NOTIFICATION);
  }

  protected handleNotification(notificationName: string, ...args: any[]): void {
    switch (notificationName) {
      case MenuScene.START_BUTTON_CLICKED_NOTIFICATION:
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
  protected setViewComponentListeners(): void {
    super.setViewComponentListeners();
    this.viewComponent.events.on(
      GameScene.SETTINGS_BUTTON_CLICKED_EVENT,
      this.onSettingsButtonClicked,
      this,
    );
  }

  protected onSettingsButtonClicked(): void {
    this.sendNotification(GameScene.SETTINGS_BUTTON_CLICKED_NOTIFICATION);
  }
}
