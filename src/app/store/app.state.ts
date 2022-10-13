import { Activity, ActivityError } from "../board/models/activity.response.model"
import { JokeModel } from "../board/models/joke.response.model";
import { Player } from "../board/models/player.model"

export interface State {
    'players': Array<Player>
    'activity': Array<Activity | ActivityError>,
    'loading': {
        isLoading: boolean;
        loadingPercentage: number
    },
    'jokes': Array<JokeModel>
}

export const AppState: State = {
    'players': [],
    'activity': [],
    'loading': {
        isLoading: false,
        loadingPercentage: 0
    },
    'jokes': []
}
