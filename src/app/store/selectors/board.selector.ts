import { createSelector } from "@ngrx/store";
import { State } from "../app.state";

export const selectPlayers = (state: State) => state.players;
export const selectActivity = (state: State) => state.activity;
export const selectPlayerCount = createSelector(selectPlayers, (players) => players.length);
export const selectJokes = (state: State) => state.jokes;