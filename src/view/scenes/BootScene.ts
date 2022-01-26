import { Fonts, Locales, MultiAtlases } from '../../assets';
import { addBorderConfigs } from '../../constants/NinePatchConfigs';
import { loadFonts, loadMultiAtlases } from '../utils/assetLoader';
import BaseScene from './BaseScene';

export default class BootScene extends BaseScene {
  public static LOAD_COMPLETE_NOTIFICATION: string = `${this.name}LoadComplete`;
  public static LOAD_COMPLETE_EVENT: string = `${this.name}LoadCompleteEvent`;

  constructor() {
    super(BootScene.name);
  }

  public preload(): void {
    loadMultiAtlases(this, MultiAtlases);
    loadFonts(Fonts);
  }

  public create(): void {
    this.addNinePatchConfigs();
    this.i18n.init(Locales.En.name);
    this.events.emit(BootScene.LOAD_COMPLETE_EVENT);
  }

  protected addNinePatchConfigs(): void {
    addBorderConfigs(this);
  }
}
