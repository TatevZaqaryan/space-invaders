import BaseViewMediator from '../../base/BaseViewMediator';
import GameScene from '../../scenes/GameScene';
import { EnemiesView } from '../game/player/enemy/EnemiesView';
import HeaderView from './HeaderView';

export default class HeaderViewMediator extends BaseViewMediator<HeaderView> {
  public static NAME: string = 'HeaderViewMediator';
  constructor() {
    super(HeaderViewMediator.NAME, null);
  }
  public onRegister(): void {
    super.onRegister();
    this.setView();
  }
  public registerNotificationInterests(): void {}

  protected handleNotification(notificationName: string, ...args: any[]): void {
    switch (notificationName) {
      case EnemiesView.ENEMY_DESTROYED:
        this;
        break;
    }
  }
  protected setViewComponentListeners(): void {
    super.setViewComponentListeners();
    this.viewComponent.scene.events.on(
      HeaderView.SETTINGS_BUTTON_CLICKED_EVENT,
      this.onSettingsButtonClicked,
      this,
    );
    this.viewComponent.on(
      HeaderView.LIFE_ICON_DESTROYED_EVENT,
      this.onLifeDestroy,
      this,
    );
  }
  protected setView(): void {
    const scene: GameScene = this.sceneManager.getScene(
      GameScene.name,
    ) as GameScene;
    const view: HeaderView = new HeaderView(scene);
    super.setView(view);
  }
  protected onSettingsButtonClicked(): void {
    this.sendNotification(HeaderView.SETTINGS_BUTTON_CLICKED_NOTIFICATION);
  }
  protected onLifeDestroy() {
    this.sendNotification(HeaderView.LIFE_DESTROYED);
  }
}
