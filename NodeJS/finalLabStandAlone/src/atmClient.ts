import { Atm } from './atm/atm';

var testAtm : Atm = new Atm();
var balance : number = 0;

balance = testAtm.getCurrentBalance('23232-3');

console.log('This is the Balance, after initial Call ' + balance);

balance = testAtm.deposit('23232-3',400);
console.log('This is the Balance, after depositing -> ' + balance);

balance = testAtm.withDraw('23232-3',200);
console.log('This is the Balance, after withdrawing -> ' + balance);

console.log('***All Transactions**');
let result = testAtm.getLastOperations('23232-3');

console.log(result.transactions);


