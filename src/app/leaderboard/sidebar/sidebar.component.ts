import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LeaderBoard } from 'src/app/core/models/leader-board.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {

 @Input() leaderboards!:LeaderBoard[]

}
