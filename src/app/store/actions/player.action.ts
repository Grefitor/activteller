import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Player } from 'src/app/board/models/player.model';

// Players
export const PlayerActions = createActionGroup({
  source: 'Player',
  events: {
    'Default': emptyProps(),
    'AddPlayer': (player: Player) => ({player}),
    'RemovePlayer': (id: string) => ({ id }),
  },
});