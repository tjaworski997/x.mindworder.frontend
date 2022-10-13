import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-input-word',
  templateUrl: './input-word.component.html',
  styleUrls: ['./input-word.component.scss'],
})
export class InputWordComponent implements OnInit {
  @Input()
  lettersCount = 5;

  @Output()
  onCheckWord: EventEmitter<string> = new EventEmitter<string>();

  info = 'info';

  constructor() {}

  ngOnInit(): void {}

  checkWord() {
    let word = '';

    this.getAllInput().forEach((input) => {
      word += input.value;
    });

    this.onCheckWord.emit(word);
  }

  getAllInput(): Array<HTMLInputElement> {
    const res = new Array<HTMLInputElement>();
    for (let i = 0; i < this.lettersCount; i++) {
      const input = document.getElementById(`il_${i}`)! as HTMLInputElement;
      res.push(input);
    }
    return res;
  }

  keyupHandler($event: KeyboardEvent) {
    console.log($event.key);

    const key = $event.key;

    if (key == 'Enter') {
      this.checkWord();
      return;
    }

    const input = $event.target as HTMLInputElement;
    const inputId = parseInt(input.id.substring(3));

    if (key == 'Backspace') {
      input.value = ' ';
      this.focusPreviousInput(inputId);
      return;
    }

    if (key == 'ArrowLeft') {
      this.focusPreviousInput(inputId);
      return;
    }

    if (key == 'ArrowRight') {
      this.focusNextInput(inputId);
      return;
    }

    if (input.value.length == 1) {
      this.focusNextInput(inputId);
    }
  }

  private focusPreviousInput(id: number) {
    if (id === 0) {
      this.focusInput(this.lettersCount - 1);
    } else {
      this.focusInput(id - 1);
    }
  }

  private focusNextInput(id: number) {
    if (id === this.lettersCount - 1) {
      this.focusInput(0);
    } else {
      this.focusInput(id + 1);
    }
  }

  private focusInput(id: number) {
    document.getElementById(`il_${id}`)!.focus();
  }

  selectAllContent($event: FocusEvent) {
    const input = $event.target as HTMLInputElement;
    input.select();
  }

  clearWord() {
    this.getAllInput().forEach((input) => {
      input.value = ' ';
    });
  }
}
