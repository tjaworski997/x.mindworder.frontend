import { GameBatchModel } from 'src/app/core/models/game-batch.model';

export interface GameModel {
  word: string;
  batches: Array<GameBatchModel>;
}
