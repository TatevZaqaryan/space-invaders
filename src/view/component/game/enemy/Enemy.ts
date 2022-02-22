import { MultiAtlases } from '../../../../assets';
import { IEnemy } from '../../../../model/game/GameVO';
import BaseScene from '../../../scenes/BaseScene';
import GameScene from '../../../scenes/GameScene';
import EnemyLabel from './EnemyLabel';

export default class Enemy extends Phaser.GameObjects.Container {
  public scene: GameScene;
  public config: IEnemy;
  protected skin: Phaser.GameObjects.Image;
  protected label: EnemyLabel;

  constructor(scene: BaseScene, config: IEnemy) {
    super(scene);
    this.config = config;
    this.createComponents();
  }

  public updateByConfig(): void {
    this.label.updateByConfig();
    if (this.config.left.length === 0) {
      this.dye();
    }
  }

  public update(time?: number, delta?: number): void {
    super.update(time, delta);
    this.y += this.config.velocity;
    this.y > this.scene.height * 0.88 && this.destroy();
  }

  protected createComponents(): void {
    this.createSkin();
    this.setSize(this.skin.width, this.skin.height);
    this.createLabel();
  }

  protected createSkin(): void {
    const randomIndex: number = Phaser.Math.Between(0, 3);
    this.skin = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Characters.Atlas.Name,
      frame: (MultiAtlases.Characters.Atlas.Frames as any)[
        `CharactersEnemy${randomIndex}`
      ],
    });
    this.add(this.skin);
  }

  protected createLabel(): void {
    this.label = new EnemyLabel(this.scene, this.config);
    this.add(this.label);
    this.label.y = -this.height * 0.5 - this.label.height * 0.5 - 10;
  }

  protected dye(): void {
    this.destroy();
  }
}
