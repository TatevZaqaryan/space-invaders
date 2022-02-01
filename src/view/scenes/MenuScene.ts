import { Fonts, MultiAtlases } from '../../assets';
import { MenuButton } from '../button/MenuButton';
import { BackgroundScene } from './BackgroundScene';

export default class MenuScene extends BackgroundScene {
  public static NAME: string = 'MenuScene';

  public static START_BUTTON_CLICKED_EVENT: string = 'startButtonClicked';
  public static START_BUTTON_CLICKED_NOTIFICATION: string = `${MenuScene.NAME}StartButtonClicked`;
  protected text: Phaser.GameObjects.Text;
  protected createContinueText: Phaser.GameObjects.Text;
  protected createStartText: Phaser.GameObjects.Text;
  protected startButton: MenuButton;
  protected continueButton: MenuButton;
  protected liederButton: MenuButton;
  protected star: Phaser.GameObjects.Image;

  protected settingsIcon: Phaser.GameObjects.Image;

  constructor() {
    super(MenuScene.name);
  }
  public create(): void {
    this.createBackground();
    this.createBackgroundBorder();
    this.createStars();
    this.createBorder();

    this.createSettingsIcon();
    this.createText();
    this.createStartButton();
    this.createContinueButton();
    this.creatLiederBoardButton();
    this.setListeners();
  }

  protected createText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '60px',
      fontFamily: Fonts.Bold.Name,
    };
    this.text = this.make.text({
      x: this.width * 0.5,
      y: this.height * 0.3,
      text: 'TypeSpace',
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
  protected createStartButton(): void {
    this.startButton = new MenuButton(this, {
      text: 'Start New Game',
    });
    this.add.existing(this.startButton);
    this.startButton.x = this.width * 0.5;
    this.startButton.y = this.height * 0.5;
    this.startButton.setInteractive();
  }

  protected createContinueButton(): void {
    this.continueButton = new MenuButton(this, {
      text: 'Continue Game',
    });
    this.add.existing(this.continueButton);
    this.continueButton.x = this.width * 0.5;
    this.continueButton.y = this.height * 0.6;
    this.continueButton.setInteractive();
  }
  protected creatLiederBoardButton(): void {
    this.liederButton = new MenuButton(this, {
      text: 'LiederBoard',
    });
    this.add.existing(this.liederButton);
    this.liederButton.x = this.width * 0.5;
    this.liederButton.y = this.height * 0.7;
    this.liederButton.setInteractive();
  }

  protected createSettingsIcon(): void {
    this.settingsIcon = this.make.image({
      x: this.width - 80,
      y: this.height - 100,
      key: MultiAtlases.Icon.Atlas.Name,
      frame: MultiAtlases.Icon.Atlas.Frames.IconSetings,
    });
    this.add.existing(this.settingsIcon);
  }

  protected setListeners(): void {
    this.startButton.on(
      Phaser.Input.Events.POINTER_UP,
      this.onStartButtonClick,
      this,
    );
    // this.startButton.on(Phaser.Input.Events.POINTER_OVER, this.onOver, this);
  }

  protected onStartButtonClick(): void {
    this.events.emit(MenuScene.START_BUTTON_CLICKED_EVENT);
  }
}
