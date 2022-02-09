export default class DictionaryVO {
  public wordsMap: Map<number, string[]>;

  constructor(words: string[]) {
    this.wordsMap = new Map<number, string[]>();
    for (let i: number = 3; i < 15; i++) {
      const wordsWithCustomLength: string[] = words.filter(
        (word) => word.length === i,
      );
      this.wordsMap.set(i, wordsWithCustomLength);
    }
    console.warn(this);
  }
}
