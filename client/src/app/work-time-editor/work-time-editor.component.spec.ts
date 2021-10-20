import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTimeEditorComponent } from './work-time-editor.component';

describe('WorkTimeEditorComponent', () => {
  let component: WorkTimeEditorComponent;
  let fixture: ComponentFixture<WorkTimeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTimeEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTimeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
