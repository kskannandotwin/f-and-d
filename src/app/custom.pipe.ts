import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  pure: false
})
export class CustomPipe implements PipeTransform {
  private datePipe = new DatePipe('en-US');
  transform(value: any, ...args: any[]): any {
    // if (value == '' || value == null || value == undefined) {
    //   return 'N/A';
    // } else {
    //   return value ? '+91 ' + value : value;
    // }

    return this.datePipe.transform(value, 'dd-MM-yyyy');
  }
}
