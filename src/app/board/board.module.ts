import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { PlayerComponent } from './components/player/player.component';
import { BoardService } from './services/board.service';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { RegisterPlayerComponent } from './components/register-player/register-player.component';
import { LogoComponent } from './components/logo/logo.component';
import { ShellViewComponent } from './components/shell-view/shell-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityTypePipe } from './pipes/activity-type.pipe';
import { JokesService } from './services/jokes.service';
import { GuidedTourModule } from 'ngx-guided-tour';



@NgModule({
  declarations: [
    BoardComponent,
    PlayerComponent,
    PlayerListComponent,
    RegisterPlayerComponent,
    LogoComponent,
    ShellViewComponent,
    ActivityComponent,
    ActivityTypePipe,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GuidedTourModule
  ],
  exports: [
    BoardComponent,
    PlayerComponent,
    LogoComponent,
    ShellViewComponent
  ],
  providers: [
    BoardService,
    JokesService,
    
  ]
})
export class BoardModule { }
