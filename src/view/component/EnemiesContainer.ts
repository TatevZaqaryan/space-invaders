import { MultiAtlases } from '../../assets';
import { GameScene } from '../scenes/GameScene';
import { Enemies } from './game/Enemy';

export class EnemiesContainer extends Phaser.GameObjects.Container {
  public scene: GameScene;
  public enemy: Enemies;
  constructor(scene: Phaser.Scene) {
    super(scene);
  }
  protected createComponents(): void {}
  protected createEnemies(frame: MultiAtlases.Enemy.Atlas.Frames): void {
    this.enemy = new Enemies(this.scene);

    this.enemy.setTexture(MultiAtlases.Enemy.Atlas.Name, frame);
    this.add(this.enemy);
  }
}
