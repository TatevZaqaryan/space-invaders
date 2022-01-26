import { StringIndexedObject } from '../view/utils/phaser/CustomTypes';

export enum Orientation {
  PORTRAIT,
  LANDSCAPE,
}

export let gameConfig: IGameScreenConfig = {
  designWidth: 1080,
  designHeight: 1920,
  canvasWidth: 1080,
  canvasHeight: 1920,
  designRatio: 1,
  deviceRatio: 1,
  orientation: Orientation.LANDSCAPE,
  resolutionMultiplier: 1,
};

export interface IGameScreenConfig extends StringIndexedObject<number> {
  designWidth: number;
  designHeight: number;
  canvasWidth: number;
  canvasHeight: number;
  designRatio: number;
  deviceRatio: number;
  orientation: Orientation;
  resolutionMultiplier: number;
}
