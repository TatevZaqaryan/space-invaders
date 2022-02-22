import { BaseGameGuard } from './BaseGameGuard';

export default class TargetExistsGuard extends BaseGameGuard {
  public approve(
    notificationName?: string,
    ...args: any[]
  ): boolean | Promise<boolean> {
    return !!this.gameVOProxy.vo.target;
  }
}
