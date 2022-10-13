import { createReducer, on } from "@ngrx/store";
import { LoadingActions } from "../actions/loader.action";
import { AppState } from "../app.state";

export const loadingReducer = createReducer(
    AppState.loading,
    on(LoadingActions.loading, (state, {loading_state}) => ({...state, ...loading_state})),
    on(LoadingActions.loaded, (state) => ({...state, isLoading: false, loadingPercentage: 0 })),
  );