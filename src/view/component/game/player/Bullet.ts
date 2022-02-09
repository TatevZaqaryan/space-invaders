import { MultiAtlases } from '../../../../assets';
import BaseScene from '../../../scenes/BaseScene';

export class Bullet extends Phaser.GameObjects.Sprite {
  protected bullet: Phaser.GameObjects.Image;
  protected space: Phaser.Input.Keyboard.Key;
  protected bulletVelocity: number = 3;

  public uuid: string;
  constructor(scene: BaseScene) {
    super(
      scene,
      0,
      0,
      MultiAtlases.Weapons.Atlas.Name,
      MultiAtlases.Weapons.Atlas.Frames.WeaponsBullet,
    );
    this.uuid = Phaser.Utils.String.UUID();

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    this.setListener();
  }
  public update(time: number, delta: number): void {
    super.update(time, delta);
    this.handleKeys();
  }

  protected handleKeys(): void {}

  protected setListener(): void {}
}
