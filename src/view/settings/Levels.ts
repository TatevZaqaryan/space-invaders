import { Fonts, MultiAtlases } from '../../assets';
import BaseScene from '../scenes/BaseScene';

export class Levels extends Phaser.GameObjects.Container {
  protected createBackground: Phaser.GameObjects.Image;
  protected createBackgroundFill: Phaser.GameObjects.Image;
  protected text: Phaser.GameObjects.Text;
  protected textEasy: Phaser.GameObjects.Text;
  protected textMedium: Phaser.GameObjects.Text;
  protected textHard: Phaser.GameObjects.Text;
  constructor(scene: BaseScene) {
    super(scene);
    this.createComponents();
  }
  protected createComponents(): void {
    this.createText();
    this.createLevelsBackground();
    this.createLevelsBackgroundFill();
    this.crateTextComponents();
  }
  protected crateTextComponents(): void {
    this.createTextEasy();
    this.createTextMedium();
    this.createTextMedium();
  }
  protected createText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '30px',
      fontFamily: Fonts.Bold.Name,
      color: '#ffffff',
    };
    this.text = this.scene.make.text({
      x: this.width * 0.8,
      y: this.height * 0.4,
      text: 'Levels',
      style,
    });
    this.add(this.text);
  }
  protected createTextEasy(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '16px',
      fontFamily: Fonts.Bold.Name,
      color: '#05F2DB',
    };
    this.textEasy = this.scene.make.text({
      x: this.text.width,
      y: this.text.height + 10,
      text: 'Easy',
      style,
    });
    this.add(this.textEasy);
    this.text.setOrigin(0.5);
  }
  protected createTextMedium(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '16px',
      fontFamily: Fonts.Bold.Name,
      color: '#05F2DB',
    };
    this.textMedium = this.scene.make.text({
      x: this.textEasy.width + 40,
      y: this.text.height,
      text: 'Medium',
      style,
    });
    this.add(this.textMedium);
  }
  protected createTextHard(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '16px',
      fontFamily: Fonts.Bold.Name,
      color: '#05F2DB',
    };
    this.textHard = this.scene.make.text({
      x: this.textMedium.width + 40,
      y: this.text.height,
      text: 'Hard',
      style,
    });
    this.add(this.textHard);
  }
  protected createLevelsBackground(): void {
    this.createBackground = this.scene.make.image({
      x: this.width * 0.7,
      y: this.height * 0.4,
      key: MultiAtlases.Levels.Atlas.Name,
      frame: MultiAtlases.Levels.Atlas.Frames.LevelsBackground,
    });
    this.add(this.createBackground);
  }
  protected createLevelsBackgroundFill(): void {
    this.createBackgroundFill = this.scene.make.image({
      x: this.width * 0.7,
      y: this.height * 0.4,
      key: MultiAtlases.Levels.Atlas.Name,
      frame: MultiAtlases.Levels.Atlas.Frames.LevelsBackgroundFill,
    });
    this.add(this.createBackgroundFill);
  }
}
