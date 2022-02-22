import BaseSceneMediator from './BaseSceneMediator';
import LoadingScene from './LoadingScene';
import MenuScene from './MenuScene';

export default class MenuSceneMediator extends BaseSceneMediator<MenuScene> {
  public static NAME: string = 'MenuSceneMediator';
  constructor() {
    super(MenuSceneMediator.NAME, null);
  }
  public onRegister(): void {
    super.onRegister();
    this.setView();
  }
  registerNotificationInterests(): void {
    this.subscribeToNotifications(LoadingScene.LOADING_COMPLETE);
  }
  protected handleNotification(notificationName: string, ...args: any[]): void {
    switch (notificationName) {
      case LoadingScene.LOADING_COMPLETE:
        this.startScene();
        break;
      default:
        this.handleDefaultNotifications(notificationName);
        break;
    }
  }
  protected setView(): void {
    const scene = new MenuScene();
    this.sceneManager.add(MenuScene.NAME, scene);
    this.setViewComponent(scene);
  }
  protected setViewComponentListeners(): void {
    super.setViewComponentListeners();
    this.viewComponent.events.on(
      MenuScene.START_BUTTON_CLICKED_EVENT,
      this.onStartButtonClick,
      this,
    );
    this.viewComponent.events.on(
      MenuScene.SETTINGS_ICON_CLICKED_EVENT,
      this.onSettingsIconClick,
      this,
    );
  }

  protected onStartButtonClick(): void {
    this.sendNotification(MenuScene.START_BUTTON_CLICKED_NOTIFICATION);
    this.sceneManager.stop(MenuScene.NAME);
  }
  protected onSettingsIconClick(): void {
    this.sendNotification(MenuScene.SETTINGS_ICON_CLICKED_NOTIFICATION);
  }
}
