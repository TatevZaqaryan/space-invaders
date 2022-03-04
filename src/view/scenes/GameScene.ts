import { EnemiesView } from '../component/game/enemy/EnemiesView';
import { Player } from '../component/game/player/Player';
import { loopRunnable } from '../utils/phaser/TimeUtils';
import { BackgroundScene } from './BackgroundScene';

export default class GameScene extends BackgroundScene {
  public static NAME: string = 'GameScene';
  public static UPDATE_ENEMIES_EVENT: string = 'updateEnemies';
  public static KEY_TYPED_EVENT: string = 'keyTyped';

  public static UPDATE_ENEMIES: string = `${GameScene.NAME}UpdateEnemies`;
  public static KEY_TYPED: string = `${GameScene.NAME}KeyTyped`;

  protected enemy: EnemiesView;
  protected player: Player;
  protected footer: Phaser.GameObjects.Image;
  protected hider: Phaser.GameObjects.Image;

  protected updateRunnable: Phaser.Time.TimerEvent;

  constructor() {
    super(GameScene.name);
  }
  public create() {
    this.createBackground();
    this.createStars();
    this.createBackgroundBorder();

    this.createBorder();
    this.checkBounds();
    this.startUpdate();
    this.setListeners();
  }

  public cleanUp(): void {}

  protected setListeners(): void {
    this.input.keyboard.on(
      Phaser.Input.Keyboard.Events.ANY_KEY_DOWN,
      this.onKeyDown,
      this,
    );
  }
  protected checkBounds(): void {
    console.log('hello');
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
