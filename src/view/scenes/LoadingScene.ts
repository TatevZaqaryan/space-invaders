import { ExtendedText } from '@rollinsafary/phaser3-i18n-plugin';
import { NinePatch } from '@rollinsafary/phaser3-ninepatch-plugin';
import { Fonts, Images, MultiAtlases } from '../../assets';
import { Translation } from '../../translations';
import { loadImages, loadMultiAtlases } from '../utils/assetLoader';
import { BackgroundScene } from './BackgroundScene';

export default class LoadingScene extends BackgroundScene {
  public static NAME: string = 'LoadingScene';

  public static ASSETS_LOAD_COMPLETE_EVENT: string = 'assetsLoadingComplete';
  public static ASSETS_LOAD_COMPLETE: string = `${LoadingScene.name}AssetsLoadComplete`;
  public static LOADING_COMPLETE: string = `${LoadingScene.name}LoadingComplete`;

  protected background: Phaser.GameObjects.Image;
  protected backgroundBorder: NinePatch;
  protected border: NinePatch;

  protected loadingBackground: Phaser.GameObjects.Image;
  protected loadingFill: Phaser.GameObjects.TileSprite;
  protected stars: Phaser.GameObjects.TileSprite;
  protected messageText: ExtendedText;

  constructor() {
    super(LoadingScene.name);
  }

  public create(): void {
    super.create();
    this.createComponents();
    this.startLoading();
  }

  private startLoading(): void {
    loadMultiAtlases(this, MultiAtlases);
    loadImages(this, Images);
    this.load.on(Phaser.Loader.Events.PROGRESS, this.onProgress, this);
    this.load.on(Phaser.Loader.Events.COMPLETE, this.onLoadComplete, this);
    this.load.start();
  }

  public createComponents() {
    this.createLoadingBackground();
    this.createLoadingFill();
    this.createMessageText();
  }

  protected createMessageText(): void {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: '60px',
      fontFamily: Fonts.Bold.Name,
    };
    this.messageText = this.make.extText({
      x: this.width * 0.5,
      y: this.height * 0.5,
      text: Translation.LOADING_SCENE_MESSAGE_LOADING,
      style,
    });
    this.add.existing(this.messageText);
    this.messageText.setOrigin(0.5);

    const gradient = this.messageText.context.createLinearGradient(
      0,
      0,
      0,
      this.messageText.height,
    );
    gradient.addColorStop(0, '#CCFFFE');
    gradient.addColorStop(1, '#05F2DB');
    this.messageText.setFill(gradient);
  }

  protected createLoadingBackground(): void {
    this.loadingBackground = this.make.image({
      x: this.width * 0.5,
      y: this.height * 0.55,
      key: MultiAtlases.Loading.Atlas.Name,
      frame: MultiAtlases.Loading.Atlas.Frames.LoadingLoading1,
    });
    this.add.existing(this.loadingBackground);
    this.loadingBackground.setScale(1.5);
  }
  protected createLoadingFill() {
    const frame = this.textures.getFrame(
      MultiAtlases.Loading.Atlas.Name,
      MultiAtlases.Loading.Atlas.Frames.LoadingLoadingFinish,
    );
    this.loadingFill = this.make.tileSprite({
      x: this.width * 0.5,
      y: this.height * 0.55,
      key: MultiAtlases.Loading.Atlas.Name,
      frame: MultiAtlases.Loading.Atlas.Frames.LoadingLoadingFinish,
      width: 1,
      height: frame.height,
    });
    this.loadingFill.x = this.width * 0.5 - frame.width * 0.5;

    this.add.existing(this.loadingFill);
    this.loadingFill.setOrigin(1, 0.5);
    this.loadingFill.setScale(-1.5);
  }
  private onProgress(progress: number): void {
    const frame: Phaser.Textures.Frame = this.textures.getFrame(
      MultiAtlases.Loading.Atlas.Name,
      MultiAtlases.Loading.Atlas.Frames.LoadingLoadingFinish,
    );
    this.tweens.killTweensOf(this.loadingFill);
    this.tweens.add({
      targets: this.loadingFill,
      width: frame.width * progress,
      duration: 100,
      ease: Phaser.Math.Easing.Expo.In,
      onUpdate: () => {
        this.loadingFill.x =
          this.width * 0.5 -
          frame.width * Math.abs(this.loadingFill.scaleX) * 0.5;
        this.loadingFill.setOrigin(1, 0.5);
      },
    });
  }
  private onLoadComplete(): void {
    this.onProgress(1);
    this.messageText.setText(Translation.LOADING_SCENE_MESSAGE_RETRIEVING);
    this.events.emit(LoadingScene.ASSETS_LOAD_COMPLETE_EVENT);
  }
}
