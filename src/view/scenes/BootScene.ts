import { Locales, MultiAtlases } from '../../assets';
import { loadMultiAtlases } from '../utils/assetLoader';
import BaseScene from './BaseScene';

export default class BootScene extends BaseScene {
  public static LOAD_COMPLETE_NOTIFICATION: string = `${this.name}LoadComplete`;
  public static LOAD_COMPLETE_EVENT: string = `${this.name}LoadCompleteEvent`;

  constructor() {
    super(BootScene.name);
  }

  public preload(): void {
    loadMultiAtlases(this, MultiAtlases);
  }

  public create(): void {
    this.i18n.init(Locales.En.name);
    this.events.emit(BootScene.LOAD_COMPLETE_EVENT);
  }
}
