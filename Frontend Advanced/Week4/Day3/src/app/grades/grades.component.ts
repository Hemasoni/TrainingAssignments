import { Component } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  sno:number=0;
  name:string="";
  grade:number=0;
empArray:any[]=[{sno:1, name:"Scott", grades: "1"},
{sno:2, name:"Abrons", grades: "3"},
{sno:3, name:"Smith", grades: "4"},
{sno:4, name:"James", grades: "1"},
{sno:5, name:"Adam", grades: "3"},
{sno:6, name:"Sathya", grades: "4"},
{sno:7, name:"Maneesh", grades: "2"},
{sno:8, name:"Haneesh", grades: "1"}
];
}


