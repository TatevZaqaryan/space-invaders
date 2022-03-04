import { Proxy } from '@rollinsafary/mvc';
import { GameVO, IEnemy } from './GameVO';

export class GameVOProxy extends Proxy<GameVO> {
  public static NAME: string = 'GameVOProxy';
  public static REGISTERED: string = `${GameVOProxy.NAME}Registered`;
  public static ENEMIES_CREATED: string = `${GameVOProxy.NAME}EnemiesCreated`;
  public static SHOT_APPLIED: string = `${GameVOProxy.NAME}ShotApplied`;
  public static STATISTICS_UPDATED: string = `${GameVOProxy.NAME}StatisticsUpdated`;

  constructor() {
    super(GameVOProxy.NAME, new GameVO());
  }
  public onRegister(): void {
    this.sendNotification(GameVOProxy.REGISTERED);
  }

  public createEnemies(words: string[]): void {
    const enemies: IEnemy[] = [];
    for (const word of words) {
      const config: IEnemy = {
        id: Phaser.Utils.String.UUID(),
        word,
        left: word,
        velocity: Phaser.Math.Between(1, 2),
      };
      enemies.push(config);
    }
    this.vo.enemies.push(...enemies);
    this.sendNotification(GameVOProxy.ENEMIES_CREATED, enemies);
  }

  public removeEnemy(id: string): void {
    const enemy: IEnemy = this.getEnemyById(id);
    this.vo.enemies.remove(enemy);
    if (this.vo.target?.id === id) {
      this.vo.target = null;
    }
  }

  public setTarget(enemy: IEnemy): void {
    this.vo.target = enemy;
  }

  public applyShot(key: string): void {
    if (this.vo.target.left[0] === key) {
      this.vo.target.left = this.vo.target.left.substring(1);
      this.incrementScore();
      this.sendNotification(GameVOProxy.SHOT_APPLIED);
    } else {
      this.incrementMistakes();
    }
    this.sendNotification(GameVOProxy.STATISTICS_UPDATED);
  }

  public incrementScore(): void {
    this.vo.statistics.score++;
  }

  public incrementMistakes(): void {
    this.vo.statistics.missed++;
  }

  public incrementShots(): void {
    this.vo.statistics.shots++;
  }

  public getEnemyById(id: string): IEnemy {
    return this.vo.enemies.find((enemy: IEnemy) => enemy.id === id);
  }

  public getPlayer() {
    this.vo.player.life;
  }
}
