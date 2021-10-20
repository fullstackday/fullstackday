import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkItemApiService } from '../services/work-item-api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { WorkItem } from '../models/WorkItem';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-work-time-list',
    templateUrl: './work-time-list.component.html',
    styleUrls: [ './work-time-list.component.scss' ]
})
export class WorkTimeListComponent {
    @Input() workItems!: WorkItem[];
    @Output() edit = new EventEmitter<string>();
    @Output() delete = new EventEmitter<string>();
    displayedColumns = [ 'project', 'start', 'end', 'comment', 'edit', 'delete' ];

    deleteItem(id: string) {
        this.delete.emit(id);
    }

    editItem(id: string) {
        this.edit.emit(id);
    }
}
