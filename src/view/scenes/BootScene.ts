import { Fonts, Locales, MultiAtlases } from '../../assets';
import { addBorderConfigs } from '../../constants/NinePatchConfigs';
import { loadFonts, loadJSONs, loadMultiAtlases } from '../utils/assetLoader';
import BaseScene from './BaseScene';

export default class BootScene extends BaseScene {
  public static LOAD_COMPLETE_NOTIFICATION: string = `${this.name}LoadComplete`;
  public static LOAD_COMPLETE_EVENT: string = `${this.name}LoadCompleteEvent`;

  constructor() {
    super(BootScene.name);
  }

  public preload(): void {
    loadMultiAtlases(this, MultiAtlases.Loading);
    loadMultiAtlases(this, MultiAtlases.Button);
    loadMultiAtlases(this, MultiAtlases.Scene);
    loadJSONs(this, Locales);
    loadFonts(Fonts);
  }

  public create(): void {
    this.addNinePatchConfigs();
    this.i18n.init(Locales.En.Name);
    this.events.emit(BootScene.LOAD_COMPLETE_EVENT);
  }

  protected addNinePatchConfigs(): void {
    addBorderConfigs(this);
  }
}
