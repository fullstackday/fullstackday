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
        const dateWithTime = new Date(milliseconds)

        return {
            hours: dateWithTime.getHours(),
            minutes: dateWithTime.getMinutes(),
            date: dateWithTime.setHours(0, 0, 0, 0)
        }
    }

}
