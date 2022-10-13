import { Component, OnInit, ChangeDetectionStrategy, Renderer2, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import { GuidedTour, GuidedTourService, Orientation } from 'ngx-guided-tour';
import { take, timer } from 'rxjs';
import { SCREEN_MESSAGES } from 'src/app/constants/messages';
import { BoardService } from '../../services/board.service';
import { defaultStepOptions, boardTourSteps } from '../../data'
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class BoardComponent implements OnInit, AfterViewInit {

  @ViewChild('addParticipantDialog', { read: ElementRef, static: true }) addParticipantDialog: ElementRef<any> | null = null
  highlightBtn = false
  constructor(public _BoardService: BoardService, private guidedTourService: GuidedTourService, private cdr: ChangeDetectorRef, private shepherdService: ShepherdService) { }

  ngOnInit(): void {
    this._BoardService.setUpBoard();
  }

  ngAfterViewInit(): void {

    this.shepherdService.defaultStepOptions = defaultStepOptions;
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = true;
    this.shepherdService.addSteps(boardTourSteps);
  }

  addPlayerInBoard() {
    this.addParticipantDialog?.nativeElement?.showModal();
    // this._BoardService.addPlayer(new Player('Vipul'+Date.now()))
  }
  fetchActivity() {
    this._BoardService.playerCount$.pipe(take(1)).subscribe(count => {
      if (!count) { this.highlightAddPariticipant(); return }
      this._BoardService.fetchActivity({participants: count})
    })
  }

  get messages() {
    return SCREEN_MESSAGES.board
  }

  startTutorial() {
    this.shepherdService.start();
  }

  highlightAddPariticipant() {
    this.highlightBtn = true;
    timer(1000).pipe(take(1)).subscribe(() => { this.highlightBtn = false; this.cdr.markForCheck(); });
  }
}
