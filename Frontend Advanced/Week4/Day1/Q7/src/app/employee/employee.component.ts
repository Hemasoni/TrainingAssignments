import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  details:any=
 {EmployeeID:"54654564",EmployeeName:"Stephen", EmployeeJob:"Manager", EmployeeSalary: 75000, EmployeeDepo: 10}

}
