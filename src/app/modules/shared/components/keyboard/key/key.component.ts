import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent implements OnInit {
  constructor() {}

  @Input() key: string = '';
  @Output()
  onKeyPress: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  keyClick(key: string) {
    this.onKeyPress.emit(key);
  }
}
