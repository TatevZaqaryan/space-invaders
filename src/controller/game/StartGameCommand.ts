import BaseGameCommand from './BaseGameCommand';

export default class StartGameCommand extends BaseGameCommand {
  public execute(notificationName?: string, ...args: any[]): void {
    const words: string[] = this.dictionaryVOProxy.getWords(5, 6);
    this.gameVOProxy.createEnemies(words);
  }
}
