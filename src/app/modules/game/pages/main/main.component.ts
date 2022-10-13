import { Component, OnInit } from '@angular/core';
import { RandomWordService } from 'src/app/core/services/random-word.service';
import {
  AnswerType,
  GameBatchModel,
} from 'src/app/core/models/game-batch.model';
import 'src/app/core/helpers/string.extensions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  word: string = '';
  wordLength = 5;
  batchNumber = 1;
  tip = 'tip';

  gameBatches: Array<GameBatchModel> = new Array<GameBatchModel>();

  constructor(private randomWordService: RandomWordService) {}

  ngOnInit(): void {
    this.randomWordService.getRandomWord(this.wordLength).subscribe((p) => {
      this.word = p.word;
    });
  }

  checkWord($word: string) {
    $word = $word.toLowerCase();

    let pattern = this.word;

    let answerInfo = new Array<AnswerType>();

    [...$word].forEach((p, cnt) => {
      console.log(pattern);

      if (p === pattern[cnt]) {
        pattern = pattern.replaceAt(cnt, '#');
        answerInfo.push(AnswerType.letterCorrectOnRightPosition);
        return;
      }

      const indexOfLetter = pattern.indexOf(p);

      if (indexOfLetter != -1) {
        pattern = pattern.replaceAt(indexOfLetter, '#');

        answerInfo.push(AnswerType.letterCorrectOnWrongPosition);
        return;
      }
      answerInfo.push(AnswerType.letterWrong);
    });

    const batchInfo = {
      letters: $word,
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
      start: new Date(),
      end: new Date(),
    };

    console.log(batchInfo);

    this.gameBatches.unshift(batchInfo);
  }

  showWord() {
    this.tip = this.word;
  }
}
