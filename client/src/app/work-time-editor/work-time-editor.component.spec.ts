import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkTimeEditorComponent} from './work-time-editor.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MockModule, MockProvider} from 'ng-mocks';
import {WorkItemApiService} from '../services/work-item-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCommonModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {of} from 'rxjs';

describe('WorkTimeEditorComponent', () => {
  let component: WorkTimeEditorComponent;
  let fixture: ComponentFixture<WorkTimeEditorComponent>;

  let workItemApiService: WorkItemApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WorkTimeEditorComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        MatCommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MockModule(MatDatepickerModule),
        MockModule(MatCardModule)
      ],
      providers: [
        FormBuilder,
        MockProvider(WorkItemApiService, {
          update: (workItem) => of([workItem]),
          save: (workItem) => of([workItem])
        }),
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}},
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTimeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Triggers change detection cycle for component

    workItemApiService = TestBed.inject(WorkItemApiService);
  });

  it('should be initially invalid', () => {
    expect(component.workItemForm.valid).toBe(false);
    expect(component.workItemForm.controls['project'].valid).toBe(false);
    expect(component.workItemForm.controls['date'].valid).toBe(false);
    expect(component.workItemForm.controls['start'].valid).toBe(false);
    expect(component.workItemForm.controls['end'].valid).toBe(false);
    expect(component.workItemForm.controls['comment'].valid).toBe(true);
  });

  it('should call WorkItemApiService.save with entered data', () => {
    const save = jest.spyOn(workItemApiService, 'save')
    expect(save).toHaveBeenCalledTimes(0);

    component.workItemForm.controls['project'].setValue('test');
    component.workItemForm.controls['date'].setValue('1.1.2022');
    component.workItemForm.controls['start'].setValue('11:00');
    component.workItemForm.controls['end'].setValue('11:10');

    expect(component.workItemForm.valid).toBe(true);

    component.saveItem();

    expect(save).toHaveBeenCalledTimes(1);
    expect(save).toHaveBeenCalledWith({
      'comment': '',
      'end': 1641031800000,
      'project': 'test',
      'start': 1641031200000
    });
  });
});
