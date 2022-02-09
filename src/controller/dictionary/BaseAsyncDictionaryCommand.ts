import { AsyncMacroCommand, SimpleCommand } from '@rollinsafary/mvc';
import DictionaryVOProxy from '../../model/dictionary/DictionaryVOProxy';

export default abstract class BaseAsyncDictionaryCommand extends AsyncMacroCommand<SimpleCommand> {
  get proxy(): DictionaryVOProxy {
    return this.facade.retrieveProxy(DictionaryVOProxy.NAME);
  }
}
