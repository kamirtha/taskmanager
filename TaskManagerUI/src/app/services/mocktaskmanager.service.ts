import { Injectable } from '@angular/core';
import { observable, of, Observable, throwError } from 'rxjs';
import { TaskModule } from '../model/task/task.module';
import { TaskmanagerService } from './taskmanager.service';

@Injectable({
  providedIn: 'root'
})

export class MockTaskmanagerService extends TaskmanagerService {

  dummyTasks: TaskModule[] = [
    { TaskId: 1, TaskDescription: "My First Task", ParentTaskId: 0, ParentTaskDescription: "", Priority: 10, StartDate: new Date("2018-12-10"), EndDate: new Date("2018-12-15"), Completed: false },
    { TaskId: 2, TaskDescription: "My Second Task", ParentTaskId: 1, ParentTaskDescription: "", Priority: 10, StartDate: new Date("2018-12-10"), EndDate: new Date("2018-12-15"), Completed: false }
  ]

  // get all the tasks
  getAllTasks(): Observable<TaskModule[]> {
    return of(this.dummyTasks);
  }

  // get the task details by id
  getTaskById(id): Observable<TaskModule> {
    let task: TaskModule = this.dummyTasks.find(t => t.TaskId == id);
    return of(task);
  }

  //[] get the tasks for parent task dropdown
  getParentTasks(id): Observable<TaskModule[]> {
    return of(this.dummyTasks);
  }

  // save the task (add, edit)
  saveTask(task: TaskModule): Observable<boolean> {
    let taskIndex = this.dummyTasks.findIndex(t => t.TaskId == task.TaskId);

    if (taskIndex < 0) {
      this.dummyTasks.push(task);
    }
    else {
      this.dummyTasks[taskIndex] = task;
    }

    return of(true);
  }

  // complete the task for the given id
  completeTask(id): Observable<boolean> {

    let taskIndex = this.dummyTasks.findIndex(t => t.TaskId == id);

    if (taskIndex < 0) {
      throwError("Task not found");
    }
    else {
      this.dummyTasks[taskIndex].Completed = true;
    }

    return of(true);
  }

  // delete the task for the given id
  deleteTask(id): Observable<boolean> {

    let taskIndex = this.dummyTasks.findIndex(t => t.TaskId == id);

    if (taskIndex < 0) {
      throwError("Task not found");
    }
    else {
      this.dummyTasks.slice(taskIndex, 1);
    }

    return of(true);
  }
}
