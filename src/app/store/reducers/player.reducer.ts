import { createReducer, on } from '@ngrx/store';
import { PlayerActions } from '../actions/player.action';
import { AppState } from '../app.state';

export const playerReducer = createReducer(
  AppState.players,
  on(PlayerActions.default, (state) => [...state]),
  on(PlayerActions.addplayer, (state, { player }) => {
    if (state && state.length) {
      return [...state, player];
    }
    return [player];
  }),
  on(PlayerActions.removeplayer, (state, { id }) => [...state.filter(p => p.id !== id)])
);
