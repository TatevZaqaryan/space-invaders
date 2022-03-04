import { Fonts, MultiAtlases } from '../../../assets';
import BaseScene from '../../scenes/BaseScene';
import GameScene from '../../scenes/GameScene';

export default class HeaderView extends Phaser.GameObjects.Container {
  public static NAME: string = 'HeaderView';
  public static SETTINGS_BUTTON_CLICKED_EVENT: string = 'settingsButtonClicked';
  public static SETTINGS_BUTTON_CLICKED_NOTIFICATION: string = `${HeaderView.NAME}SettingsButtonClicked`;
  public scene: GameScene;
  protected settingsIcon: Phaser.GameObjects.Image;
  protected muteMusicIcon: Phaser.GameObjects.Image;
  protected unMuteMusicIcon: Phaser.GameObjects.Image;
  protected life: Phaser.GameObjects.Image;
  protected hider: Phaser.GameObjects.Image;
  protected notLife: Phaser.GameObjects.Image;
  protected levelText: Phaser.GameObjects.Text;
  protected level: Phaser.GameObjects.Image;

  constructor(scene: BaseScene) {
    super(scene);
    this.createComponents();
    this.scene.add.existing(this);
    console.warn('hasanq');
  }
  protected createComponents(): void {
    this.createHeader();
    this.createMuteMusicIcon();
    this.createUnMuteMusicIcon();
    this.createLife(this.scene.width * 0.1 + 50);
    this.createLevelText();
    this.createLevelIcon();
    this.createSettingsIcon();
    console.warn('barev garun');
  }
  protected createHeader(): void {
    this.hider = this.scene.make.image({
      x: this.scene.width * 0.5,
      y: this.scene.height * 0.1 - 100,
      key: MultiAtlases.Board.Atlas.Name,
      frame: MultiAtlases.Board.Atlas.Frames.BoardFooterHeader,
    });
    this.add(this.hider);

    this.hider.setScale(2.6);
    this.hider.setDepth(1);
  }
  protected createMuteMusicIcon(): void {
    this.muteMusicIcon = this.scene.make.image({
      x: 100,
      y: 100,
      key: MultiAtlases.Icon.Atlas.Name,
      frame: MultiAtlases.Icon.Atlas.Frames.IconMute,
    });
    this.add(this.muteMusicIcon);
    this.muteMusicIcon.setDepth(1);
    this.muteMusicIcon.setInteractive();
    this.muteMusicIcon.setScale(1.5);
  }
  protected createUnMuteMusicIcon(): void {
    this.unMuteMusicIcon = this.scene.make.image({
      x: 100,
      y: 100,
      key: MultiAtlases.Icon.Atlas.Name,
      frame: MultiAtlases.Icon.Atlas.Frames.IconUnmute,
    });
    this.add(this.unMuteMusicIcon);
    this.unMuteMusicIcon.setDepth(1);
    this.unMuteMusicIcon.setVisible(false);
    this.unMuteMusicIcon.setInteractive();
    this.unMuteMusicIcon.setScale(1.5);
  }
  protected createLife(x: number): void {
    for (let i = 0; i < 3; i++) {
      x += 50;
      this.createLifeIcon(x);
      this.createNotLifeIcon(x);
    }
  }
  protected createLifeIcon(x: number): void {
    this.life = this.scene.make.image({
      x: x,
      y: 100,
      key: MultiAtlases.Information.Atlas.Name,
      frame: MultiAtlases.Information.Atlas.Frames.InformationLife,
    });
    this.add(this.life);
    this.life.setDepth(1);
    this.life.setInteractive();
    this.life.setScale(1.5);
  }
  protected createNotLifeIcon(x: number): void {
    this.notLife = this.scene.make.image({
      x: x,
      y: 100,
      key: MultiAtlases.Information.Atlas.Name,
      frame: MultiAtlases.Information.Atlas.Frames.InformationNotLife,
    });
    this.add(this.notLife);
    this.notLife.setDepth(1);
    this.notLife.setVisible(false);
    this.notLife.setInteractive();
    this.notLife.setScale(1.5);
  }
  protected createLevelText() {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '25px',
      fontFamily: Fonts.Bold.Name,
    };
    this.levelText = this.scene.make.text({
      x: this.scene.width * 0.6,
      y: 100,
      text: 'Level',
      style,
    });
    this.add(this.levelText);
    this.levelText.setDepth(1);
    this.levelText.setOrigin(1, 0.5);
  }
  protected createLevelIcon(): void {
    this.level = this.scene.make.image({
      x: this.scene.width * 0.6 + 50,
      y: 100,
      key: MultiAtlases.Information.Atlas.Name,
      frame: MultiAtlases.Information.Atlas.Frames.InformationLevel,
    });
    this.add(this.level);
    this.level.setDepth(1);
  }
  protected createSettingsIcon(): void {
    this.settingsIcon = this.scene.make.image({
      x: this.scene.width - 100,
      y: 100,
      key: MultiAtlases.Icon.Atlas.Name,
      frame: MultiAtlases.Icon.Atlas.Frames.IconSettings,
    });
    this.add(this.settingsIcon);
    this.settingsIcon.setDepth(1);
    this.settingsIcon.setInteractive();
    this.settingsIcon.setScale(1.5);
  }

  protected setListeners(): void {
    this.settingsIcon.on(
      Phaser.Input.Events.POINTER_UP,
      this.onSettingsButtonClicked,
      this,
    );
  }
  protected onSettingsButtonClicked(): void {
    this.scene.events.emit(HeaderView.SETTINGS_BUTTON_CLICKED_EVENT);
  }
}
