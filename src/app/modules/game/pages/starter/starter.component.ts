import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
})
export class StarterComponent implements OnInit {
  constructor() {}

  @Output()
  start: EventEmitter<number> = new EventEmitter();

  @ViewChild('level') level!: ElementRef;

  ngOnInit(): void {}

  starGame() {
    const level = parseInt(this.level.nativeElement.value);
    this.start.emit(level);
  }
}
