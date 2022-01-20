import { BaseMediator } from '../../base/BaseMediator';
import { GameScene } from '../../scenes/GameScene';
import { Rocket } from './Rocket';

export class RocketMediator extends BaseMediator<Rocket> {
  public static NAME: string = 'RocketMediator';
  constructor() {
    super(RocketMediator.NAME, null);
  }
  public registerNotificationInterests(): void {
    this.subscribeToNotifications();
  }
  public onRegister(): void {
    super.onRegister();
    this.setView();
  }

  public async handleNotification(
    notificationName: string,
    ...args: any[]
  ): Promise<void> {
    // switch (notificationName) {
    //   case GameScene.READY_NOTIFICATION:
    //     break;
    //   default:
    //     break;
    // }
  }
  protected setView(): void {
    this.setViewComponent(
      new Rocket(this.sceneManager.getScene(GameScene.NAME)),
    );
  }
}
