import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public usersArray:any[]=  []
  constructor (private httpObj:HttpClient)
  {}


  getData_click():void
  {
    let url :string  = "https://reqres.in/api/users";
    this.httpObj.get(url).subscribe(  (response:any)  =>  
    {
        // process the response 
        console.log(response.data);
        this.usersArray = response.data;
    });
  }
}
