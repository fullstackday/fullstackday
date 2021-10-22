import {Injectable} from '@angular/core';
import * as moment from 'moment/moment';

@Injectable({
  providedIn: 'root'
})
export class WorkTimeService {

  public addTimePeriodToTimestamp(currentDate: Date, hoursAndMinutesAsString: string): number {
    const currentDateAsMoment = moment(currentDate);
    const hoursAndMinutes: string[] = hoursAndMinutesAsString.split(':');
    const hours: number = +hoursAndMinutes[0];
    const minutes: number = +hoursAndMinutes[1];

    if (!currentDateAsMoment || !this.validTimeperiod(hours, minutes)) {
      throw new Error('invalid input');
    }

    const newTimestamp = moment(currentDateAsMoment.add(hours, 'hours').add(minutes, 'minutes'));
    return newTimestamp.valueOf();
  }

  private validTimeperiod(hours: number, minutes: number): boolean {
    return !(isNaN(hours) || hours < 0 || isNaN(minutes) || minutes < 0);
  }
}
