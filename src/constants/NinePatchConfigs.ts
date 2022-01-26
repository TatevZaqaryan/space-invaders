import { NinePatchPlugin } from '@rollinsafary/phaser3-ninepatch-plugin';
import { MultiAtlases } from '../assets';
import BaseScene from '../view/scenes/BaseScene';

export function addBorderConfigs(scene: BaseScene) {
  // NinePatchPlugin.addConfigToCache(key, frame, config)
  NinePatchPlugin.addConfigToCache(
    MultiAtlases.Scene.Atlas.Name,
    MultiAtlases.Scene.Atlas.Frames.SceneBoarder,
    {
      left: 189,
      right: 189,
      top: 189,
      bottom: 60,
    },
  );
  NinePatchPlugin.addConfigToCache(
    MultiAtlases.Scene.Atlas.Name,
    MultiAtlases.Scene.Atlas.Frames.SceneBackgroundBorder,
    {
      left: 138,
      top: 281,
    },
  );
}
