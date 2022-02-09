import { SimpleCommand, SyncMacroCommand } from '@rollinsafary/mvc';
import LoadingScene from '../view/scenes/LoadingScene';
import RegisterDictionaryVOProxyCommand from './dictionary/RegisterDictionaryVOProxyCommand';

export default class RegisterDictionaryCommands extends SyncMacroCommand<SimpleCommand> {
  public execute(notificationName?: string, ...args: any[]): void {
    super.execute(notificationName, ...args);
    this.facade.registerCommandOnce(
      LoadingScene.ASSETS_LOAD_COMPLETE,
      RegisterDictionaryVOProxyCommand,
    );
  }
}
