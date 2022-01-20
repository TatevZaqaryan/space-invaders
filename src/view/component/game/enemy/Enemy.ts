import { MultiAtlases } from '../../../../assets';
import BaseScene from '../../../scenes/BaseScene';
import GameScene from '../../../scenes/GameScene';

export default class Enemy extends Phaser.GameObjects.Image {
  public scene: GameScene;
  constructor(scene: BaseScene) {
    const randomIndex: number = Phaser.Math.Between(0, 3);
    super(
      scene,
      0,
      0,
      MultiAtlases.Characters.Atlas.Name,
      (MultiAtlases.Characters.Atlas.Frames as any)[
        `CharactersEnemy${randomIndex}`
      ],
    );
  }
}
