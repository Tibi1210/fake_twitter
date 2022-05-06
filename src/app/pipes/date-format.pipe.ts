import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let time = new Date(parseInt(value));
    time.setHours(time.getHours() + 2);
    let timeString = time
      .toISOString()
      .replace('Z', '')
      .replace('T', ' ')
      .substring(0, 16);

    return timeString;
  }
}
