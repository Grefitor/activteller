import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, finalize, map } from 'rxjs';
import { ActivityError } from 'src/app/board/models/activity.response.model';
import { BoardService } from 'src/app/board/services/board.service';
import { ActivityAction, JokeAction, LoadingActions } from '../actions';
import { State } from '../app.state';

@Injectable()
export class ActivityEffect {
  fetchActivity$ = createEffect(() =>
    this._Actions.pipe(
      ofType(ActivityAction.fetch),
      exhaustMap((props) => {
        return this._BoardService.getActivity(props.req).pipe(
          map((res) => {
            if (res instanceof ActivityError) {
              return JokeAction.fetchjokeonerror(res)
            }
            return ActivityAction.setactivity(res)
          })
        );
      })
    )
  );
  constructor(
    private _Actions: Actions,
    private _BoardService: BoardService
  ) {}
}
