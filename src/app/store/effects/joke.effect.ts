import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { JokesService } from "src/app/board/services/jokes.service";
import { ActivityAction, JokeAction, LoadingActions } from "../actions";
import { State } from "../app.state";

@Injectable()
export class JokeEffect {
  fetchJoke$ = createEffect(() =>
    this._Actions.pipe(
      ofType(JokeAction.fetchjokeonerror),
      exhaustMap((props) => {
        return this._JokeService.getJokeFromAPI().pipe(
          map((res) => {
            this._Store.dispatch(ActivityAction.setactivity(props.res))
            return JokeAction.setjoke(res);
          })
        );
      })
    )
  );
  constructor(
    private _Actions: Actions,
    private _JokeService: JokesService,
    private _Store: Store<State>
  ) {}
}
