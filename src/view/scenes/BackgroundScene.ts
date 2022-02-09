import { NinePatch } from '@rollinsafary/phaser3-ninepatch-plugin';
import { MultiAtlases } from '../../assets';
import BaseScene from './BaseScene';

export class BackgroundScene extends BaseScene {
  protected background: Phaser.GameObjects.Image;
  protected stars: Phaser.GameObjects.TileSprite;
  protected backgroundBorder: NinePatch;
  protected border: NinePatch;

  public create() {
    this.createBackground();
    this.createStars();
    this.createBackgroundBorder();
    this.createBorder();
  }

  protected createBackground(): void {
    this.background = this.make.image({
      x: this.width * 0.5,
      y: this.height * 0.5,
      key: MultiAtlases.Scene.Atlas.Name,
      frame: MultiAtlases.Scene.Atlas.Frames.SceneBackground,
    });
    this.add.existing(this.background);
  }

  protected createStars(): void {
    this.stars = this.make.tileSprite({
      x: 0,
      y: 0,
      key: MultiAtlases.Scene.Atlas.Name,
      frame: MultiAtlases.Scene.Atlas.Frames.SceneStars,
      width: this.width,
      height: -this.height,
    });
    this.add.existing(this.stars);
    this.stars.setOrigin(0, 1);
  }

  protected createBackgroundBorder(): void {
    this.backgroundBorder = this.make.ninePatch({
      x: this.width * 0.5,
      y: this.height * 0.5,
      key: MultiAtlases.Scene.Atlas.Name,
      frame: MultiAtlases.Scene.Atlas.Frames.SceneBackgroundBorder,
      width: this.width,
      height: this.height,
    });
    this.add.existing(this.backgroundBorder);
  }
  protected createBorder(): void {
    this.border = this.make.ninePatch({
      x: this.width * 0.5,
      y: this.height * 0.5,
      key: MultiAtlases.Scene.Atlas.Name,
      frame: MultiAtlases.Scene.Atlas.Frames.SceneBoarder,
      width: this.width,
      height: this.height,
    });
    this.add.existing(this.border);
  }
}
