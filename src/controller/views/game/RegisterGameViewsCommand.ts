import { SimpleCommand } from '@rollinsafary/mvc';
import EnemiesMediator from '../../../view/component/game/enemy/EnemiesMediator';
import PlayerMediator from '../../../view/component/game/player/PlayerMediator';

export default class RegisterGameViewsCommand extends SimpleCommand {
  public execute(notificationName?: string, ...args: any[]): void {
    this.facade.registerMediator(new PlayerMediator());
    this.facade.registerMediator(new EnemiesMediator());
  }
}
