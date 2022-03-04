import { Fonts, MultiAtlases } from '../../../assets';
import BaseScene from '../../scenes/BaseScene';
import GameScene from '../../scenes/GameScene';

export default class FooterView extends Phaser.GameObjects.Container {
  public static NAME: string = 'FooterView';
  public static SCORE_UPDATED_EVENT: string = 'scoreUpdated';
  public static SCORE_UPDATED: string = `${FooterView.NAME}"ScoreUpdated`;
  protected footer: Phaser.GameObjects.Image;
  protected text: Phaser.GameObjects.Text;
  public scene: GameScene;
  constructor(scene: BaseScene) {
    super(scene);
    this.scene.add.existing(this);
    this.createComponents();
  }
  protected createComponents(): void {
    this.createFooter();
    this.createText(`Score `, this.scene.width * 0.2);
    this.createText(`Missed `, this.scene.width * 0.6);
    this.createText(`Shots `, this.scene.width * 0.9);
  }
  protected createFooter(): void {
    this.footer = this.scene.make.image({
      x: this.scene.width * 0.5,
      y: this.scene.height * 0.9 + 100,
      key: MultiAtlases.Board.Atlas.Name,
      frame: MultiAtlases.Board.Atlas.Frames.BoardFooterHeader,
    });
    this.add(this.footer);
    this.footer.setScale(2.6);
    this.footer.setDepth(1);
  }

  protected createText(text: string, x: number): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '35px',
      fontFamily: Fonts.Bold.Name,
    };
    this.text = this.scene.make.text({
      x: x,
      y: this.scene.height * 0.9 + 100,
      text: text,
      style,
    });
    this.add(this.text);
    this.text.setDepth(1);
    this.text.setOrigin(1, 0.5);
  }
  protected setListeners(): void {}
  protected onScoreUpdated(): void {
    this.emit(FooterView.SCORE_UPDATED_EVENT);
  }
}
