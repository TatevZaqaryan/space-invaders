import { SimpleCommand } from '@rollinsafary/mvc';
import DictionaryVOProxy from '../../model/dictionary/DictionaryVOProxy';

export default abstract class BaseDictionaryCommand extends SimpleCommand {
  get proxy(): DictionaryVOProxy {
    return this.facade.retrieveProxy(DictionaryVOProxy.NAME);
  }
}
