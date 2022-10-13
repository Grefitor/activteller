import { createReducer, on } from '@ngrx/store';
import { ActivityAction } from '../actions/activity.action';
import { AppState } from '../app.state';

export const activityReducer = createReducer(
  AppState.activity,
  on(ActivityAction.default, (state) => ([...state]) ),
  on(ActivityAction.setactivity, (state, {activity}) => ([activity, ...state])),
);
