import { TestBed } from '@angular/core/testing';

import { DateTimeCalculatorService } from './date-time-calculator.service';

describe('DateTimeCalculatorService', () => {
    let service: DateTimeCalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DateTimeCalculatorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
