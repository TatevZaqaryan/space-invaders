import { Fonts } from '../../assets';
import { MenuButton } from '../button/MenuButton';
import BasePopup from './BasePopup';

export default class SettingsPopup extends BasePopup {
  public static NAME: string = 'SettingsPopup';
  protected text: Phaser.GameObjects.Text;
  protected restart: MenuButton;
  protected quit: MenuButton;
  protected cancel: MenuButton;

  protected createComponents(): void {
    this.createText();
    this.createRestartButton();
    this.createQuitButton();
    this.createCancel();
  }
  protected createText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '60px',
      fontFamily: Fonts.Bold.Name,
    };
    this.text = this.scene.make.text({
      x: this.width * 0.5,
      y: this.height * 0.3,
      text: 'Settings',
      style,
    });
    this.add(this.text);
    this.text.setOrigin(0.5);

    const gradient = this.text.context.createLinearGradient(
      0,
      0,
      0,
      this.text.height,
    );
    gradient.addColorStop(0, '#CCFFFE');
    gradient.addColorStop(1, '#05F2DB');
    this.text.setFill(gradient);
  }
  protected createRestartButton(): void {
    this.restart = new MenuButton(this.scene, {
      text: 'Restart Game',
    });
    this.add(this.restart);
    this.restart.x = this.width * 0.5;
    this.restart.y = this.height * 0.5;
    this.restart.setInteractive();
  }
  protected createQuitButton(): void {
    this.restart = new MenuButton(this.scene, {
      text: 'Quit',
    });
    this.add(this.restart);
    this.quit.x = this.width * 0.5;
    this.quit.y = this.height * 0.6;
    this.quit.setInteractive();
  }
  protected createCancel(): void {
    this.cancel = new MenuButton(this.scene, {
      text: 'Cancel',
    });
    this.add(this.cancel);
    this.cancel.x = this.width * 0.5;
    this.cancel.y = this.height * 0.9;
    this.cancel.setInteractive();
  }
}
