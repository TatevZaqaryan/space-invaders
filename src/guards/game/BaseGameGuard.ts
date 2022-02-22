import { Guard } from '@rollinsafary/mvc';
import { GameVOProxy } from '../../model/game/GameVOProxy';

export abstract class BaseGameGuard extends Guard {
  get gameVOProxy(): GameVOProxy {
    return this.facade.retrieveProxy(GameVOProxy.NAME);
  }
}
