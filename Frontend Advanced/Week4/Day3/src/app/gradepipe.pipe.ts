import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradepipe'
})
export class GradepipePipe implements PipeTransform {

  transform(input:number):string
   {
    let output:string="";
    if(input==1)
    output="Outstanding";
    if(input==2)
    output="Excellent";
    if(input==3)
    output="Good";
    if(input==4)
    output="Average";

    return output;
  }
}
