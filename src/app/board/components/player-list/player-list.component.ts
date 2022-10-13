import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListComponent implements OnInit {

  @Input() playerList: Array<Player> | null = null
  constructor() { }

  ngOnInit(): void {
  }

}
