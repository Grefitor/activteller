import {
    createActionGroup,
    emptyProps,
  } from '@ngrx/store';
  
  

  
  export const LoadingActions = createActionGroup({
    source: 'Loading',
    events: {
          'Loading': (loading_state: { isLoading: boolean, loadingPercentage: number }) => ({loading_state}),
          'Loaded': emptyProps()
      },
  });
  