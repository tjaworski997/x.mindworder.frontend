import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modules/shared/services/modal/modal.service';
import { ModalParams } from 'src/app/modules/shared/services/modal/modal.model';
import { GameModel, GameState } from 'src/app/core/models/game.model';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent implements OnInit {
  public stateType: typeof GameState = GameState;

  modalVisible = false;

  modalParams: ModalParams | undefined;

  game: GameModel = new GameModel();

  constructor(private modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.modalCloseBehavior.subscribe((p) => {
      this.modalVisible = false;
    });

    this.modalService.modalOpenBehavior.subscribe((p) => {
      if (p) {
        this.modalVisible = true;
        this.modalParams = p;
      }
    });
  }

  startGame($level: number) {
    this.game.wordLength = $level;
    this.game.gameState = GameState.Game;
  }

  endOfGame($event: any) {
    this.game.reset();
  }
}
