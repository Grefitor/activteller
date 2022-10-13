import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SCREEN_MESSAGES } from 'src/app/constants/messages';
import { Activity, ActivityError } from '../../models/activity.response.model';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-activity[activity]',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent implements OnInit {
  @Input() activity: Activity | ActivityError | any;
  constructor(public _JokeService: JokesService) {}

  ngOnInit(): void {}


  get content() {
    return SCREEN_MESSAGES.activity;
  }
}
