import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LeaderBoard } from 'src/app/core/models/leader-board.interface';
import { Score } from 'src/app/core/models/score.interface';

@Component({
  selector: 'app-game-leader-board[leaderboard]',
  templateUrl: './game-leader-board.component.html',
  styleUrls: ['./game-leader-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameLeaderBoardComponent{

  @Input() leaderboard!:LeaderBoard

  @Input() scores!:Score[]
}
