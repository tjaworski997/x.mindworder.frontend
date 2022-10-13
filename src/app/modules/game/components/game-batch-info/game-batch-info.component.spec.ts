import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBatchInfoComponent } from './game-batch-info.component';

describe('GameBatchInfoComponent', () => {
  let component: GameBatchInfoComponent;
  let fixture: ComponentFixture<GameBatchInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameBatchInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameBatchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
