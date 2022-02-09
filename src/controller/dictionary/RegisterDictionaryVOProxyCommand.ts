import { SimpleCommand } from '@rollinsafary/mvc';
import DictionaryVOProxy from '../../model/dictionary/DictionaryVOProxy';
import BaseAsyncMacroCommand from '../base/BaseAsyncMacroCommand';

export default class RegisterDictionaryVOProxyCommand extends BaseAsyncMacroCommand<SimpleCommand> {
  public execute() {
    fetch('https://random-word-api.herokuapp.com/all')
      .then((response) => {
        return response.json();
      })
      .then((wordsArray) => {
        this.facade.registerProxy(new DictionaryVOProxy(wordsArray));
      });
  }
}
