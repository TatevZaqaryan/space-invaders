import { IEnemy } from '../../../../../model/game/GameVO';
import { GameVOProxy } from '../../../../../model/game/GameVOProxy';
import BaseViewMediator from '../../../../base/BaseViewMediator';
import GameScene from '../../../../scenes/GameScene';
import { EnemiesView } from './EnemiesView';

export default class EnemiesViewMediator extends BaseViewMediator<EnemiesView> {
  public static NAME: string = 'EnemiesViewMediator';
  constructor() {
    super(EnemiesViewMediator.NAME, null);
  }

  public onRegister(): void {
    super.onRegister();
    this.setView();
  }

  public registerNotificationInterests(): void {
    this.subscribeToNotifications(
      GameVOProxy.ENEMIES_CREATED,
      GameVOProxy.SHOT_APPLIED,
    );
  }

  protected handleNotification(notificationName: string, ...args: any[]): void {
    switch (notificationName) {
      case GameVOProxy.ENEMIES_CREATED:
        const enemyConfigs: IEnemy[] = args[0];
        this.viewComponent.createEnemies(enemyConfigs);
        break;
      case GameVOProxy.SHOT_APPLIED:
        this.viewComponent.updateEnemy(this.gameVOProxy.vo.target.id);
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
    const view: EnemiesView = new EnemiesView(scene);
    super.setView(view);
  }

  protected setViewComponentListeners(): void {
    this.viewComponent.on(
      EnemiesView.ENEMY_DESTROYED_EVENT,
      this.onEnemyDestroyed,
      this,
    );
  }

  protected onEnemyDestroyed(id: string): void {
    this.sendNotification(EnemiesView.ENEMY_DESTROYED, id);
  }

  get gameVOProxy(): GameVOProxy {
    return this.facade.retrieveProxy(GameVOProxy.NAME);
  }
}
