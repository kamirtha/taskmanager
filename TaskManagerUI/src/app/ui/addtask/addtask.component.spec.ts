import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddtaskComponent } from './addtask.component';
import { TaskmanagerService } from 'src/app/services/taskmanager.service';
import { MockTaskmanagerService } from 'src/app/services/mocktaskmanager.service';

describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddtaskComponent
      ],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: TaskmanagerService, useClass: MockTaskmanagerService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // validate form controls
  it('form validity false when mandatory values are not entered', () => {

    component.addForm.patchValue({
      TaskDescription: "",
      ParentTaskId: 0,
      Priority: 0,
      StartDate: "",
      EndDate: ""
    });

    expect(component.addForm.invalid).toBeTruthy();
  });

  // validate form controls
  it('form validity true when mandatory values are entered', () => {

    component.addForm.patchValue({
      TaskDescription: "Testing",
      ParentTaskId: 0,
      Priority: 10,
      StartDate: new Date(2018, 12, 15),
      EndDate: new Date(2018, 12, 16)
    });

    expect(component.addForm.valid).toBeTruthy();
  });

});
