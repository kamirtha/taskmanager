import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common'

import { TaskModule } from 'src/app/model/task/task.module';
import { TaskmanagerService } from '../../services/taskmanager.service';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';


@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  public Task: TaskModule;
  public ParentTasks: TaskModule[];

  editForm: FormGroup;
  submitted: boolean = false;
  status: boolean;
  error: string;
  parentTaskId: number;
  taskId: number;

  constructor(private taskService: TaskmanagerService,
    private route: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.Task = new TaskModule();

    // new object
    this.editForm = new FormGroup({
      TaskDescription: new FormControl('', Validators.required),
      ParentTaskId: new FormControl(''),
      Priority: new FormControl(10),
      StartDate: new FormControl('', Validators.required),
      EndDate: new FormControl('', Validators.required)
    });

    this.activatedRoute.params.subscribe(params => {
      this.taskId = params['id'];
      this.Task.TaskId = this.taskId;
    })

    // get the parent tasks
    this.taskService.getParentTasks(this.taskId).subscribe(result => this.ParentTasks = result);

    // get the task details by id
    this.taskService.getTaskById(this.taskId).subscribe(
      result => {

        this.Task = result;

        this.editForm.patchValue({
          TaskDescription: this.Task.TaskDescription,
          ParentTaskId: this.Task.ParentTaskId,
          Priority: this.Task.Priority,
          StartDate: formatDate(this.Task.StartDate, 'yyyy-MM-dd', 'en-US'),
          EndDate: formatDate(this.Task.EndDate, 'yyyy-MM-dd', 'en-US')
        });
      }
    );
  }

  get f() { return this.editForm.controls; }


  onSubmit() {

    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    this.Task.TaskDescription = this.editForm.get('TaskDescription').value;
    this.Task.ParentTaskId = this.editForm.get('ParentTaskId').value;
    this.Task.Priority = this.editForm.get('Priority').value;
    this.Task.StartDate = this.editForm.get('StartDate').value;
    this.Task.EndDate = this.editForm.get('EndDate').value;

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
