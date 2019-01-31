import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtaskComponent } from './ui/addtask/addtask.component';
import { ViewtaskComponent, ConfirmationDialog } from './ui/viewtask/viewtask.component';
import { EdittaskComponent } from './ui/edittask/edittask.component';
import { FilterPipe } from './pipe/task/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    ViewtaskComponent,
    EdittaskComponent,
    ConfirmationDialog,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    AppRoutingModule
  ],
  entryComponents:[
    ConfirmationDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
