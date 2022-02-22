import TargetExistsGuard from '../../guards/game/TargetExistsGuard';
import BaseGameCommand from './BaseGameCommand';

export default class ApplyShotCommand extends BaseGameCommand {
  public prepare(): void {
    this.addGuards(TargetExistsGuard);
  }
  public execute(notificationName: string, key: string): void {
    this.gameVOProxy.applyShot(key);
  }

  protected onAllGuardsDenied(notificationName?: string, ...args: any[]): void {
    this.gameVOProxy.incrementMistakes();
  }
}
