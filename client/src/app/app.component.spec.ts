import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {WorkItemApiService} from './services/work-item-api.service';
import {MockComponent, MockProviders, MockService} from 'ng-mocks';
import {MatDialog} from '@angular/material/dialog';
import {HeaderComponent} from "./header/header.component";
import {WorkTimeListComponent} from "./work-time-list/work-time-list.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(HeaderComponent),
        MockComponent(WorkTimeListComponent),
      ],
      providers: [
        {provide: WorkItemApiService, useValue: MockProviders(WorkItemApiService)},
        {
          provide: MatDialog,
          useValue: MockService(MatDialog),
        },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    // TODO
    expect(true).toBeTruthy();
  });
});
