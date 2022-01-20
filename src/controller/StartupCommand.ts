import { SimpleCommand, SyncMacroCommand } from '@rollinsafary/mvc';
import RegisterViewsCommands from './RegiserViewsCommands';

export default class StartupCommand extends SyncMacroCommand<SimpleCommand> {
  public initializeMacroCommand(): void {
    this.addSubCommand(RegisterViewsCommands);
  }
}
