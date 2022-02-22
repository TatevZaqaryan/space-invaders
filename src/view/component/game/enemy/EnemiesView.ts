import { IEnemy } from '../../../../model/game/GameVO';
import { pickAny } from '../../../../utils/Utils';
import BaseScene from '../../../scenes/BaseScene';
import GameScene from '../../../scenes/GameScene';
import Enemy from './Enemy';
export class EnemiesView extends Phaser.GameObjects.Container {
  public static NAME: string = 'EnemiesView';
  public static ENEMY_DESTROYED_EVENT: string = 'enemyDestroyed';
  public static ENEMY_DESTROYED: string = `${EnemiesView.NAME}EnemyDestroyed`;
  public scene: GameScene;
  public enemies: Enemy[] = [];

  protected startY: number = this.scene.height * 0.85;
  protected stopY: number = this.scene.height * 0.45;
  protected speedY: number = Phaser.Math.Between(2, 4);
  protected points: Phaser.Geom.Point[];

  constructor(scene: BaseScene) {
    super(scene, 0, 0);
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    this.scene.add.existing(this);
  }

  public findEnemy(key: string): IEnemy {
    const sorted = this.enemies.sort((a, b) => b.y - a.y);
    return sorted.find((enemy) => enemy.config.word.startsWith(key))?.config;
  }

  public updateEnemy(id: string): void {
    const enemy = this.enemies.find((enemy) => enemy.config.id === id);
    if (!enemy) {
      return;
    }
    enemy.updateByConfig();
  }

  public update(time: number, delta: number): void {
    super.update(time, delta);
    this.updateEnemies(time, delta);
  }

  public createEnemies(configs: IEnemy[]): void {
    const line: Phaser.Geom.Line = new Phaser.Geom.Line(
      this.scene.width * 0.1,
      0,
      this.scene.width,
      0,
    );
    let points = line.getPoints(configs.length + 1);
    points.shift();

    for (const config of configs) {
      const point = pickAny(points);
      points.remove(point);
      this.createEnemy(config, point.x);
    }
    for (let i: number; i <= this.enemies.length; i++) {
      this.distanceTwoEnemies(this.enemies[i], this.enemies[i + 1]);
      console.warn('garun e galis');
    }
  }

  protected createEnemy(config: IEnemy, x: number): void {
    const enemy = new Enemy(this.scene, config);
    enemy.x = Phaser.Math.Between(
      this.scene.width * 0.1,
      this.scene.width * 0.9,
    );
    enemy.y = -Phaser.Math.Between(0, this.scene.height * 0.2);
    console.warn(config.word, enemy.x, enemy.y);

    enemy.once(
      Phaser.GameObjects.Events.DESTROY,
      this.onEnemyDestroyed.bind(this, enemy),
    );
    this.add(enemy);
    this.enemies.push(enemy);
  }
  protected distanceTwoEnemies(body1: Enemy, body2: Enemy): void {
    const distance = Math.sqrt(
      Math.pow(body2.x - body1.x, 2) + Math.pow(body2.y - body1.y, 2),
    );
    if (distance < body1.width + 150) {
      body1.destroy();
    }
  }
  protected updateEnemies(time: number, delta: number): void {
    for (const enemy of this.enemies) {
      enemy.update(time, delta);
    }
  }

  protected onEnemyDestroyed(enemy: Enemy): void {
    this.enemies.remove(enemy);
    this.emit(EnemiesView.ENEMY_DESTROYED_EVENT, enemy.config.id);
  }

  get spawningRectangle(): Phaser.Geom.Rectangle {
    return new Phaser.Geom.Rectangle(
      this.width * 0.05,
      -this.height * 0.2,
      this.scene.width * 0.9,
      0,
    );
  }
}
