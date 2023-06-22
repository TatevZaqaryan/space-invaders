import { SimpleCommand, SyncMacroCommand } from '@rollinsafary/mvc';
import { EnemiesView } from '../view/component/game/player/enemy/EnemiesView';
import GameScene from '../view/scenes/GameScene';
import MenuScene from '../view/scenes/MenuScene';
import ApplyKeyDownCommand from './game/ApplyKeyDownCommand';
import RemoveEnemyCommand from './game/RemoveEnemyCommand';
import StartGameCommand from './game/StartGameCommand';
import CreateNewEnemiesCommand from './views/game/CreateNewEnemiesCommand';
import RegisterGameVOProxyCommand from './views/game/RegisterGameVOProxyCommand';

export default class RegisterGameCommands extends SyncMacroCommand<SimpleCommand> {
  public execute(notificationName?: string, ...args: any[]): void {
    this.facade.registerCommand(GameScene.READY_NOTIFICATION, StartGameCommand);
    this.facade.registerCommand(
      MenuScene.START_BUTTON_CLICKED_NOTIFICATION,
      RegisterGameVOProxyCommand,
    );
    this.facade.registerCommand(
      GameScene.UPDATE_ENEMIES,
      CreateNewEnemiesCommand,
    );
    this.facade.registerCommand(
      EnemiesView.ENEMY_DESTROYED,
      RemoveEnemyCommand,
    );
    this.facade.registerCommand(GameScene.KEY_TYPED, ApplyKeyDownCommand);
  }
}
