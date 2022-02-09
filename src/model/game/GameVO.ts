export class GameVO {
  statistics: IStatistic;
  player: IPlayer;
  enemies: IEnemy[];
}

export interface IStatistic {
  Shots: number;
  Missed: number;
  Score: number;
}
export interface IPlayer {
  skin?: number;
  life: number;
}
export interface IEnemy {
  id: number;
  word: string;
  velocity: number;
}
