import { Proxy } from '@rollinsafary/mvc';
import { pickAny } from '../../utils/Utils';
import DictionaryVO from './DictionaryVO';

export default class DictionaryVOProxy extends Proxy<DictionaryVO> {
  public static NAME: string = `DictionaryVOProxy`;
  public static REGISTERED: string = `${DictionaryVOProxy.NAME}Registered`;

  constructor(words: string[]) {
    super(DictionaryVOProxy.NAME, new DictionaryVO(words));
  }

  public getWords(count: number, maxLength: number): string[] {
    const words: string[] = [];
    for (let i: number = 0; i < count; i++) {
      const randomLength: number = Phaser.Math.Between(
        Math.floor(maxLength / 2),
        maxLength,
      );
      const word = pickAny(this.vo.wordsMap.get(randomLength));
      words.push(word);
    }
    return words;
  }

  public onRegister(): void {
    this.sendNotification(DictionaryVOProxy.REGISTERED);
  }

  public getWordWithLength(length: number): string {
    return pickAny(this.vo.wordsMap.get(length));
  }
}
