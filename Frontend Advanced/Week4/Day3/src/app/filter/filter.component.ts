import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  sno:number=0;
  name:string="";
  salary:number=0;

salArray:any[]=[{sno:1, name:"Sahil", salary: 10000},
{sno:2, name:"Kritika", salary: 50000},
{sno:3, name:"Hemant", salary: 40000},
{sno:4, name:"Samridhi", salary: 30000},
{sno:5, name:"Puneet", salary: 60000},
{sno:6, name:"Kartikeya", salary: 70000},
{sno:7, name:"Ayush", salary: 5000},
{sno:8, name:"Kunal", salary: 1000},
]
}
