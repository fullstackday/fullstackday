import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { WorkItem } from './models/WorkItem';
import { WorkItemApiService } from './services/work-item-api.service';
import { MatDialog } from '@angular/material/dialog';
import { WorkTimeEditorComponent } from './work-time-editor/work-time-editor.component';
import { filter, take } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
    workItemList$!: Observable<WorkItem[]>;
    workItems: BehaviorSubject<WorkItem[]> = new BehaviorSubject<WorkItem[]>([]);

    constructor(private readonly workItemApiService: WorkItemApiService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.workItemList$ = merge(
            this.workItemApiService.getAll(),
            this.workItems
        )
    }

    openForm(id? : string) {
        let dialogRef;

        if (id) {
            dialogRef = this.dialog.open(WorkTimeEditorComponent, {data: {id}} );
        } else {
            dialogRef = this.dialog.open(WorkTimeEditorComponent, );
        }

        dialogRef.afterClosed().pipe(
            take(1),
            filter(workItems => !!workItems)
        ).subscribe(workItems => {
            this.workItems.next(workItems);
        });
    }

    edit(id : string) {
        this.openForm(id);
    }

    delete(id : string) {
        this.workItemApiService.delete(id).subscribe(workItems => {
            this.workItems.next(workItems);
        })
    }
}
