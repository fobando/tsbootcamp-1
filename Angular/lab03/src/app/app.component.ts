/*
* This is the component for LAB 03 - Developing an Angular App 
* mocking up the data provided by the Service.
* by EyC Consulting Group www.eycgrupo.com
*/
import { Component } from '@angular/core';
import { AtmServiceService } from './services/atm-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title            = 'ATM Project ';
  currentOperation = '';
  balance          = 0;
  acct             = '';
  lastTransactions = [];
 
    constructor(public atmService : AtmServiceService) {

      /*
       * We are going to be simulating a delay of 2 seconds between calls.
       * We could have chained the setTimeout function and place a 2 seconds
       * on each call. For simplicity we are keeping them separated with a 
       * 2 seconds interval each.
      */
      
        this.showBalance('23232-1');

        setTimeout(() => {
             this.makeADeposit('23232-1',100);

        }, 2000);

        setTimeout(() => {
          this.makeAWithdraw('23232-1',50);
          
        }, 4000);

        setTimeout(() => {
            this.getLastOperations('23232-1');
          
        }, 6000);


       }


  showBalance(acct:string) {
    //We change the component property currentOperation
    this.currentOperation = 'Querying Balance';

    /*
    * The mocked up object returned by the method in the service
    * is declared and created here, receiving the values from the Service method getCurrentBalance
    */
    let result =  this.atmService.getCurrentBalance(acct) ;

    /*
     * We could have also declared result as a public property above before the constructor()
     * and use the interpolation as {{result.accountNumber}}
    */
    this.acct   = result.accountNumber
    this.balance = result.currentBalance;
  }

  makeADeposit(acct:string,amount:number) {
    this.currentOperation = "Making a Deposit";
    let result =  this.atmService.deposit(acct,amount) ;
    this.acct = result.accountNumber;
    this.balance = result.currentBalance;
  }

  makeAWithdraw(acct:string,amount:number) {
    this.currentOperation = "Making a Withdrawl";
    let result =  this.atmService.withDraw(acct,amount) ;
    this.acct = result.accountNumber;
    this.balance = result.currentBalance;
  }

  getLastOperations(acct:string) {

    this.currentOperation = "Showing last Transactions";
    this.lastTransactions = this.atmService.getLastOperations(acct);

  }

}
