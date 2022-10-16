import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DifficultyLevelComponent } from 'src/app/modules/shared/components/difficulty-level/difficulty-level.component';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
})
export class StarterComponent implements OnInit {
  constructor() {}

  @Input()
  level = 5;

  @Output()
  start: EventEmitter<number> = new EventEmitter();

  @ViewChild('difficultyLevelComponent')
  difficultyLevelComponent!: DifficultyLevelComponent;

  ngOnInit(): void {}

  startGame() {
    this.start.emit(this.difficultyLevelComponent.selectedLevel);
  }
}
