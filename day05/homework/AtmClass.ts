import { AtmInterface } from './AtmInterface';

export class Atm implements AtmInterface {

  initialBalance : number;
  currentBalance : number;


  constructor() {
    }


    setInitialBalance(arg : number){

       console.log('>>Setting initial balance to BZD ' + arg);
       this.initialBalance = arg;      
       this.currentBalance = arg;
  }


  depositMoney(arg : number){
      console.log('>> Deposit of BZD ' + arg);
      this.currentBalance = this.currentBalance + arg;
  }

  withdrawMoney(arg : number) {
       console.log('>> Withdrawl of BZD ' + arg);
       this.currentBalance = this.currentBalance - arg;      
  }

  showBalances() {
    console.log('----------------------');
    console.log("Initial Balance BZD " + this.initialBalance);
    console.log("Current Balance BZD " + this.currentBalance);
  }
}
