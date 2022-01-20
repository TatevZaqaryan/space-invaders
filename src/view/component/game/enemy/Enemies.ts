import BaseScene from '../../../scenes/BaseScene';
import GameScene from '../../../scenes/GameScene';
import Enemy from './Enemy';

export class Enemies extends Phaser.GameObjects.Container {
  public scene: GameScene;
  public enemies: Enemy[];

  constructor(scene: BaseScene) {
    super(scene);
  }

  public createEnemy(): void {
    if (!this.enemies) {
      this.enemies = [];
    }
    const enemy = new Enemy(this.scene);
    this.enemies.push(enemy);
    this.add(enemy);
  }
}
