import { Component } from '@angular/core';
import { LeaderBoard } from '../core/models/leader-board.interface';
import { Score } from '../core/models/score.interface';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {

  leaderboards: LeaderBoard[] = [
    {
      id: 'kdklsdkldf',
      game_id: 'dfdf',
      name: 'Good leaderboard',
      description: 'Good description ',
      metrics_ids: ['', ''],
    },
    {
      id: 'kdklsdkldf',
      game_id: 'dfdf',
      name: 'Good leaderboard',
      description: 'Good description ',
      metrics_ids: ['', ''],
    },
    {
      id: 'kdklsdkldf',
      game_id: 'dfdf',
      name: 'Good leaderboard',
      description: 'Good description ',
      metrics_ids: ['', ''],
    }
  ]

  leaderboard: LeaderBoard = {
    id: 'some-id-here',
    game_id: 'another-one-here',
    name: 'Game',
    description: 'Angular is better than react :)',
    metrics_ids: ['is', 'id'],
  }

  scores: Score[] = [
    {
      id: 'score-id',
      match_id: 'match-id',
      player_id: 'player-id',
      metric_id: 'metric-id',
      score: 300,
    },
    {
      id: 'score-id',
      match_id: 'match-id',
      player_id: 'player-id',
      metric_id: 'metric-id',
      score: 300,
    },
  ]

}
