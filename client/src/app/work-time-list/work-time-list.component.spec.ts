import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTimeListComponent } from './work-time-list.component';

describe('WorkTimeListComponent', () => {
    let component: WorkTimeListComponent;
    let fixture: ComponentFixture<WorkTimeListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ WorkTimeListComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkTimeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    test('should create', () => {
        expect(component).toBeTruthy();
    });
});
