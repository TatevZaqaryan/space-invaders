import { NinePatch } from '@rollinsafary/phaser3-ninepatch-plugin';
import { Fonts, MultiAtlases } from '../../assets';
import BaseScene from '../scenes/BaseScene';

export class MenuButton extends Phaser.GameObjects.Container {
  public border: NinePatch;
  public buttonFill: NinePatch;
  protected buttonDownFill: Phaser.GameObjects.Image;
  protected text: Phaser.GameObjects.Text;
  protected star: Phaser.GameObjects.Image;

  constructor(public scene: BaseScene, protected config: IMenuButtonConfig) {
    super(scene);
    this.creteButton();
  }

  protected creteButton(): void {
    this.creteButtonFill();
    this.creteButtonBorder();
    this.setSize(this.border.width, this.border.height);
    this.createText();
    this.createStars();
    this.setListeners();
  }
  protected creteButtonBorder(): void {
    this.border = this.scene.make.ninePatch({
      x: 0,
      y: 0,
      key: MultiAtlases.Button.Atlas.Name,
      frame: MultiAtlases.Button.Atlas.Frames.ButtonRectangleBorder,
      width: 500,
      height: 130,
    });
    this.add(this.border);
  }

  protected creteButtonFill(): void {
    this.buttonFill = this.scene.make.ninePatch({
      x: 0,
      y: 0,
      key: MultiAtlases.Button.Atlas.Name,
      frame: MultiAtlases.Button.Atlas.Frames.ButtonRectangleFill,
      width: 500,
      height: 130,
    });
    this.add(this.buttonFill);
  }

  protected createText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '30px',
      fontFamily: Fonts.Bold.Name,
      color: '#05F2DB',
    };
    this.text = this.scene.make.text({
      x: 0,
      y: 0,
      text: this.config.text,
      style,
    });
    this.add(this.text);
    this.text.setOrigin(0.5);
  }
  protected createStars(): void {
    this.star = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Button.Atlas.Name,
      frame: MultiAtlases.Button.Atlas.Frames.ButtonRectangleHoverPip,
    });
    this.add(this.star);
    this.star.setScale(2);
    this.star.setVisible(false);
  }
  protected cerateDownFill() {
    this.buttonDownFill = this.scene.make.image({
      x: 0,
      y: 0,
      key: MultiAtlases.Button.Atlas.Name,
      frame: MultiAtlases.Button.Atlas.Frames.ButtonRectangleFill,
      width: 500,
      height: 130,
    });
    this.add(this.buttonDownFill);
    this.buttonDownFill.setVisible(false);
  }
  protected setListeners(): void {
    this.on(Phaser.Input.Events.POINTER_OVER, this.onOver, this);
    this.on(Phaser.Input.Events.POINTER_OUT, this.onOverOut, this);
    // this.on(Phaser.Input.Events.POINTER_DOWN, this.onDown, this);
  }
  protected onDown(): void {
    this.buttonDownFill.setFrame(
      MultiAtlases.Button.Atlas.Frames.ButtonRectangleFill,
    );
  }
  protected onOver(): void {
    this.star.setVisible(true);
  }
  protected onOverOut(): void {
    this.star.setVisible(false);
  }
}
export interface IMenuButtonConfig {
  text: string;
}
