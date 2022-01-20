import { MultiAtlases } from '../../../assets';
import { GameScene } from '../../scenes/GameScene';

export class Rocket extends Phaser.GameObjects.Container {
  public static NAME: string = 'Rocket';
  public scene: GameScene;
  protected rocket: Phaser.GameObjects.Image;
  constructor(scene: Phaser.Scene) {
    super(scene);
    this.createComponents();
    this.x = this.scene.width / 2;
    this.y = this.scene.height / 2 + 300;
    this.scene.add.existing(this);
    this.setDepth(1);
  }
  protected createComponents(): void {
    this.createRocket();
    this.setSize(this.rocket.width, this.rocket.height);
  }

  protected createRocket(): void {
    this.rocket = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Weapons.Atlas.Name,
      frame: MultiAtlases.Weapons.Atlas.Frames.WeaponsRocket,
    });
    this.add(this.rocket);
  }
}
