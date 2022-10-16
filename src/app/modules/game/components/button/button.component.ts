import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Output()
  onClick = new EventEmitter();

  @Input()
  text: string | undefined = 'button';

  ngOnInit(): void {}

  click() {
    this.onClick.emit();
  }
}
