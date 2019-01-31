import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { observable, of, Observable, throwError } from 'rxjs';

import { EdittaskComponent } from './edittask.component';
import { TaskmanagerService } from 'src/app/services/taskmanager.service';
import { MockTaskmanagerService } from 'src/app/services/mocktaskmanager.service';
import { Params, ActivatedRoute } from '@angular/router';

describe('EdittaskComponent', () => {
  let component: EdittaskComponent;
  let fixture: ComponentFixture<EdittaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EdittaskComponent
      ],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: TaskmanagerService, useClass: MockTaskmanagerService },
        {
          provide: ActivatedRoute, useValue: {
            params: of({ id: 1 })
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittaskComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // validate form controls
  it('form validity false when mandatory values are not entered', () => {

    component.editForm.patchValue({
      TaskDescription: "",
      ParentTaskId: 0,
      Priority: 0,
      StartDate: "",
      EndDate: ""
    });

    expect(component.editForm.invalid).toBeTruthy();
  });

  // validate form controls
  it('form validity true when mandatory values are entered', () => {

    component.editForm.patchValue({
      TaskDescription: "Testing",
      ParentTaskId: 0,
      Priority: 10,
      StartDate: new Date(2018, 12, 15),
      EndDate: new Date(2018, 12, 16)
    });

    expect(component.editForm.valid).toBeTruthy();
  });
});
