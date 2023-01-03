import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  
  eventsArray:any[]=[{Date:"January 8, 2023",Format:"Digital/Online",Time:"3:00 PM Pacific Time", Title: "Microsoft Azure Virtual Training Day: AI Fundamentals", URL: "#"},
  {Date:"January 8, 2023",Format:"Digital/Online",Time:"3:00 PM Pacific Time", Title: "Microsoft Azure Virtual Training Day: AI Fundamentals", URL: "#"},
  {Date:"January 8, 2023",Format:"Digital/Online",Time:"3:00 PM Pacific Time", Title: "Microsoft Azure Virtual Training Day: AI Fundamentals", URL: "#"},
 ];


}