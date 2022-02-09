import { MultiAtlases } from '../../../../assets';
import GameScene from '../../../scenes/GameScene';
import { Bullet } from './Bullet';

export class Player extends Phaser.GameObjects.Container {
  public scene: GameScene;
  protected skin: Phaser.GameObjects.Sprite;
  protected left: Phaser.Input.Keyboard.Key;
  protected right: Phaser.Input.Keyboard.Key;
  protected speedX: number = 10;
  protected speedY: number = 3;
  protected bullets: Bullet[] = [];
  protected space: Phaser.Input.Keyboard.Key;
  protected bulletVelocity: number = Phaser.Math.Between(3, 5);

  constructor(scene: Phaser.Scene) {
    super(scene);
    this.createComponents();
    this.x = this.scene.width / 2;
    this.y = this.scene.height - this.height * 1.2;
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

    this.scene.add.existing(this);
    this.setListeners();
  }

  protected createComponents(): void {
    this.createSkin();
    //this.createBullet();

    this.setSize(this.skin.width, this.skin.height);
  }
  public update(time: number, delta: number): void {
    super.update(time, delta);
    this.handleKeys();
    !!this.bullets.length && this.checkVelocity();
  }

  protected createSkin(): void {
    this.skin = this.scene.make.sprite({
      x: 0,
      y: 0,
      key: MultiAtlases.Weapons.Atlas.Name,
      frame: MultiAtlases.Weapons.Atlas.Frames.WeaponsBullet,
    });
    this.add(this.skin);
  }
  protected createBullet(): void {
    if (!this.bullets) {
      this.bullets = [];
    }
    const bullet = new Bullet(this.scene);
    this.bullets.push(bullet);
    this.add(bullet);
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
      case this.space.isDown:
        this.createBullet();
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
  protected checkVelocity(): void {
    this.bullets.forEach((bullet) => {
      bullet.y -= this.bulletVelocity;
    });
  }
  protected setListeners(): void {
    this.left = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT,
    );
    this.right = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT,
    );
    this.space = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    );
  }
}
