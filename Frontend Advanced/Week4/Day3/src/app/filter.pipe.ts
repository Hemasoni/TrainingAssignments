import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(input: any[], min:number, max:number):any
  { 
    var output:any[] = input.filter(item=> item.salary>min && item.salary<max)
    return output;
  }
}
