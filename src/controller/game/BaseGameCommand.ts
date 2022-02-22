import { SimpleCommand } from '@rollinsafary/mvc';
import DictionaryVOProxy from '../../model/dictionary/DictionaryVOProxy';
import { GameVOProxy } from '../../model/game/GameVOProxy';

export default abstract class BaseGameCommand extends SimpleCommand {
  get gameVOProxy(): GameVOProxy {
    return this.facade.retrieveProxy(GameVOProxy.NAME);
  }

  get dictionaryVOProxy(): DictionaryVOProxy {
    return this.facade.retrieveProxy(DictionaryVOProxy.NAME);
  }
}
