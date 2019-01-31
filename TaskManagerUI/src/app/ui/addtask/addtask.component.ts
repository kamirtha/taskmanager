import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

import { TaskModule } from 'src/app/model/task/task.module';
import { TaskmanagerService } from '../../services/taskmanager.service';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})

export class AddtaskComponent implements OnInit {

  public Task: TaskModule;
  public ParentTasks: TaskModule[];

  addForm: FormGroup;
  submitted: boolean = false;
  status: boolean;
  error: string;
  parentTaskId: number;

  constructor(private taskService: TaskmanagerService,
    private route: Router) {
  }

  ngOnInit() {
    this.Task = new TaskModule();

    // get the parent tasks
    this.taskService.getParentTasks(0).subscribe(result => this.ParentTasks = result);

    // new object
    this.addForm = new FormGroup({
      TaskDescription: new FormControl('', Validators.required),
      ParentTaskId: new FormControl(''),
      Priority: new FormControl('10'),
      StartDate: new FormControl('', Validators.required),
      EndDate: new FormControl('', Validators.required)
    });
  }

  get f() { return this.addForm.controls; }


  onSubmit() {

    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.Task.TaskDescription = this.addForm.get('TaskDescription').value;
    this.Task.ParentTaskId = this.addForm.get('ParentTaskId').value;
    this.Task.Priority = this.addForm.get('Priority').value;
    this.Task.StartDate = this.addForm.get('StartDate').value;
    this.Task.EndDate = this.addForm.get('EndDate').value;

    this.taskService.saveTask(this.Task).subscribe(result => {
      if (result) {
        this.route.navigate(['/viewtask']);
      }
      else {
        this.error = "Error while saving the task";
      }
    });

    return;
  }

}
