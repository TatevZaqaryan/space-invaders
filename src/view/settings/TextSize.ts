import { Fonts, MultiAtlases } from '../../assets';
import BaseScene from '../scenes/BaseScene';

export class TextSize extends Phaser.GameObjects.Container {
  protected textSmall: Phaser.GameObjects.Text;
  protected textMedium: Phaser.GameObjects.Text;
  protected textLarge: Phaser.GameObjects.Text;
  protected text: Phaser.GameObjects.Text;
  protected createBackground: Phaser.GameObjects.Image;
  protected createBackgroundFill: Phaser.GameObjects.Image;
  constructor(scene: BaseScene) {
    super(scene);
    this.createTextComponent();
  }
  protected createTextComponent(): void {
    this.createText();
    this.createTextSmall();
    this.createTextMedium();
    this.createTextLarge();
    this.createLevelsBackground();
    this.createLevelsBackgroundFill();
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
      text: 'Text Size',
      style,
    });
    this.add(this.text);
  }

  protected createTextSmall(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '16px',
      fontFamily: Fonts.Bold.Name,
      color: '#ffffff',
    };
    this.textSmall = this.scene.make.text({
      x: this.text.width,
      y: this.text.y + 20,
      text: 'Small',
      style,
    });
    this.add(this.textSmall);
  }
  protected createTextMedium(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '16px',
      fontFamily: Fonts.Bold.Name,
      color: '#ffffff',
    };
    this.textMedium = this.scene.make.text({
      x: this.textSmall.x + 40,
      y: this.textSmall.y,
      text: 'Medium',
      style,
    });
    this.add(this.textMedium);
    this.text.setOrigin(0.5);
  }
  protected createTextLarge(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '16px',
      fontFamily: Fonts.Bold.Name,
      color: '#ffffff',
    };
    this.textLarge = this.scene.make.text({
      x: this.textMedium.x + 40,
      y: this.textMedium.y,
      text: 'Large',
      style,
    });
    this.add(this.textLarge);
  }
  protected createLevelsBackground(): void {
    this.createBackground = this.scene.make.image({
      x: this.text.width,
      y: this.text.y + 30,
      key: MultiAtlases.Levels.Atlas.Name,
      frame: MultiAtlases.Levels.Atlas.Frames.LevelsBackground,
    });
    this.add(this.createBackground);
  }
  protected createLevelsBackgroundFill(): void {
    this.createBackgroundFill = this.scene.make.image({
      x: this.createBackground.x,
      y: this.createBackground.y,
      key: MultiAtlases.Levels.Atlas.Name,
      frame: MultiAtlases.Levels.Atlas.Frames.LevelsBackgroundFill,
    });
    this.add(this.createBackgroundFill);
  }
}
