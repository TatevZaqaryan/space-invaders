import { SimpleCommand, SyncMacroCommand } from '@rollinsafary/mvc';
import { GameVOProxy } from '../../model/game/GameVOProxy';

export default class BaseGameMacroCommand extends SyncMacroCommand<SimpleCommand> {
  get gameVOProxy(): GameVOProxy {
    return this.facade.retrieveProxy(GameVOProxy.NAME);
  }
}
