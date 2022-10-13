import { createReducer, on } from '@ngrx/store';
import { JokeAction } from '../actions/joke.action';
import { AppState } from '../app.state';

export const jokeReducer = createReducer(
  AppState.jokes,
  on(JokeAction.default, (state) => ([...state]) ),
  on(JokeAction.setjoke, (state, {joke}) => ([joke, ...state])),
);
