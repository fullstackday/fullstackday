import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { WorkItemApiService } from '../services/work-item-api.service';
import { WorkItem } from '../models/WorkItem';
import { take } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-work-time-editor',
    templateUrl: './work-time-editor.component.html',
    styleUrls: [ './work-time-editor.component.scss' ]
})
export class WorkTimeEditorComponent implements OnInit {
    workItemForm!: FormGroup;

    constructor(private readonly formBuilder: FormBuilder, private readonly workItemApiService: WorkItemApiService,
                private readonly matDialogRef: MatDialogRef<WorkTimeEditorComponent>,
                @Inject(MAT_DIALOG_DATA) public data?: { id: string }) {
    }

    ngOnInit() {
        console.log(this.data?.id)
        if (this.data?.id) {
            this.workItemApiService.getById(this.data.id).pipe(
                take(1),
            ).subscribe(workItem => {
                this.workItemForm = this.formBuilder.group({
                    project: [ workItem.project, [ Validators.required ] ],
                    date: [ '', [ Validators.required ] ],
                    start: [ '', [ Validators.required ] ],
                    end: [ '', [ Validators.required ] ],
                    comment: [ workItem.comment ]
                });
            })
        } else {
            this.workItemForm = this.formBuilder.group({
                project: [ '', [ Validators.required ] ],
                date: [ '', [ Validators.required ] ],
                start: [ '', [ Validators.required ] ],
                end: [ '', [ Validators.required ] ],
                comment: [ '' ]
            });
        }

    }

    saveItem(): void {
        const startTime = this.workItemForm.value.start.split(':');
        const endTime = this.workItemForm.value.end.split(':');

        const date = moment(this.workItemForm.value.date);
        const start = moment(date.add(+startTime[ 0 ], 'hours').add(+startTime[ 1 ], 'minutes'));
        const end = moment(date.add(+endTime, 'hours').add(+endTime[ 1 ], 'minutes'));

        const workItem = {
            start: start.valueOf(),
            end: end.valueOf(),
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
