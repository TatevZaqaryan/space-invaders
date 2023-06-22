import { GameVOProxy } from '../../../model/game/GameVOProxy';
import BaseViewMediator from '../../base/BaseViewMediator';
import GameScene from '../../scenes/GameScene';
import FooterView from './FooterView';

export default class FooterViewMediator extends BaseViewMediator<FooterView> {
  public static NAME: string = 'HeaderViewMediator';
  constructor() {
    super(FooterViewMediator.NAME, null);
  }
  public onRegister(): void {
    super.onRegister();
    this.setView();
  }
  public registerNotificationInterests(): void {
    this.subscribeToNotifications(GameVOProxy.STATISTICS_UPDATED);
  }

  protected handleNotification(notificationName: string, ...args: any[]): void {
    switch (notificationName) {
      case GameVOProxy.STATISTICS_UPDATED:
        console.error('hello guys');

        // this.updateScore();
        break;
      default:
        this.onUnhandledNotification(notificationName);
        break;
    }
  }

  protected setView(): void {
    const scene: GameScene = this.sceneManager.getScene(
      GameScene.name,
    ) as GameScene;
    const view: FooterView = new FooterView(scene);
    super.setView(view);
  }
  protected setViewComponentListeners(): void {
    super.setViewComponentListeners();
    this.viewComponent.on(FooterView.SCORE_UPDATED_EVENT, this.onUpdate, this);
  }
  protected onUpdate(): void {
    this.sendNotification(FooterView.SCORE_UPDATED);
  }
  public updateScore(): void {
    console.log('garun garun garun');
  }
  public updateMissed(): void {
    let missed = ++this.gameVOProxy.vo.statistics.missed;
    console.log(missed);
  }
  public updateShots(): void {
    let shots = ++this.gameVOProxy.vo.statistics.shots;
    console.log(shots);
  }
  get gameVOProxy(): GameVOProxy {
    return this.facade.retrieveProxy(GameVOProxy.NAME);
  }
}
