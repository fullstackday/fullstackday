import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class DateTimeCalculatorService {

    convertDatetimeInMilliseconds(time: string[], date: Date) {
        const dateWithoutTime = moment(date);
        const transformedDate = moment(dateWithoutTime.add(+time[ 0 ], 'hours').add(+time[ 1 ], 'minutes'));

        return transformedDate.valueOf();
    }

    getDateTimeFromMilliSeconds(milliseconds: number) {
        const dateWtihTime = new Date(milliseconds)
        const rawDate = dateWtihTime.setHours(0, 0, 0, 0)
        return {
            hours: dateWtihTime.getHours(),
            minutes: dateWtihTime.getMinutes(),
            rawDate
        }
    }

}
