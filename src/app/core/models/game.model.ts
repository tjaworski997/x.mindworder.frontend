import {
  AnswerType,
  GameBatchModel,
} from 'src/app/core/models/game-batch.model';

export enum GameState {
  Start,
  Game,
}

export class GameModel {
  gameState = GameState.Start;
  word?: string;
  batchNumber: number = 1;
  batches = new Array<GameBatchModel>();
  startGame = new Date();
  endGame: Date | null = null;
  letters = new Array<string>();
  wordLength = 5;
  currentLetterId = 0;

  victory = false;

  reset() {
    this.batches = new Array<GameBatchModel>();
    this.word = '';
    this.batchNumber = 1;
    this.startGame = new Date();
    this.endGame = null;
    this.letters = new Array<string>();
    this.currentLetterId = 0;
    this.gameState = GameState.Start;
    this.save();
  }

  save() {
    localStorage.setItem('game', JSON.stringify(this));
  }

  checkWord() {
    const inputLetters = this.letters.slice().map((p) => p.toLowerCase());
    const correctWordLetters = [...this.word!];
    const answerInfo = new Array<AnswerType>();

    console.log('inputLetters', inputLetters);
    console.log('correctWordLetters', correctWordLetters);

    for (let i = 0; i < this.wordLength; i++) {
      answerInfo.push(AnswerType.none);
    }

    // najpierw dobre literki

    for (let i = 0; i < this.wordLength; i++) {
      if (correctWordLetters[i] == inputLetters[i]) {
        answerInfo[i] = AnswerType.letterCorrectOnRightPosition;
        correctWordLetters[i] = '#';
        inputLetters[i] = '$';
      }
    }

    // literki a złych miejscach

    for (let i = 0; i < this.wordLength; i++) {
      const letterInCorrectWordPosition = correctWordLetters.indexOf(
        inputLetters[i]
      );

      if (letterInCorrectWordPosition != -1) {
        answerInfo[i] = AnswerType.letterCorrectOnWrongPosition;
        correctWordLetters[letterInCorrectWordPosition] = '#';
        inputLetters[i] = '$';
      }
    }

    const batchInfo = {
      letters: this.letters.join(''),
      lettersWrong: answerInfo.filter((p) => p == AnswerType.letterWrong)
        .length,
      lettersCorrectOnRightPosition: answerInfo.filter(
        (p) => p == AnswerType.letterCorrectOnRightPosition
      ).length,
      lettersCorrectOnWrongPosition: answerInfo.filter(
        (p) => p == AnswerType.letterCorrectOnWrongPosition
      ).length,
      lettersAnswerInfo: answerInfo,
      batchNumber: this.batchNumber++,
    };

    this.batches?.unshift(batchInfo);

    this.victory = batchInfo.lettersCorrectOnRightPosition == this.wordLength;
    this.save();
  }
}
