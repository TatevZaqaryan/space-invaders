import { MultiAtlases } from '../../assets';
import { BackgroundScene } from './BackgroundScene';

export default class GameScene extends BackgroundScene {
  public static NAME: string = 'GameScene';
  protected footer: Phaser.GameObjects.Image;
  protected hider: Phaser.GameObjects.Image;
  protected settingsIcon: Phaser.GameObjects.Image;
  public static SETTINGS_BUTTON_CLICKED_EVENT: string = 'settingsButtonClicked';
  public static SETTINGS_BUTTON_CLICKED_NOTIFICATION: string = `${GameScene.NAME}SettingsButtonClicked`;
  constructor() {
    super(GameScene.name);
  }
  public create() {
    this.createBackground();
    this.createStars();
    this.createBackgroundBorder();
    this.createFooter();
    this.createHider();
    this.createBorder();
    this.createSettingsIcon();
    this.setListeners();
  }

  public cleanUp(): void {}

  protected createFooter(): void {
    this.footer = this.make.image({
      x: this.width * 0.5,
      y: this.height * 0.9 + 100,
      key: MultiAtlases.Board.Atlas.Name,
      frame: MultiAtlases.Board.Atlas.Frames.BoardFooterHeader,
    });
    this.add.existing(this.footer);
    this.footer.height * 0.9;
    this.footer.setScale(2.6);
  }
  protected createHider(): void {
    this.hider = this.make.image({
      x: this.width * 0.5,
      y: this.height * 0.1 - 100,
      key: MultiAtlases.Board.Atlas.Name,
      frame: MultiAtlases.Board.Atlas.Frames.BoardFooterHeader,
    });
    this.add.existing(this.hider);
    this.hider.height * 0.9;
    this.hider.setScale(2.6);
  }
  protected createSettingsIcon(): void {
    this.settingsIcon = this.make.image({
      x: this.width - 100,
      y: 100,
      key: MultiAtlases.Icon.Atlas.Name,
      frame: MultiAtlases.Icon.Atlas.Frames.IconSettings,
    });
    this.add.existing(this.settingsIcon);
    this.settingsIcon.setInteractive();
  }
  protected setListeners(): void {
    this.settingsIcon.on(
      Phaser.Input.Events.POINTER_UP,
      this.onSettingsButtonClicked,
      this,
    );
  }

  protected onSettingsButtonClicked(): void {
    this.events.emit(GameScene.SETTINGS_BUTTON_CLICKED_EVENT);
  }
  public update(time: number, delta: number): void {
    super.update(time, delta);
    this.updateStars();
  }

  protected updateStars(): void {
    const newHeight: number = (this.stars.height - 10) % this.height;
    this.stars.height = -this.height + newHeight;
  }
}
