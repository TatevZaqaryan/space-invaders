import BaseScene from '../../../scenes/BaseScene';
import GameScene from '../../../scenes/GameScene';
import { loopRunnable } from '../../../utils/phaser/TimeUtils';
import Enemy from './Enemy';
export class Enemies extends Phaser.GameObjects.Container {
  public scene: GameScene;
  public enemies: Enemy[];
  protected startY: number = this.scene.height * 0.85;
  protected stopY: number = this.scene.height * 0.45;
  protected speedY: number = Phaser.Math.Between(3, 5);

  constructor(scene: BaseScene) {
    super(scene);
    this.createEnemy();
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

    loopRunnable(this.scene, 700, this.createEnemy, this, []);
    this.scene.add.existing(this);
  }
  public update(time: number, delta: number): void {
    super.update(time, delta);
    this.checkVelocity();
  }

  public createEnemy(): void {
    if (!this.enemies) {
      this.enemies = [];
    }
    const count = Math.floor(Phaser.Math.Between(2, 4));
    for (let i = 0; i < count; i++) {
      const enemy = new Enemy(this.scene);
      enemy.x = Math.floor(Math.random() * this.scene.width * 0.96);
      enemy.y = Phaser.Math.Between(
        Math.random() * this.scene.height,
        this.stopY,
      );
      this.enemies.push(enemy);
      this.add(enemy);
    }
  }

  protected checkVelocity(): void {
    this.enemies.forEach((element) => {
      element.y += this.speedY;
    });
  }
}
