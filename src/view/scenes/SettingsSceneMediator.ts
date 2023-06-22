import HeaderView from '../component/header/HeaderView';
import BaseSceneMediator from './BaseSceneMediator';
import MenuScene from './MenuScene';
import SettingsScene from './SettingsScene';

export class SettingsSceneMediator extends BaseSceneMediator<SettingsScene> {
  public static NAME: string = 'SettingsSceneMediator';

  constructor() {
    super(SettingsSceneMediator.name, null);
  }
  public onRegister(): void {
    super.onRegister();
    this.setView();
  }
  registerNotificationInterests(): void {
    this.subscribeToNotifications(MenuScene.SETTINGS_ICON_CLICKED_NOTIFICATION);
    this.subscribeToNotifications(
      HeaderView.SETTINGS_BUTTON_CLICKED_NOTIFICATION,
    );
  }
  protected handleDefaultNotifications(
    notificationName: string,
    ...args: any
  ): void {
    switch (notificationName) {
      case MenuScene.SETTINGS_ICON_CLICKED_NOTIFICATION:
        this.startScene();
        break;
      case HeaderView.SETTINGS_BUTTON_CLICKED_NOTIFICATION:
        this.startScene();
        break;
      default:
        this.handleDefaultNotifications(notificationName);
        break;
    }
  }
  protected setView(): void {
    const scene = new SettingsScene();
    this.sceneManager.add(SettingsScene.NAME, scene);
    this.setViewComponent(scene);
  }
}
