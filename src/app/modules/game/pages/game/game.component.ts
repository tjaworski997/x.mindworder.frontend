import { Component, Input, OnInit } from '@angular/core';
import { RandomWordService } from 'src/app/core/services/random-word.service';
import {
  AnswerType,
  GameBatchModel,
} from 'src/app/core/models/game-batch.model';
import 'src/app/core/helpers/string.extensions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @Input() wordLength = 5;

  word: string = '';

  batchNumber = 1;
  tip = 'tip';
  currentLetterId = 0;
  letters: Array<string> = new Array<string>();

  gameBatches: Array<GameBatchModel> = [];

  constructor(private randomWordService: RandomWordService) {}

  ngOnInit(): void {
    this.randomWordService.getRandomWord(this.wordLength).subscribe((p) => {
      this.word = p.word;
    });

    this.clear();
  }

  checkWord() {
    const word = this.letters.join('').toLowerCase();

    let pattern = this.word;

    let answerInfo = new Array<AnswerType>();

    [...word].forEach((p, cnt) => {
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
      letters: word,
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

  clear() {
    for (let i = 0; i < this.wordLength; i++) {
      this.letters[i] = '';
    }
    this.currentLetterId = 0;
  }

  keyPress($key: string) {
    switch ($key) {
      case 'ENTER':
        this.checkWord();
        this.currentLetterId = 0;
        break;
      case 'HELP':
      case 'POMOC':
        this.help();
        break;
      case 'DEL':
        this.letters[this.currentLetterId] = '';
        if (this.currentLetterId != 0) {
          this.currentLetterId--;
        }
        break;
      case 'WYCZYŚĆ':
      case 'CLEAR':
        this.clear();
        break;
      default:
        this.letters[this.currentLetterId] = $key;

        if (this.currentLetterId != this.wordLength - 1) {
          this.currentLetterId++;
        }

        break;
    }
  }

  letterClick($event: MouseEvent) {
    const target = $event.target as HTMLDivElement;
    const id = target.id.substring(3);
    this.currentLetterId = parseInt(id);
  }

  private help() {}
}
