import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewtaskComponent } from './ui/viewtask/viewtask.component';
import { AddtaskComponent } from './ui/addtask/addtask.component';
import { EdittaskComponent } from './ui/edittask/edittask.component';

const routes: Routes = [
  { path: '', redirectTo: '/viewtask', pathMatch: 'full' },
  { path: 'viewtask', component: ViewtaskComponent },
  { path: 'addtask', component: AddtaskComponent },
  { path: 'edittask/:id', component: EdittaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
