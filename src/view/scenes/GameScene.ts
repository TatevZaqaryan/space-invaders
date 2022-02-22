import { MultiAtlases } from '../../assets';
import { EnemiesView } from '../component/game/enemy/EnemiesView';
import { Player } from '../component/game/player/Player';
import { loopRunnable } from '../utils/phaser/TimeUtils';
import { BackgroundScene } from './BackgroundScene';

export default class GameScene extends BackgroundScene {
  public static NAME: string = 'GameScene';
  public static UPDATE_ENEMIES_EVENT: string = 'updateEnemies';
  public static KEY_TYPED_EVENT: string = 'keyTyped';
  public static SETTINGS_BUTTON_CLICKED_EVENT: string = 'settingsButtonClicked';
  public static UPDATE_ENEMIES: string = `${GameScene.NAME}UpdateEnemies`;
  public static KEY_TYPED: string = `${GameScene.NAME}KeyTyped`;
  public static SETTINGS_BUTTON_CLICKED_NOTIFICATION: string = `${GameScene.NAME}SettingsButtonClicked`;

  protected enemy: EnemiesView;
  protected player: Player;
  protected footer: Phaser.GameObjects.Image;
  protected hider: Phaser.GameObjects.Image;
  protected settingsIcon: Phaser.GameObjects.Image;
  protected updateRunnable: Phaser.Time.TimerEvent;

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
    this.checkBounds();
    this.startUpdate();
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
    this.footer.setDepth(0.01);
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
    this.hider.setDepth(1);
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
    this.input.keyboard.on(
      Phaser.Input.Keyboard.Events.ANY_KEY_DOWN,
      this.onKeyDown,
      this,
    );
  }
  protected checkBounds(): void {
    console.log('hello');
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

  protected startUpdate(): void {
    this.updateRunnable = loopRunnable(this, 100, this.updateEvent, this);
  }

  protected updateEvent(): void {
    this.events.emit(GameScene.UPDATE_ENEMIES_EVENT);
  }

  protected onKeyDown(event: KeyboardEvent): void {
    if (event.key.length > 1) {
      return;
    }
    this.events.emit(GameScene.KEY_TYPED_EVENT, event.key);
  }
}
