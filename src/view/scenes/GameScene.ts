import { MultiAtlases } from '../../assets';
import { BackgroundScene } from './BackgroundScene';

export default class GameScene extends BackgroundScene {
  protected footer: Phaser.GameObjects.Image;
  protected hider: Phaser.GameObjects.Image;

  constructor() {
    super(GameScene.name);
  }
  public create() {
    this.createBackground();
    this.createStars();
    this.createBackgroundBorder();
    this.createBorder();
    // this.createFooter();
  }

  public cleanUp(): void {}

  protected createFooter(): void {
    this.footer = this.make.image({
      x: this.width * 0.5,
      y: this.height * 0.5 + 390,
      key: MultiAtlases.Board.Atlas.Name,
      frame: MultiAtlases.Board.Atlas.Frames.BoardFooterHeader,
    });
    this.add.existing(this.footer);
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
