import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpEventType
} from '@angular/common/http';
import { catchError, map, Observable, of, retry, tap } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private _loading: LoaderService
  ) { }
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   this._loading.setLoading(true, req.url);
  //   return next.handle(req).pipe(tap((req) => {
  //     if(req.type === HttpEventType.Response) {
  //       this._loading.setLoading(false, req.url as string);
  //     }
  //   }), catchError(err => {
  //     return of(err)
  //   }))
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
    this._loading.setLoading(true, request.url);
    return next.handle(request)
      .pipe(catchError((err) => {
        this._loading.setLoading(false, request.url);
        return of(err);
      }))
      .pipe(map((evt) => {
        if (evt.type === HttpEventType.Response) {
          this._loading.setLoading(false, request.url);
        }
        return evt;
      }));
  }
}
