import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empname:string ="";
  job:string ="";
  salary:number =0;

  public dataArray:any[]=  [];

  constructor (private httpObj:HttpClient)  
  {}

  getData_click():void
  {
    let url :string  = "http://localhost:3000/details";
    this.httpObj.get(url).subscribe(  (response:any)  =>  
    {
         
        console.log(response.data);
        this.dataArray = response;
    });
  }

  addData_click():void
  {
    let url :string  = "http://localhost:3000/details";
    let studentObj:any = {};
  
    studentObj.ename = this.empname;
    studentObj.job = this.job;
    studentObj.salary = this.salary;

    this.httpObj.post(url, studentObj).subscribe(  (response:any)  =>  
    {
     alert ("Employee Details are saved");
     this.getData_click();

    });
  }

}








