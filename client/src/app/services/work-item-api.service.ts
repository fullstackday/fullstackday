import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkItem } from '../models/WorkItem';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WorkItemApiService {
    private readonly ApiUrl: string = 'http://localhost:3000/records'

    constructor(private readonly http: HttpClient) {
    }

    getAll(): Observable<WorkItem[]> {
        return this.http.get<WorkItem[]>(this.ApiUrl);
    }

    getById(id: string): Observable<WorkItem> {
        return this.http.get<WorkItem>(`${this.ApiUrl}/${id}`);
    }

    save(workItem: WorkItem) {
        return this.http.post(this.ApiUrl, workItem).pipe(
            concatMap(() => this.getAll())
        );
    }

    update(workItem: WorkItem, id: string) {
        return this.http.put(`${this.ApiUrl}/${id}`, workItem).pipe(
            concatMap(() => this.getAll())
        );
    }

    delete(id: string) {
        return this.http.delete(`${this.ApiUrl}/${id}`).pipe(
            concatMap(() => this.getAll())
        );
    }
}
