/*
* This was created using ng generate service services/AtmService
* We are just mocking up the data for now, but these will be 
* methods used in the next lab.
*/
import { Injectable } from '@angular/core';
  
@Injectable()
export class AtmServiceService {

  constructor() { }

  //typescript is infering the returned type automatically
  getCurrentBalance(acct : string)  {
      
        //  returning  a hardcoded Object
        return {
            accountNumber : '23232-1',
            currentBalance : 200.00
        }
   }

   withDraw(acct : string, amount:number) {
    return {
        accountNumber : '23232-1',
        currentBalance : 80.00
    }
}

  deposit(acct : string, amount:number)  {
    return {
        accountNumber : '23232-1',
        currentBalance : 220.00
    }
  }

  getLastOperations(acct:string) {

    //Notice that here We are returning an array of objects
    //also in a hardcoded way
    return [
        { accountNumber : '23232-1', dateOfTransaction : '2018-04-19', transactionType : 'deposit', amount: 100},
        { accountNumber : '23232-1', dateOfTransaction : '2018-04-19', transactionType : 'withdraw', amount: 50}
     ]
  }

}
