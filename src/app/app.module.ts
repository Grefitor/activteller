import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { activityReducer, jokeReducer, loadingReducer, playerReducer } from './store/reducers';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RippleAnimationDirective } from './directives/ripple-animation.directive';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffect } from './store/effects/activity.effect';
import { LoaderService } from './services/loader.service';
import { JokeEffect } from './store/effects/joke.effect';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { GuidedTourComponent, GuidedTourService } from 'ngx-guided-tour';
import { ShepherdService } from 'angular-shepherd';
import { DemoComponent } from './demo/demo.component';
@NgModule({
  declarations: [
    AppComponent,
    RippleAnimationDirective,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BoardModule,
    StoreModule.forRoot({players: playerReducer, loading: loadingReducer, activity: activityReducer, jokes: jokeReducer }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !environment.production}),
    EffectsModule.forRoot([ActivityEffect, JokeEffect]),
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    GuidedTourService,
    ShepherdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
