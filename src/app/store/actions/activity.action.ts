import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { ActivityRequest } from 'src/app/board/models/activity.request.model';
import { Activity, ActivityError } from 'src/app/board/models/activity.response.model';


// Activity

export const ActivityAction = createActionGroup({
  source: 'Activity',
  events: {
		'Default': emptyProps(),
		'Fetch': (req: ActivityRequest) => ({req}),
		'SetActivity': (activity: Activity | ActivityError) => ({activity})
	},
});
