import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkItem } from '../models/WorkItem';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WorkItemApiService {
    private readonly ApiUrl: string = 'http://localhost:3000/records'
    private workItems: ReplaySubject<WorkItem> = new ReplaySubject<WorkItem>(1);
    workItems$ = this.workItems.asObservable();

    constructor(private readonly http: HttpClient) {
    }

    getAll(): Observable<WorkItem[]> {
        return this.http.get<WorkItem[]>(this.ApiUrl);
    }

    save(workItem: WorkItem) {
        return this.http.post(this.ApiUrl, workItem).pipe(
            concatMap(() => this.getAll())
        );
    }

    delete(id: string) {
        return this.http.delete(`${this.ApiUrl}/${id}`).pipe(
            concatMap(() => this.getAll())
        );
    }
}
