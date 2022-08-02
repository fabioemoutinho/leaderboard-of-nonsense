import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { LeaderboardComponent } from './leaderboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GameLeaderBoardComponent } from './game-leader-board/game-leader-board.component';


@NgModule({
  declarations: [
    LeaderboardComponent,
    SidebarComponent,
    GameLeaderBoardComponent
  ],
  imports: [
    CommonModule,
    LeaderboardRoutingModule
  ]
})
export class LeaderboardModule { }
