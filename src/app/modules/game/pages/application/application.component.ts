import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent implements OnInit {
  public stateType: typeof GameState = GameState;

  state: GameState = GameState.Start;
  level: number = 3;

  constructor() {}
  ngOnInit(): void {
    this.state = GameState.Start;
  }

  startGame($level: number) {
    this.level = $level;
    this.state = GameState.Game;
  }
}

enum GameState {
  Start,
  Game,
}
