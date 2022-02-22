import { NinePatch } from '@rollinsafary/phaser3-ninepatch-plugin';
import { Fonts, MultiAtlases } from '../../../../assets';
import { IEnemy } from '../../../../model/game/GameVO';
import BaseScene from '../../../scenes/BaseScene';

export default class EnemyLabel extends Phaser.GameObjects.Container {
  protected background: NinePatch;
  protected unCompleteText: Phaser.GameObjects.Text;
  protected completeText: Phaser.GameObjects.Text;

  constructor(public scene: BaseScene, protected config: IEnemy) {
    super(scene);
    this.createComponents();
  }

  public updateByConfig(): void {
    const typedString: string = this.config.word.substring(
      0,
      this.config.word.length - this.config.left.length,
    );
    this.completeText.setText(typedString);
    this.unCompleteText.setText(this.config.left);
    this.updateTextsPositions();
  }

  protected updateTextsPositions(): void {
    this.unCompleteText.x = this.completeText.x + this.completeText.width;
  }

  protected createComponents(): void {
    this.createBackground();
    this.createUnCompleteText();
    this.createCompleteText();
    this.setSize(this.unCompleteText.width + 20, this.background.height);
    this.background.resize(this.width, this.height);
  }

  protected createBackground(): void {
    const frame: Phaser.Textures.Frame = this.scene.textures.getFrame(
      MultiAtlases.Board.Atlas.Name,
      MultiAtlases.Board.Atlas.Frames.BoardTextBoard,
    );
    this.background = this.scene.make.ninePatch({
      x: 0,
      y: 0,
      key: MultiAtlases.Board.Atlas.Name,
      frame: MultiAtlases.Board.Atlas.Frames.BoardTextBoard,
      width: frame.width,
      height: frame.height,
    });
    this.add(this.background);
  }

  protected createUnCompleteText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontFamily: Fonts.Normal.Name,
      fontSize: '40px',
      color: '#ffffff',
    };
    this.unCompleteText = this.scene.make.text({
      x: 0,
      y: 0,
      text: this.config.left,
      style,
    });
    this.add(this.unCompleteText);
    this.unCompleteText.setOrigin(0, 0.5);
    this.unCompleteText.x = -this.unCompleteText.width * 0.5;
  }
  protected createCompleteText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontFamily: Fonts.Normal.Name,
      fontSize: '40px',
      color: '#00ff00',
    };
    this.completeText = this.scene.make.text({
      x: 0,
      y: 0,
      text: '',
      style,
    });
    this.add(this.completeText);
    this.completeText.setOrigin(0, 0.5);
    this.completeText.x = this.unCompleteText.x;
  }
}
