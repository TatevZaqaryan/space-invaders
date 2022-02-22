import { BaseGameGuard } from './BaseGameGuard';

export default class EnemiesMissingGuard extends BaseGameGuard {
  public approve(notificationName?: string, ...args: any[]): boolean {
    return this.gameVOProxy.vo.enemies.length < 5;
  }
}
