import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTimeEditorComponent } from './work-time-editor.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MockModule, MockProviders} from "ng-mocks";
import {WorkItemApiService} from "../services/work-item-api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";

describe('WorkTimeEditorComponent', () => {
  let component: WorkTimeEditorComponent;
  let fixture: ComponentFixture<WorkTimeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WorkTimeEditorComponent,
      ],
      imports: [
        MockModule(MatCardModule),
        MockModule(MatDatepickerModule),
        MockModule(MatFormFieldModule),
        MockModule(ReactiveFormsModule),
      ],
      providers: [
        FormBuilder,
        MockProviders(WorkItemApiService),
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTimeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
