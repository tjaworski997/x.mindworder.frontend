import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  constructor() {}

  line1: Array<string> = new Array<string>();
  line2: Array<string> = new Array<string>();
  line3: Array<string> = new Array<string>();
  line4: Array<string> = new Array<string>();

  ngOnInit(): void {
    this.InitKeyboard();
  }

  private InitKeyboard() {
    this.line1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    this.line2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    this.line3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL'];
    this.line4 = ['Ą', 'Ć', 'Ę', 'Ł', 'Ó', 'Ś', 'Ń', 'Ż', 'Ź'];
  }
}
