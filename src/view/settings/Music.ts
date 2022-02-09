import { Fonts, MultiAtlases } from '../../assets';
import BaseScene from '../scenes/BaseScene';

export class Music extends Phaser.GameObjects.Container {
  protected text: Phaser.GameObjects.Text;

  protected musicCheckboxOn: Phaser.GameObjects.Image;
  protected musicCheckboxOff: Phaser.GameObjects.Image;
  constructor(scene: BaseScene) {
    super(scene);
    this.crateComponent();
  }
  protected crateComponent() {
    this.createText();
    this.createCheckBoxOn();
    this.createCheckBoxOff();
    this.setListeners();
  }
  protected createText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '30px',
      fontFamily: Fonts.Bold.Name,
      color: '#05F2DB',
    };
    this.text = this.scene.make.text({
      x: this.width * 0.8,
      y: this.height * 0.4,
      text: 'Music',
      style,
    });
    this.add(this.text);
  }

  protected createCheckBoxOn(): void {
    this.musicCheckboxOn = this.scene.make.image({
      x: this.text.width + 600,
      y: this.text.height,
      key: MultiAtlases.Button.Atlas.Name,
      frame: MultiAtlases.Button.Atlas.Frames.ButtonTugleMusicChackboxOn,
    });
    this.add(this.musicCheckboxOn);
    this.musicCheckboxOn.setScale(1);
    this.musicCheckboxOn.setInteractive();
  }

  protected createCheckBoxOff(): void {
    this.musicCheckboxOff = this.scene.make.image({
      x: this.text.width + 600,
      y: this.text.height,
      key: MultiAtlases.Button.Atlas.Name,
      frame: MultiAtlases.Button.Atlas.Frames.ButtonTugleMusicChackboxOff,
    });
    this.add(this.musicCheckboxOff);
    this.musicCheckboxOff.setScale(1);

    this.musicCheckboxOff.setInteractive();

    this.musicCheckboxOff.setVisible(false);
  }
  protected setListeners(): void {
    this.on(Phaser.Input.Events.POINTER_DOWN, this.onDown, this);
  }
  protected onDown(): void {
    console.log('garun');

    this.musicCheckboxOff.setVisible(true);
  }
}
