import EnemiesMissingGuard from '../../../guards/game/EnemiesMissingGuard';
import BaseGameCommand from '../../game/BaseGameCommand';

export default class CreateNewEnemiesCommand extends BaseGameCommand {
  protected prepare(): void {
    this.addGuards(EnemiesMissingGuard);
  }
  public execute(notificationName?: string, ...args: any[]): void {
    const count = 5 - this.gameVOProxy.vo.enemies.length;
    const words: string[] = this.dictionaryVOProxy.getWords(count, 6);
    this.gameVOProxy.createEnemies(words);
  }
}
