import {Injectable} from '@angular/core';
import * as moment from "moment/moment";

@Injectable({
  providedIn: 'root'
})
export class WorkTimeService {

  public addTimePeriodToDate(currentDateAsString: string, hours: number, minutes: number): number {
    const currentDate = moment(currentDateAsString);
    const newDate = moment(currentDate.add(hours, 'hours').add(minutes, 'minutes'));

    return newDate.valueOf();
  }
}
