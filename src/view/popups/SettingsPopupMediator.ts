import GameScene from '../scenes/GameScene';
import BasePopupMediator from './BasePopupMediator';
import SettingsPopup from './SettingsPopup';

export default class SettingsPopupMediator extends BasePopupMediator<SettingsPopup> {
  public static NAME: string = 'SettingsPopupMediator';

  constructor() {
    super(SettingsPopupMediator.NAME);
  }
  public registerNotificationInterests(): void {
    this.subscribeToNotifications(
      GameScene.SETTINGS_BUTTON_CLICKED_NOTIFICATION,
    );
  }
  handleSubscribedNotification(notificationName: string, ...args: any[]): void {
    switch (notificationName) {
      case GameScene.SETTINGS_BUTTON_CLICKED_NOTIFICATION:
        console.warn('barev');

        this.showView();
        break;
      default:
        this.onUnhandledNotification(notificationName);
        break;
    }
  }
  protected createView(): void {
    super.createView(new SettingsPopup());
  }
}
