import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent implements OnInit {
  constructor() {}

  @Input() key: string = '';

  ngOnInit(): void {}
}
