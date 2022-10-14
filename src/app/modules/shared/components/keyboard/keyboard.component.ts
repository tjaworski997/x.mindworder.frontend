import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  constructor() {}

  @Output()
  onKeyPress: EventEmitter<string> = new EventEmitter<string>();

  keyRows: Array<Array<string>> = new Array<Array<string>>();

  ngOnInit(): void {
    this.InitKeyboard();
  }

  private InitKeyboard() {
    this.keyRows = [
      ['Ą', 'Ć', 'Ę', 'Ł', 'Ó', 'Ś', 'Ń', 'Ż', 'Ź'],
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL'],
      ['PAS', 'POMOC', 'WYCZYŚĆ', 'ENTER'],
    ];
  }

  keyPress($key: string) {
    this.onKeyPress.emit($key);
  }
}
