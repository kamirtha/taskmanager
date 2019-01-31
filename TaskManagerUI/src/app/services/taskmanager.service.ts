import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { observable, of, Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { TaskModule } from '../model/task/task.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TaskmanagerService {

  endpoint: string = `${environment.apiBaseUri}`;

  constructor(private http: HttpClient) {
  }

  // get all the tasks
  getAllTasks(): Observable<TaskModule[]> {
    return this.http.get<TaskModule[]>(this.endpoint + '/getalltasks')
      .pipe(
        catchError(e => this.handleError(e)));
  }

  // get the task details by id
  getTaskById(id): Observable<TaskModule> {
    return this.http.get<TaskModule>(this.endpoint + '/gettaskbyid/' + id)
      .pipe(
        catchError(e => this.handleError(e)));
  }

  // get the tasks for parent task dropdown
  getParentTasks(id): Observable<TaskModule[]> {
    return this.http.get<TaskModule[]>(this.endpoint + '/getparenttasks/' + id)
      .pipe(
        catchError(e => this.handleError(e)));
  }

  // save the task (add, edit)
  saveTask(task: TaskModule): Observable<boolean> {
    return this.http.post<boolean>(this.endpoint + '/save', task)
      .pipe(
        catchError(e => this.handleError(e)));
  }

  // complete the task for the given id
  completeTask(id): Observable<boolean> {
    return this.http.post<boolean>(this.endpoint + '/completetask', { "TaskId": id })
      .pipe(
        catchError(e => this.handleError(e)));
  }

  // delete the task for the given id
  deleteTask(id): Observable<boolean> {
    return this.http.delete<boolean>(this.endpoint + '/deletetask/' + id)
      .pipe(
        catchError(e => this.handleError(e)));
  }

  handleError(error: any) {
    console.log(error);
    return throwError("Server error occured");
  }
}
