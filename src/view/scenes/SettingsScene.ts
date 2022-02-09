import { Fonts } from '../../assets';
import { MenuButton } from '../button/MenuButton';
import { Levels } from '../settings/Levels';
import { Music } from '../settings/Music';
import { TextSize } from '../settings/TextSize';
import { BackgroundScene } from './BackgroundScene';

export default class SettingsScene extends BackgroundScene {
  public static NAME: string = 'SettingsScene';
  protected text: Phaser.GameObjects.Text;
  protected levels: Levels;
  protected textSize: TextSize;
  protected musicCheckbox: Music;
  protected saveButton: MenuButton;
  protected cancelButton: MenuButton;
  constructor() {
    super(SettingsScene.name);
  }
  public create(): void {
    this.createBackground();
    this.createBackgroundBorder();
    this.createBorder();
    this.createText();
    this.createLevels();
    this.createTextSize();
    this.createMusicCheckbox();
    this.creteSaveButton();
    this.creteCancelButton();
  }
  protected createText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '60px',
      fontFamily: Fonts.Bold.Name,
    };
    this.text = this.make.text({
      x: this.width * 0.5,
      y: this.height * 0.3,
      text: 'Settings',
      style,
    });
    this.add.existing(this.text);
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
  protected createLevels(): void {
    this.levels = new Levels(this);
    this.add.existing(this.levels);
    this.levels.x = this.width * 0.1;
    this.levels.y = this.height * 0.5;
  }
  protected createTextSize(): void {
    this.textSize = new TextSize(this);
    this.add.existing(this.textSize);
    this.textSize.x = this.width * 0.1;
    this.textSize.y = this.height * 0.6;
  }
  protected createMusicCheckbox(): void {
    this.musicCheckbox = new Music(this);
    this.add.existing(this.musicCheckbox);
    this.musicCheckbox.x = this.width * 0.1;
    this.musicCheckbox.y = this.height * 0.7;
  }
  protected creteSaveButton(): void {
    this.saveButton = new MenuButton(this, {
      text: 'Save',
    });

    this.add.existing(this.saveButton);
    this.saveButton.x = this.width * 0.5;
    this.saveButton.y = this.height * 0.8;
    this.saveButton.setInteractive();
  }
  protected creteCancelButton(): void {
    this.cancelButton = new MenuButton(this, {
      text: 'Cancel',
    });

    this.add.existing(this.cancelButton);
    this.cancelButton.x = this.width * 0.5;
    this.cancelButton.y = this.height * 0.9;
    this.cancelButton.setInteractive();
  }
}
