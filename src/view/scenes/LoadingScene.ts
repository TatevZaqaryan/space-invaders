import { NinePatch } from '@rollinsafary/phaser3-ninepatch-plugin';
import { Fonts, MultiAtlases } from '../../assets';
import { BackgroundScene } from './BackgroundScene';

export default class LoadingScene extends BackgroundScene {
  public static NAME: string = 'LoadingScene';

  public static LOADING_COMPLETE_EVENT: string = 'loadingComplete';
  public static LOADING_COMPLETE_NOTIFICATION: string = `${LoadingScene.name}LoadingComplete`;
  protected background: Phaser.GameObjects.Image;
  protected backgroundLoading: Phaser.GameObjects.Image;
  protected backgroundBorder: NinePatch;
  protected border: NinePatch;
  protected loading: Phaser.GameObjects.TileSprite;
  protected stars: Phaser.GameObjects.TileSprite;
  protected text: Phaser.GameObjects.Text;

  public isLoadingComplete: boolean = false;

  constructor() {
    super(LoadingScene.name);
  }
  public create() {
    super.create();
    this.createComponents();
  }
  public createComponents() {
    this.createBackgroundLoading();
    this.createLoading();
    try {
      this.createText();
    } catch (error) {
      console.warn(error);
    }
    this.setListeners();
  }

  protected createText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '60px',
      fontFamily: Fonts.Bold.Name,
    };
    this.text = this.make.text({
      x: this.width * 0.5,
      y: this.height * 0.5,
      text: 'Loading',
      style,
    });
    this.add.existing(this.text);
    this.text.setOrigin(0.5);

    const gradient = this.text.context.createLinearGradient(
      0,
      0,
      0,
      this.text.height,
    );
    gradient.addColorStop(0, '#CCFFFE');
    gradient.addColorStop(1, '#05F2DB');
    this.text.setFill(gradient);
  }
  protected createBackgroundLoading(): void {
    this.backgroundLoading = this.make.image({
      x: this.width * 0.5,
      y: this.height * 0.55,
      key: MultiAtlases.Loading.Atlas.Name,
      frame: MultiAtlases.Loading.Atlas.Frames.LoadingLoading1,
    });
    this.add.existing(this.backgroundLoading);
  }
  protected createLoading() {
    const frame = this.textures.getFrame(
      MultiAtlases.Loading.Atlas.Name,
      MultiAtlases.Loading.Atlas.Frames.LoadingLoadingFinish,
    );
    this.loading = this.make.tileSprite({
      x: this.width * 0.5,
      y: this.height * 0.55,
      key: MultiAtlases.Loading.Atlas.Name,
      frame: MultiAtlases.Loading.Atlas.Frames.LoadingLoadingFinish,
      width: 1,
      height: frame.height,
    });
    this.loading.x = this.width * 0.5 - frame.width * 0.5;

    this.add.existing(this.loading);
    this.loading.setOrigin(1, 0.5);
    this.loading.setScale(-1.5);
    this.tweens.add({
      targets: this.loading,
      width: frame.width,
      duration: 1000,
      ease: Phaser.Math.Easing.Expo.In,
      onUpdate: () => {},
    });
  }
  protected setListeners(): void {
    this.load.on(Phaser.Loader.Events.COMPLETE, this.onLoadComplete, this);
    this.load.start();
  }
  private onLoadComplete(): void {
    this.isLoadingComplete = true;
    this.events.emit(LoadingScene.LOADING_COMPLETE_EVENT);
  }
}
