import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { WorkItemApiService } from '../services/work-item-api.service';
import { WorkItem } from '../models/WorkItem';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-work-time-editor',
    templateUrl: './work-time-editor.component.html',
    styleUrls: [ './work-time-editor.component.scss' ]
})
export class WorkTimeEditorComponent {
    @Output() save = new EventEmitter<WorkItem[]>()
    workItemForm: FormGroup = this.formBuilder.group({
        project: [ '', [ Validators.required ] ],
        date: [ '', [ Validators.required ] ],
        start: [ '', [ Validators.required ] ],
        end: [ '', [ Validators.required ] ],
        comment: [ '' ]
    });

    constructor(private readonly formBuilder: FormBuilder, private readonly workItemApiService: WorkItemApiService) {
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

        this.workItemApiService.save(workItem)
            .pipe(take(1))
            .subscribe((workItems) => this.save.emit(workItems));
    }

    reset(): void {

    }
}
