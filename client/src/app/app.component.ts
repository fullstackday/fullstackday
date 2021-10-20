import { Component } from '@angular/core';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { WorkItem } from './models/WorkItem';
import { WorkItemApiService } from './services/work-item-api.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    workItemList$!: Observable<WorkItem[]>;
    workItems: BehaviorSubject<WorkItem[]> = new BehaviorSubject<WorkItem[]>([]);

    constructor(private readonly workItemApiService: WorkItemApiService) {
    }

    ngOnInit(): void {
        this.workItemList$ = merge(
            this.workItemApiService.getAll(),
            this.workItems
        )
    }

    edit(id: string) {
        // ToDo to be implemented
    }

    delete(id: string) {
        this.workItemApiService.delete(id)
            .pipe(take(1))
            .subscribe((workItems: WorkItem[]) => this.workItems.next(workItems));
    }

    save(workItems: WorkItem[]) {
        this.workItems.next(workItems)
    }
}
