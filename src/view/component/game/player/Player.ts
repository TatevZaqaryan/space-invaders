import { MultiAtlases } from '../../../../assets';
import GameScene from '../../../scenes/GameScene';

export class Player extends Phaser.GameObjects.Container {
  public scene: GameScene;
  protected skin: Phaser.GameObjects.Sprite;

  constructor(scene: Phaser.Scene) {
    super(scene);
    this.createComponents();
    this.x = this.scene.width / 2;
    this.y = this.scene.height - this.height * 1.2;
    this.scene.add.existing(this);
  }

  protected createComponents(): void {
    this.createSkin();
    this.setSize(this.skin.width, this.skin.height);
  }

  protected createSkin(): void {
    this.skin = this.scene.make.sprite({
      x: 0,
      y: 0,
      key: MultiAtlases.Weapons.Atlas.Name,
      frame: MultiAtlases.Weapons.Atlas.Frames.WeaponsRocket,
    });
    this.add(this.skin);
  }
}
