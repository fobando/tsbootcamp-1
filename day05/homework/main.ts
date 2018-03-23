import { Atm } from './AtmClass';

var a : Atm;

a = new Atm();
a.setInitialBalance(200);
a.withdrawMoney(50);
a.showBalances();

a.depositMoney(150);
a.showBalances();
