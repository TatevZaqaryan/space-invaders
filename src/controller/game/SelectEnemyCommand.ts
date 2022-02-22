import { IEnemy } from '../../model/game/GameVO';
import { EnemiesView } from '../../view/component/game/enemy/EnemiesView';
import EnemiesViewMediator from '../../view/component/game/enemy/EnemiesViewMediator';
import ApplyShotCommand from './ApplyShotCommand';
import BaseGameMacroCommand from './BaseGameMacroCommand';

export default class SelectEnemyCommand extends BaseGameMacroCommand {
  public execute(notificationName: string, key: string): void {
    const enemiesViewMediator: EnemiesViewMediator =
      this.facade.retrieveMediator(EnemiesViewMediator.NAME);
    const enemiesView: EnemiesView = enemiesViewMediator.getViewComponent();
    const enemy: IEnemy = enemiesView.findEnemy(key);
    this.gameVOProxy.setTarget(enemy);
    super.execute(notificationName, key);
  }

  protected initializeMacroCommand(): void {
    this.addSubCommand(ApplyShotCommand);
  }
}
