import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ViewtaskComponent, ConfirmationDialog } from './viewtask.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipe/task/filter.pipe';
import { TaskmanagerService } from 'src/app/services/taskmanager.service';
import { MockTaskmanagerService } from 'src/app/services/mocktaskmanager.service';

import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe('ViewtaskComponent', () => {
  let component: ViewtaskComponent;
  let fixture: ComponentFixture<ViewtaskComponent>;
  let taskService: TaskmanagerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ViewtaskComponent,
        ConfirmationDialog,
        FilterPipe
      ],
      imports:[
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        { provide: TaskmanagerService, useClass: MockTaskmanagerService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', ()  => {
    expect(component).toBeTruthy();
  });

  it('should have Task list greater than 0', () => {
    expect(component.Tasks.length).toBeGreaterThan(0);
  });

});
