import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  
  empsArray:any[]=[{empno:10256,ename:"Scott",job:"Manager",sal:45000,deptno:10},
  {empno:10259,ename:"Hemant",job:"Tax",sal:40000,deptno:40},
  {empno:10257,ename:"Sahil",job:"Accounts",sal:50000,deptno:20},
  {empno:10258,ename:"Samridhi",job:"Engineer",sal:55000,deptno:30},
  {empno:10260,ename:"Kritika",job:"Consultant",sal:65000,deptno:40},
  {empno:10261,ename:"Rohit",job:"Senior Manager",sal:80000,deptno:20},
  {empno:10262,ename:"Kartik",job:"Analyst",sal:40000,deptno:30},
  {empno:10263,ename:"Puneet",job:"HC",sal:47000,deptno:10},
  {empno:10263,ename:"Aryen",job:"HR",sal:50000,deptno:50}];


}