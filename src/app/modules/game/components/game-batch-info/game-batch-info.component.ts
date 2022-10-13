import { Component, Input, OnInit } from '@angular/core';
import {
  AnswerType,
  GameBatchModel,
} from 'src/app/core/models/game-batch.model';

@Component({
  selector: 'app-game-batch-info',
  templateUrl: './game-batch-info.component.html',
  styleUrls: ['./game-batch-info.component.scss'],
})
export class GameBatchInfoComponent implements OnInit {
  constructor() {}

  @Input() batch: GameBatchModel | null = null;

  public answerType: typeof AnswerType = AnswerType;

  ngOnInit(): void {}

  formatLetters(letters: string | undefined) {
    return letters?.replaceAll(' ', '_');
  }
}
