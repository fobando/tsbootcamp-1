export interface AtmInterface {

      initialBalance : number,
      currentBalance : number,

      setInitialBalance(arg : number) : void;
      withdrawMoney(arg : number) : void;
      depositMoney(arg : number) : void;
      showBalances() : void;
}
