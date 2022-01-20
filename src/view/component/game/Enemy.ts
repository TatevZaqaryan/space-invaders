import { MultiAtlases } from '../../../assets';
import BaseScene from '../../scenes/BaseScene';
import { GameScene } from '../../scenes/GameScene';

export class Enemy extends Phaser.GameObjects.Image {
  public scene: GameScene;
  constructor(scene: BaseScene) {
    super(scene, 0, 0, MultiAtlases.Enemy.Atlas.Name, null);
  }
}
