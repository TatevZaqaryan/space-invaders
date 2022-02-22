import { SimpleCommand } from '@rollinsafary/mvc';
import { GameVOProxy } from '../../../model/game/GameVOProxy';

export default class RegisterGameVOProxyCommand extends SimpleCommand {
  public execute(notificationName?: string, ...args: any[]): void {
    this.facade.registerProxy(new GameVOProxy());
  }
}
