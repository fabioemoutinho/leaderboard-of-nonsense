import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLeaderBoardComponent } from './game-leader-board.component';

describe('GameLeaderBoardComponent', () => {
  let component: GameLeaderBoardComponent;
  let fixture: ComponentFixture<GameLeaderBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLeaderBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameLeaderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
