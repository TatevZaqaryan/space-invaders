import { Proxy } from '@rollinsafary/mvc';
import { pickAny } from '../../utils/Utils';
import DictionaryVO from './DictionaryVO';

export default class DictionaryVOProxy extends Proxy<DictionaryVO> {
  public static NAME: string = `DictionaryVOProxy`;
  public static REGISTERED: string = `${DictionaryVOProxy.NAME}Registered`;

  constructor(words: string[]) {
    super(DictionaryVOProxy.NAME, new DictionaryVO(words));
  }

  public onRegister(): void {
    this.sendNotification(DictionaryVOProxy.REGISTERED);
  }

  public getWordWithLength(length: number): string {
    return pickAny(this.vo.wordsMap.get(length));
  }
}
