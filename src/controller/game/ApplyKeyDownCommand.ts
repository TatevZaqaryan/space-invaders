import ApplyShotCommand from './ApplyShotCommand';
import BaseGameMacroCommand from './BaseGameMacroCommand';
import SelectEnemyCommand from './SelectEnemyCommand';

export default class ApplyKeyDownCommand extends BaseGameMacroCommand {
  public execute(notificationName: string, key: string): void {
    this.addSubCommand(
      !!this.gameVOProxy.vo.target ? ApplyShotCommand : SelectEnemyCommand,
    );
    super.execute(notificationName, key);
  }
}
