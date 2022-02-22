import StatisticsVO from './StatisticsVO';

export class GameVO {
  public statistics: StatisticsVO;
  public player: IPlayer;
  public enemies: IEnemy[];
  public target: IEnemy;
  constructor() {
    this.statistics = new StatisticsVO();
    this.player = null;
    this.enemies = [];
    this.target = null;
  }
}

export interface IPlayer {
  skin?: number;
  life: number;
}
export interface IEnemy {
  id: string;
  word: string;
  left: string;
  velocity: number;
}
