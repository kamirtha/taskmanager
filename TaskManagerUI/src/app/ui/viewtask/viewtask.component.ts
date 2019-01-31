import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TaskModule, TaskSearchModule } from '../../model/task/task.module';
import { TaskmanagerService } from '../../services/taskmanager.service';

import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './confirmationdialog.component.html'
})

export class ConfirmationDialog implements OnInit {

  @Input() confirmationMessage;
  @Input() taskDescription;

  ngOnInit() {
  }

  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css'],
  entryComponents: [ConfirmationDialog]
})

export class ViewtaskComponent implements OnInit {

  constructor(private taskService: TaskmanagerService,
    private route: Router,
    private modalService: NgbModal) { }

  Tasks: TaskModule[];
  confirmationMessage: string;
  taskId: number;
  taskDescription: string;
  filteredTask: TaskModule[];
  showDialog: boolean;
  closeResult: string;
  errorMessage: string;

  searchTask: TaskSearchModule;

  ngOnInit() {
    this.searchTask = new TaskSearchModule();
    this.getAllTasks();    
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe(result => this.Tasks = result);
  }

  editTask(id: number) {
    this.route.navigate(['/edittask/' + id]);
  }

  completeTask(id: number) {
    this.taskId = id;
    this.filteredTask = this.Tasks.filter(t => t.TaskId == this.taskId);
    this.taskDescription = this.filteredTask[0].TaskDescription;
    this.confirmationMessage = "Are you sure to complete the task ?";
    this.closeResult = "";

    const modalRef = this.modalService.open(ConfirmationDialog, { ariaLabelledBy: 'modal-basic-title' });
    modalRef.componentInstance.confirmationMessage = this.confirmationMessage;
    modalRef.componentInstance.taskDescription = this.taskDescription;

    modalRef.result.then((result) => {

      this.closeResult = result;

      if (this.closeResult == "Yes") {
        this.taskService.completeTask(this.taskId).subscribe(response => {
          if (response) {
            this.getAllTasks();
          }
          else {
            this.errorMessage = "Error while saving data";
          }
        })
      }
    }, (reason) => {
      this.closeResult = reason;
    })
  }

  deleteTask(id: number) {
    this.taskId = id;
    this.filteredTask = this.Tasks.filter(t => t.TaskId == this.taskId);
    this.taskDescription = this.filteredTask[0].TaskDescription;
    this.confirmationMessage = "Are you sure to delete the task ?";
    this.closeResult = "";

    const modalRef = this.modalService.open(ConfirmationDialog, { ariaLabelledBy: 'modal-basic-title' });
    modalRef.componentInstance.confirmationMessage = this.confirmationMessage;
    modalRef.componentInstance.taskDescription = this.taskDescription;

    modalRef.result.then((result) => {
      this.closeResult = result;

      if (this.closeResult == "Yes") {
        this.taskService.deleteTask(this.taskId).subscribe(result => {
          if (result) {
            this.getAllTasks();
          }
          else {
            this.errorMessage = "Error while saving data";
          }
        })
      }
    }, (reason) => {
      this.closeResult = reason;
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

