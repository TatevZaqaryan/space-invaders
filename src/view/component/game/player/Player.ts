import { MultiAtlases } from '../../../../assets';
import GameScene from '../../../scenes/GameScene';

export class Player extends Phaser.GameObjects.Container {
  public scene: GameScene;
  protected skin: Phaser.GameObjects.Sprite;
  protected left: Phaser.Input.Keyboard.Key;
  protected right: Phaser.Input.Keyboard.Key;
  protected speedX: number = 10;
  protected speedY: number = 3;
  constructor(scene: Phaser.Scene) {
    super(scene);
    this.createComponents();
    this.x = this.scene.width / 2;
    this.y = this.scene.height - this.height * 1.2;

    this.scene.add.existing(this);
    this.setListeners();
  }

  protected createComponents(): void {
    this.createSkin();
    this.setSize(this.skin.width, this.skin.height);
    this.handleKeys();
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

  protected handleKeys(): void {
    if (!this.left || !this.right) {
      return;
    }
    switch (true) {
      case this.left.isDown:
        this.x -= this.speedX;
        break;
      case this.right.isDown:
        this.x += this.speedX;
        break;
    }
    this.limitMovement();
  }
  protected limitMovement(): void {
    if (this.x - this.width * 0.6 < 0) {
      this.x = this.width * 0.6;
    }

    if (this.x + this.width * 0.6 > this.scene.width) {
      this.x = this.scene.width - this.width * 0.6;
    }
  }
  protected setListeners(): void {
    this.left = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT,
    );
    this.right = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT,
    );
  }
}
