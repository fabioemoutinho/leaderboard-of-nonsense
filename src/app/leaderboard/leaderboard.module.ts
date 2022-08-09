import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { LeaderboardComponent } from './leaderboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GameLeaderBoardComponent } from './game-leader-board/game-leader-board.component';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';


@NgModule({
  declarations: [
    LeaderboardComponent,
    SidebarComponent,
    GameLeaderBoardComponent
  ],
  imports: [
    CommonModule,
    LeaderboardRoutingModule,
    AngularFirestoreModule,
    LoginComponent,
    UserComponent
  ]
})
export class LeaderboardModule { }
