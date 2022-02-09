import { SimpleCommand, SyncMacroCommand } from '@rollinsafary/mvc';
import GameScene from '../view/scenes/GameScene';
import PopupScene from '../view/scenes/PopupScene';
import RegisterGameViewsCommand from './views/game/RegisterGameViewsCommand';
import RegisterPopupsCommand from './views/RegisterPopupsCommand';
import RegisterScenesCommand from './views/RegisterScenesCommand';

export default class RegisterViewsCommands extends SyncMacroCommand<SimpleCommand> {
  execute(notificationName?: string, ...args: any[]): void {
    this.facade.registerCommand(
      GameScene.READY_NOTIFICATION,
      RegisterGameViewsCommand,
    );
    this.facade.registerCommand(
      PopupScene.REGISTERED_NOTIFICATION,
      RegisterPopupsCommand,
    );
    super.execute(notificationName, ...args);
  }

  protected initializeMacroCommand(): void {
    this.addSubCommand(RegisterScenesCommand);
  }
}
