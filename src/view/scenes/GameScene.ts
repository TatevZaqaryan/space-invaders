import { MultiAtlases } from '../../assets';
import BaseScene from './BaseScene';

export default class GameScene extends BaseScene {
  protected background: Phaser.GameObjects.Image;
  protected border: Phaser.GameObjects.Image;
  protected rocket: Phaser.GameObjects.Image;
  protected footer: Phaser.GameObjects.Image;
  protected hider: Phaser.GameObjects.Image;

  constructor() {
    super(GameScene.name);
  }
  public create() {
    this.createBackground();
  }

  public cleanUp(): void {}

  protected createBackground(): void {
    this.creatFillBackground();
    this.createFooter();
    this.createBorder();
    this.updateBackground();
  }

  protected createBorder(): void {
    this.border = this.make.image({
      x: this.width * 0.5,
      y: this.height * 0.5,
      key: MultiAtlases.Scene.Atlas.Name,
      frame: MultiAtlases.Scene.Atlas.Frames.SceneBorderBackround,
    });
    this.add.existing(this.border);
  }

  protected creatFillBackground(): void {
    this.background = this.make.image({
      x: this.width * 0.5,
      y: this.height * 0.5,
      key: MultiAtlases.Scene.Atlas.Name,
      frame: MultiAtlases.Scene.Atlas.Frames.SceneBackround,
    });
    this.add.existing(this.background);
  }

  protected createRocket(): void {
    this.rocket = this.make.image({
      x: this.width * 0.5,
      y: this.height * 0.5 + 300,
      key: MultiAtlases.Weapons.Atlas.Name,
      frame: MultiAtlases.Weapons.Atlas.Frames.WeaponsRocket,
    });
    this.add.existing(this.rocket);
  }

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
  }
  private updateBackground(): void {
    this.background.height = -this.height - Math.abs(this.camera.scrollY);
  }
  get camera(): Phaser.Cameras.Scene2D.Camera {
    return this.cameras.main;
  }
}
