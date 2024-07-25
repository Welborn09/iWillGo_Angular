import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'customTime'
})
export class CustomTimePipe implements PipeTransform {

  transform(value: any, format: string = 'shortTime'): string | null {
    if (!value) return null;

    var shortDate = new Date().toLocaleDateString();
    // Use the existing DatePipe to format the date first
    const formattedDate = new DatePipe('en-us').transform(shortDate + ' ' + value,  'HH:mm');

    if (!formattedDate) return null;

    // Convert the formatted date to 12-hour format with AM/PM
    let [hours, minutes] = formattedDate.split(':');
    let period = 'AM';

    let hourNum = parseInt(hours, 10);
    if (hourNum >= 12) {
      period = 'PM';
      if (hourNum > 12) {
        hourNum -= 12;
      }
    } else if (hourNum === 0) {
      hourNum = 12;
    }

    return `${hourNum}:${minutes} ${period}`;
  }
}
