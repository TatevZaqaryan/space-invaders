import { SimpleCommand } from '@rollinsafary/mvc';
import { READY_TO_START_NOTIFICATION } from '../../constants/GlobalNotifications';
import BootSceneMediator from '../../view/scenes/BootSceneMediator';
import GameSceneMediator from '../../view/scenes/GameSceneMediator';
import LoadingSceneMediator from '../../view/scenes/LoadingSceneMediator';
import MenuSceneMediator from '../../view/scenes/MenuSceneMediator';
import PopupSceneMediator from '../../view/scenes/PopupSceneMediator';
import ServiceSceneMediator from '../../view/scenes/ServiceSceneMediator';

export default class RegisterScenesCommand extends SimpleCommand {
  public execute(): void {
    this.facade.registerMediator(new ServiceSceneMediator());
    this.facade.registerMediator(new PopupSceneMediator());
    this.facade.registerMediator(new BootSceneMediator());
    this.facade.registerMediator(new LoadingSceneMediator());
    this.facade.registerMediator(new MenuSceneMediator());

    this.facade.registerMediator(new GameSceneMediator());

    this.sendNotification(READY_TO_START_NOTIFICATION);
  }
}
