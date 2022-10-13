import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, map } from 'rxjs';
import { API_URL } from 'src/app/constants/url';
import { JokeAction } from 'src/app/store/actions';
import { State } from 'src/app/store/app.state';
import { selectJokes } from 'src/app/store/selectors';
import { JokeModel } from '../models/joke.response.model';

@Injectable()
export class JokesService {

  constructor(private _Http: HttpClient, private _Store: Store<State>) {}

  get joke$() {
    return this._Store
      .select(selectJokes)
      .pipe(map((val) => (val.length ? val[0] : null)));
  }

  fetchJoke() {
    this._Store.dispatch(JokeAction.fetch());
  }

  getJokeFromAPI() {
    return this._Http.get<JokeModel>(API_URL.JOKES.get, { headers: { 'Accept': 'application/json' }}).pipe(map((res: JokeModel) => new JokeModel(res)));
  }
}
