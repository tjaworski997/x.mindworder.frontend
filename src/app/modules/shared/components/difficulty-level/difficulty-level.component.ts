import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-difficulty-level',
  templateUrl: './difficulty-level.component.html',
  styleUrls: ['./difficulty-level.component.scss'],
})
export class DifficultyLevelComponent implements OnInit {
  digits = [3, 4, 5, 6, 7, 8];

  @Input()
  @Output()
  selectedLevel: number = 5;

  constructor() {}

  ngOnInit(): void {}

  click(item: number) {
    this.selectedLevel = item;
  }
}
