import { GameVOProxy } from '../../../model/game/GameVOProxy';
import BaseViewMediator from '../../base/BaseViewMediator';
import GameScene from '../../scenes/GameScene';
import { EnemiesView } from '../game/enemy/EnemiesView';
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
    this.sendNotification(
      GameVOProxy.STATISTICS_UPDATED,
      EnemiesView.ENEMY_DESTROYED,
    );
  }
  protected handleNotification(notificationName: string, ...args: any[]): void {
    let score = this.gameVOProxy.vo.statistics.score++;
    console.log(score);
    switch (notificationName) {
      case EnemiesView.ENEMY_DESTROYED:
        let score = ++this.gameVOProxy.vo.statistics.score;
        console.log(score);
        this.updateScore();
        break;
      default:
        this.onUnhandledNotification(notificationName);
        break;
    }
  }
  protected setViewComponentListeners(): void {
    super.setViewComponentListeners();
  }
  protected setView(): void {
    const scene: GameScene = this.sceneManager.getScene(
      GameScene.name,
    ) as GameScene;
    const view: FooterView = new FooterView(scene);
    super.setView(view);
  }
  protected onUpdateScore(): void {}
  public updateScore(): void {}
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
