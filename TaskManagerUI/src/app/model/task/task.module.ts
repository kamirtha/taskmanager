import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TaskModule {
  TaskId: number;
  TaskDescription: string;
  ParentTaskId: number;
  ParentTaskDescription: string;
  Priority: number;
  StartDate: Date;
  EndDate: Date;
  Completed: boolean;
 }

 export class TaskSearchModule {
  TaskDescription: string;
  ParentTaskDescription: string;
  PriorityFrom: string;
  PriorityTo: string;
  StartDate: Date;
  EndDate: Date;
 }

