import { Component } from '@angular/core';
import { AtmServiceService  } from './services/atm-service.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {

  title            = 'ATM Project ';
  
  constructor(public atmService : AtmServiceService) {
       }

 public isPanelVisible(){
    return this.atmService.accountValid;
  }

}
