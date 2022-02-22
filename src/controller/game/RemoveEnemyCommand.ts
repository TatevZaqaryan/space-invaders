import BaseGameCommand from './BaseGameCommand';

export default class RemoveEnemyCommand extends BaseGameCommand {
  public execute(notificationName: string, id: string): void {
    this.gameVOProxy.removeEnemy(id);
  }
}
