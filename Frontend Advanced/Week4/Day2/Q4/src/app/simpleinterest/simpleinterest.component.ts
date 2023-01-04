import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleinterest',
  templateUrl: './simpleinterest.component.html',
  styleUrls: ['./simpleinterest.component.css']
})
export class SimpleinterestComponent {
  pamt:number  = 0;
  annual:number = 0;
  period:number = 0;
  result:any = "";
  amount:any = "";

  public calcInterest():void
  {
    this.result = this.pamt*this.annual*this.period/100;
    this.amount = this.result + this.pamt;
  }
}
