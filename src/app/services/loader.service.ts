import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, tap } from 'rxjs';
import { LoadingActions } from '../store/actions';
import { State } from '../store/app.state';
import { loadingStateSelector } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  /**
   * Contains in-progress loading requests
   */
  loadingMap: Map<string, boolean> = new Map<string, boolean>();
  constructor(private _Store: Store<State>) { }

  get isLoading$() {
    return this._Store.select(loadingStateSelector).pipe(map(ele => ele.isLoading));
  }

  setLoading(loading: boolean, url: string): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoadingService.setLoading function');
    }
    if (loading === true) {
      this.loadingMap.set(url, loading);
      // this.loadingSub.next(true);
      this._Store.dispatch(LoadingActions.loading({isLoading: true, loadingPercentage: 0}))
    }else if (loading === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }
    if (this.loadingMap.size === 0) {
      // this.loadingSub.next(false);
      this._Store.dispatch(LoadingActions.loaded())
    }
  }
}
