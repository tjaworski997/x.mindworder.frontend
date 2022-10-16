export enum AnswerType {
  none,
  letterCorrectOnRightPosition,
  letterCorrectOnWrongPosition,
  letterWrong,
}

export interface GameBatchModel {
  batchNumber: number;

  letters: string;

  lettersCorrectOnRightPosition: number;
  lettersCorrectOnWrongPosition: number;
  lettersWrong: number;

  lettersAnswerInfo: Array<AnswerType>;
}
