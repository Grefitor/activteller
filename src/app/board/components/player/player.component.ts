import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Player } from '../../models/player.model';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {
  @Input() player: Player | null = null;
  public imageLoading = true
  constructor(private _BoardService: BoardService, private _Cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  remove(id: string) {
    this._BoardService.removePlayer(id);
  }

  imageLoaded() {
    this.imageLoading = false;
    this._Cdr.detectChanges();
  }
}
