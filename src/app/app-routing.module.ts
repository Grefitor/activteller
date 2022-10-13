import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/components/board/board.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  // { path: 'demo', component: DemoComponent },
  {path: '', component: BoardComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
