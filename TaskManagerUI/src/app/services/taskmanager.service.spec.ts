import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { TaskmanagerService } from './taskmanager.service';
import { MockTaskmanagerService } from './mocktaskmanager.service';
import { TaskModule } from '../model/task/task.module';

describe('TaskmanagerService', () => {

  let service: TaskmanagerService;
  let httpClient: HttpClient;
  let mocktaskmanager: MockTaskmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ],
      providers: [
        { provide: TaskmanagerService, useClass: MockTaskmanagerService }
      ]
    });

    service = TestBed.get(TaskmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });  

  it('#getalltasks', () => {
    let tasks: TaskModule[];
    service.getAllTasks().subscribe(result => { tasks = result });
    expect(tasks.length).toBeGreaterThanOrEqual(0);
  });  

  it('#gettaskbyid', () => {
    let task: TaskModule;
    const taskId = 1;
    service.getTaskById(taskId ).subscribe(result => { task = result });
    expect(task.TaskId).toBe(taskId);
  }); 

  it('#addTask', () => {
    let task: TaskModule;
    let response: boolean;

    task = { 
      TaskId: 3, 
      TaskDescription: "Task 3", 
      ParentTaskId: 0, 
      ParentTaskDescription: "", 
      StartDate: new Date(2018, 12, 15), 
      EndDate: new Date(2018, 12, 15),
      Priority: 15,
      Completed: false  
    };

    service.saveTask(task).subscribe(result => {  response = result });
    expect(response).toBe(true);
  }); 

  it('#updateTask', () => {
    let task: TaskModule;
    let response: boolean;

    task = { 
      TaskId: 3, 
      TaskDescription: "Task 3 Updated", 
      ParentTaskId: 0, 
      ParentTaskDescription: "", 
      StartDate: new Date(2018, 12, 15), 
      EndDate: new Date(2018, 12, 15),
      Priority: 15,
      Completed: false  
    };

    service.saveTask(task).subscribe(result => {  response = result });
    expect(response).toBe(true);
  }); 

  it('#completeTask', () => {    
    let response: boolean;
    const taskId = 3;
    service.completeTask(taskId).subscribe(result => {  response = result });
    expect(response).toBe(true);
  }); 

  it('#deleteTask', () => {    
    let response: boolean;
    const taskId = 3;
    service.deleteTask(taskId).subscribe(result => {  response = result });
    expect(response).toBe(true);
  }); 
});
