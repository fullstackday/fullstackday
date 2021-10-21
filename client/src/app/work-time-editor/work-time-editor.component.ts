import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WorkItemApiService} from '../services/work-item-api.service';
import {WorkItem} from '../models/WorkItem';
import {take} from 'rxjs/operators';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WorkTimeService} from "../services/work-time.service";

@Component({
  selector: 'app-work-time-editor',
  templateUrl: './work-time-editor.component.html',
  styleUrls: ['./work-time-editor.component.scss']
})
export class WorkTimeEditorComponent implements OnInit {
  workItemForm: FormGroup = this.formBuilder.group({
    project: ['', [Validators.required]],
    date: ['', [Validators.required]],
    start: ['', [Validators.required]],
    end: ['', [Validators.required]],
    comment: ['']
  });

  constructor(private readonly formBuilder: FormBuilder,
              private readonly workItemApiService: WorkItemApiService,
              private readonly workTimeService: WorkTimeService,
              private readonly matDialogRef: MatDialogRef<WorkTimeEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data?: { id: string }) {
  }

  ngOnInit() {
    if (this.data?.id) {
      this.workItemApiService.getById(this.data.id).pipe(
        take(1),
      ).subscribe(workItem => {
        this.workItemForm.controls['project'].setValue(workItem.project);
        this.workItemForm.controls['comment'].setValue(workItem.comment);
      })
    }

  }

  saveItem(): void {
    const startTime = this.workItemForm.value.start.split(':');
    const endTime = this.workItemForm.value.end.split(':');

    const workItem = {
      start: this.workTimeService.addTimePeriodToDate(this.workItemForm.value.date, +startTime[0], +startTime[1]),
      end: this.workTimeService.addTimePeriodToDate(this.workItemForm.value.date, +endTime[0], +endTime[1]),
      project: this.workItemForm.value.project,
      comment: this.workItemForm.value.comment
    } as WorkItem;

    if (this.data?.id) {
      this.workItemApiService.update(workItem, this.data.id)
        .pipe(take(1))
        .subscribe((workItems) => this.matDialogRef.close(workItems));
    } else {
      this.workItemApiService.save(workItem)
        .pipe(take(1))
        .subscribe((workItems) => this.matDialogRef.close(workItems));
    }
  }
}
