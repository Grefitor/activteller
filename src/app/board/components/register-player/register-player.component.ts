import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '../../models/player.model';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-register-player[dialogRef]',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPlayerComponent implements OnInit, AfterViewInit {

  participantForm: FormGroup;
  @Input() dialogRef: any | null = null;
  constructor(private _BoardService: BoardService, private _FB: FormBuilder) {
    this.participantForm = this._FB.group({
      'name': this._FB.control('', [Validators.required, Validators.maxLength(20)])
    })
   }
  
  ngOnInit(): void {
  }

  addParticipant() {
    this._BoardService.addPlayer(new Player(this.participantForm.value['name']))
    this.participantForm.reset();
    this.close()
  }
  
  ngAfterViewInit(): void {}


  close() {
    this.dialogRef?.close()
  }
}
