import { SimpleCommand } from '@rollinsafary/mvc';
import FooterViewMediator from '../../../view/component/footer/FooterViewMediator';
import EnemiesViewMediator from '../../../view/component/game/player/enemy/EnemiesViewMediator';
import PlayerMediator from '../../../view/component/game/player/PlayerMediator';
import HeaderViewMediator from '../../../view/component/header/HeaderViewMediator';

export default class RegisterGameViewsCommand extends SimpleCommand {
  public execute(notificationName?: string, ...args: any[]): void {
    this.facade.registerMediator(new PlayerMediator());
    this.facade.registerMediator(new EnemiesViewMediator());
    this.facade.registerMediator(new HeaderViewMediator());
    this.facade.registerMediator(new FooterViewMediator());
  }
}
