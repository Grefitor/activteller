import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map} from 'rxjs';
import { API_URL } from 'src/app/constants/url';
import {
  ActivityAction,
  PlayerActions,
} from 'src/app/store/actions';
import { State } from 'src/app/store/app.state';
import {
  selectActivity,
  selectPlayerCount,
  selectPlayers,
} from 'src/app/store/selectors';
import { ActivityRequest } from '../models/activity.request.model';
import { Activity, ActivityError } from '../models/activity.response.model';
import { Player } from '../models/player.model';

@Injectable()
export class BoardService {
  constructor(private _Http: HttpClient, private _Store: Store<State>) {}

  get players$() {
    return this._Store
      .select(selectPlayers)
      .pipe(map((value) => (value.length ? value : [])));
  }

  get activity$() {
    return this._Store
      .select(selectActivity)
      .pipe(map((val) => (val.length ? val[0] : null)));
  }

  get playerCount$() {
    return this._Store.select(selectPlayerCount);
  }

  fetchActivity(config: ActivityRequest) {
    this._Store.dispatch(ActivityAction.fetch({ ...config }));
  }
  addPlayer(player: Player) {
    this._Store.dispatch(PlayerActions.addplayer(player));
  }
  removePlayer(id: string) {
    this._Store.dispatch(PlayerActions.removeplayer(id));
  }

  setUpBoard() {
    this._Store.dispatch(ActivityAction.default());
    this._Store.dispatch(PlayerActions.default());
    // this._Store.dispatch(LoadingActions.loaded());
  }

  getActivity(config: ActivityRequest) {
    return this._Http.get<Activity | ActivityError>(API_URL.Activity.get, { params: { ...config } }).pipe(map((res: Activity | ActivityError) => {
      if ((res).hasOwnProperty('error')) {
        return new ActivityError(res as ActivityError)
      }
      return new Activity(res as Activity)
    }));
  }
}
