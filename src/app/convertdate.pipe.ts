import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertdate'
})
export class ConvertdatePipe implements PipeTransform {
  transform(value: any): any {
    var MyDate = new Date(value);
    var day=('0' + MyDate.getDate()).slice(-2);
    var month=('0' + (MyDate.getMonth()+1)).slice(-2);
    var year=MyDate.getFullYear();
    return month+'-'+day+'-'+year;
  }
}
