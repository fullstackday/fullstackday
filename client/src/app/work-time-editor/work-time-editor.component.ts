import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkItemApiService } from '../services/work-item-api.service';
import { WorkItem } from '../models/WorkItem';
import { take } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateTimeCalculatorService } from '../services/date-time-calculator.service';

@Component({
    selector: 'app-work-time-editor',
    templateUrl: './work-time-editor.component.html',
    styleUrls: [ './work-time-editor.component.scss' ]
})
export class WorkTimeEditorComponent implements OnInit {
    workItemForm: FormGroup = this.formBuilder.group({
        project: [ '', [ Validators.required ] ],
        date: [ '', [ Validators.required ] ],
        start: [ '', [ Validators.required ] ],
        end: [ '', [ Validators.required ] ],
        comment: [ '' ]
    });

    constructor(private readonly formBuilder: FormBuilder,
                private readonly workItemApiService: WorkItemApiService,
                private readonly dateTimeCalculator: DateTimeCalculatorService,
                private readonly matDialogRef: MatDialogRef<WorkTimeEditorComponent>,
                @Inject(MAT_DIALOG_DATA) public data?: { id: string }) {
    }

    ngOnInit() {
        if (this.data?.id) {
            this.workItemApiService.getById(this.data.id).pipe(
                take(1),
            ).subscribe(workItem => {
                const {hours: startHours, minutes: startMinutes, date} = this.dateTimeCalculator.getDateTimeFromMilliSeconds(workItem.start)
                const {hours: endHours, minutes: endMinutes } = this.dateTimeCalculator.getDateTimeFromMilliSeconds(workItem.end)

                this.workItemForm.controls[ 'project' ].setValue(workItem.project);
                this.workItemForm.controls[ 'comment' ].setValue(workItem.comment);
                this.workItemForm.controls[ 'start' ].setValue(`${startHours}:${startMinutes}`);
                this.workItemForm.controls[ 'end' ].setValue(`${endHours}:${endMinutes}`);
                this.workItemForm.controls[ 'date' ].setValue(new Date(date));
            })
        }

    }

    saveItem(): void {
        const startTime = this.workItemForm.value.start.split(':');
        const endTime = this.workItemForm.value.end.split(':');
        const date = this.workItemForm.value.date;

        const workItem = {
            start: this.dateTimeCalculator.convertDatetimeInMilliseconds(startTime, date),
            end: this.dateTimeCalculator.convertDatetimeInMilliseconds(endTime, date),
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
