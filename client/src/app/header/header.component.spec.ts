import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MockModule } from 'ng-mocks';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
            imports: [
                MockModule(MatToolbarModule)
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    test('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});
