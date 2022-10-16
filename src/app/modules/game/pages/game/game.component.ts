import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { RandomWordService } from 'src/app/core/services/random-word.service';
import {
  AnswerType,
  GameBatchModel,
} from 'src/app/core/models/game-batch.model';
import 'src/app/core/helpers/string.extensions';
import { ModalService } from 'src/app/modules/shared/services/modal/modal.service';
import { GameModel } from 'src/app/core/models/game.model';
import { KeyboardComponent } from 'src/app/modules/shared/components/keyboard/keyboard.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @Output()
  endOfGame: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('gameInformation') gameInformationDiv!: ElementRef;
  @ViewChild('keyboard') keyboard!: KeyboardComponent;

  @Input()
  game: GameModel = new GameModel();

  constructor(
    private randomWordService: RandomWordService,
    private modalService: ModalService
  ) {}

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    switch (event.key) {
      case 'ArrowLeft':
        if (this.game.currentLetterId != 0) {
          this.game.currentLetterId--;
        }
        return;
      case 'ArrowRight':
        if (this.game.currentLetterId != this.game.word!.length - 1) {
          this.game.currentLetterId++;
        }
        return;
      case 'Delete':
        this.game.letters[this.game.currentLetterId] = '';
    }
    this.keyboard.pressKey(event.key);
  }

  ngOnInit(): void {
    this.randomWordService
      .getRandomWord(this.game.wordLength)
      .subscribe((p) => {
        this.game.word = this.randomWordService.decryptWord(
          p.word,
          this.game.wordLength
        );
        this.game.startGame = new Date();
        this.game.batches = [];
      });

    if (!this.game.letters) {
      this.clear();
    }
  }

  winInfo() {
    this.game.endGame = new Date();

    const seconds = Math.round(
      Math.abs(
        this.game!.endGame!.getTime() - this.game!.startGame!.getTime()
      ) / 1000
    );

    const mess = `<p>Brawo Ty</p>
</br>
<p class="big">${this.game.word}</></p>
</br>
<div class="info">
<p>Ilość prób: ${this.game.batches?.length}</p>
<p>Czas: ${seconds} [s]</p>
</div>
<br />
<br />
<a href="https://sjp.pl/${this.game.word}">Co to słowo znaczy?</a>
`;

    this.modalService.open({
      message: mess,
      buttonCancel: false,

      buttonOkAction: () => {
        this.onEndOfGame();
      },
    });
  }

  clear() {
    for (let i = 0; i < this.game.wordLength; i++) {
      this.game.letters[i] = '';
    }
    this.game.currentLetterId = 0;
  }

  scroll() {
    this.gameInformationDiv.nativeElement.scroll(0, 0);
  }

  onEndOfGame() {
    this.endOfGame.emit();
  }

  pasInfo() {
    const mess = `<p>Było blisko...</p>
<br />
 <p>Nasze słowo to:</p>
</br>
<p class="big">${this.game.word}</></p>
<br />
<br />
<a href="https://sjp.pl/${this.game.word}">Co to słowo znaczy?</a>
`;

    this.modalService.open({
      message: mess,
      buttonCancel: false,

      buttonOkAction: () => {
        this.onEndOfGame();
      },
    });
  }

  keyPress($key: string) {
    switch ($key) {
      case 'ENTER':
        this.scroll();

        this.game.checkWord();

        if (this.game.victory) {
          this.winInfo();
        }

        this.game.currentLetterId = 0;
        break;
      case 'PAS':
        this.modalService.open({
          message: 'Poważnie? poddajesz się?',
          buttonCancelText: 'Nie',
          buttonOkText: 'Tak',
          buttonOkAction: () => {
            this.pasInfo();
          },
        });

        break;
      case 'HELP':
      case 'POMOC':
        this.help();
        break;
      case 'DEL':
        this.game.letters[this.game.currentLetterId] = '';
        if (this.game.currentLetterId != 0) {
          this.game.currentLetterId--;
        }
        break;
      case 'WYCZYŚĆ':
      case 'CLEAR':
        this.clear();
        break;
      default:
        this.game.letters[this.game.currentLetterId] = $key;

        if (this.game.currentLetterId != this.game.wordLength - 1) {
          this.game.currentLetterId++;
        }

        break;
    }
  }

  letterClick($event: MouseEvent) {
    const target = $event.target as HTMLDivElement;
    const id = target.id.substring(3);
    this.game.currentLetterId = parseInt(id);
  }

  private help() {}

  keyDown($event: KeyboardEvent) {}
}
