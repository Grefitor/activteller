import {
    createAction,
    createActionGroup,
    emptyProps,
    props,
  } from '@ngrx/store';
import { Activity, ActivityError } from 'src/app/board/models/activity.response.model';
import { JokeModel } from 'src/app/board/models/joke.response.model';

  
  
  // Activity
  
  export const JokeAction = createActionGroup({
    source: 'Joke',
    events: {
          'Default': emptyProps(),
          'Fetch': emptyProps(),
          'SetJoke': (joke: JokeModel ) => ({joke}),
          'FetchJokeOnError': (res: ActivityError) => ({res})
      },
  });
  