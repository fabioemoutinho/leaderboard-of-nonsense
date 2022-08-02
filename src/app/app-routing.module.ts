import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'leader-board'
  },
  {
    path: 'leader-board',
    loadChildren: () => import('./leaderboard/leaderboard.module').then(m => m.LeaderboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
