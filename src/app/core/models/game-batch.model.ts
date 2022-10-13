export enum AnswerType {
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

  start: Date | null;
  end: Date | null;

  lettersAnswerInfo: Array<AnswerType>;
}
