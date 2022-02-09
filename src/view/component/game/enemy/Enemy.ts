import { MultiAtlases } from '../../../../assets';
import BaseScene from '../../../scenes/BaseScene';
import GameScene from '../../../scenes/GameScene';

export default class Enemy extends Phaser.GameObjects.Container {
  public scene: GameScene;
  protected enemy: Phaser.GameObjects.Image;
  protected textBackground: Phaser.GameObjects.Image;
  protected text: Phaser.GameObjects.Text;

  constructor(scene: BaseScene) {
    super(scene);
    this.createComponents();
  }
  protected createComponents(): void {
    this.createEnemy();
    this.creteTextBackground();
    this.createText();
  }
  public createEnemy(): void {
    const randomIndex: number = Phaser.Math.Between(0, 3);

    this.enemy = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Characters.Atlas.Name,
      frame: (MultiAtlases.Characters.Atlas.Frames as any)[
        `CharactersEnemy${randomIndex}`
      ],
    });
    this.add(this.enemy);
  }
  protected creteTextBackground(): void {
    this.textBackground = this.scene.make.image({
      x: this.enemy.x,
      y: this.enemy.y + 50,
      key: MultiAtlases.Board.Atlas.Name,
      frame: MultiAtlases.Board.Atlas.Frames.BoardTextBoard,
    });
    this.add(this.textBackground);
  }

  protected createText(): void {
    // textLoad.request().then((words: string[]) => {
    //   console.log(words.length);
    //   let min = Math.random() * 200;
    //   let max = Math.random() * 800;
    //   let number = Phaser.Math.Between(min, max);
    //   const style: Phaser.Types.GameObjects.Text.TextStyle = {
    //     fontSize: '22 px',
    //     align: 'center',
    //   };
    //   this.text = this.scene.make.extText({
    //     x: this.textBackground.x,
    //     y: this.textBackground.y,
    //     text: `${words[number]}`,
    //     style,
    //   });
    //   this.add(this.text);
    //   this.text.setAlign('center');
    // });
  }
}
