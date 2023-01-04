import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  uid:string  = "";
  pwd:string = "";
  result:string  = "";
  count:number = 0;
  isLoginButtonDisabled:boolean = false;
  colorstring:string = "";

  public loginButton_click():void
  {
      if(this.uid == "admin" && this.pwd == "admin123")
      {
         this.result = "Welcome to Admin";
         this.colorstring = "color:green"
         ;
      }
      else
      {
        this.result = "Invalid user id or password";
        this.colorstring = "color:red"
        this.count++;

        
        if(this.count == 3)
        {
          alert("You have reched maximum chances of wrong password");
          this.isLoginButtonDisabled = true;
         
        }
      }
  }
}


