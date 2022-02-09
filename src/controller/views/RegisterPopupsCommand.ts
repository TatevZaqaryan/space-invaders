import SettingsPopupMediator from '../../view/popups/SettingsPopupMediator';
import BaseSimpleCommand from '../base/BaseSimpleCommand';

export default class RegisterPopupsCommand extends BaseSimpleCommand {
  public execute(): void {
    this.facade.registerMediator(new SettingsPopupMediator());
  }
}
