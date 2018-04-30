import * as express from 'express';
import * as cors from 'cors';

import { Atm } from './atm/atm';

export class App {
     public webService : any;
     private atm : Atm;

     constructor() {
         this.webService = express();
         this.webService.use(cors());
         
         this.atm = new Atm();
         this.mountAtmRoutes();

     }

private mountAtmRoutes(){

       const atmLive = express.Router();
       const atmFind = express.Router();
       const atmWithDraw = express.Router();
       const atmDeposit  = express.Router();
       const atmBalance = express.Router();
       const atmTransactions = express.Router();

       atmLive.get('/atm', (req,resp) => {
              resp.json ({
                  status : 0,
                  message : 'ok'
              });
        });


	atmFind.get('/atm/find/:acct', (req,resp) => {

         if (this.atm.accountExists(req.params.acct)) {
                resp.json({
                    status  : 0,
                    message : 'ok'
                 });
         }
         else {
                resp.json({
                    status  : -100,
                    message : 'Account not found'
                });
         }
            
        } );


	atmBalance.get('/atm/:acct', (req,resp) => {
	    console.log("Balance, Acct ", req.params.acct);
	    
            resp.json({
                  accountNumber  : req.params.acct,
                  currentBalance : this.atm.getCurrentBalance(req.params.acct)
            });
        } );

        atmTransactions.get('/atm/transactions/:acct', (req,resp)=> {

	    console.log('Transaction List');

            resp.json({
                accountNumber  : req.params.acct,
                transactions : this.atm.getLastOperations(req.params.acct).transactions
            });

        });

	atmDeposit.get('/atm/deposit/:acct/amount/:amount', (req,resp)=>{
	    console.log('Deposit');

            resp.json ({
                accountNumber  : req.params.acct,
                currentBalance : this.atm.deposit(req.params.acct,
                                  parseFloat(req.params.amount))

            });
        })

	atmWithDraw.get('/atm/withdraw/:acct/amount/:amount',(req,resp)=>{
	    console.log('withdraw');

            resp.json({
                accountNumber : req.params.acct,
                currentBalance : this.atm.withDraw(req.params.acct,
                                        parseFloat(req.params.amount))
            });
        });

        //We have to make sure express knows about our routes

	this.webService.use(atmLive);
	this.webService.use(atmFind);
        this.webService.use(atmBalance);
        this.webService.use(atmTransactions);
        this.webService.use(atmDeposit);
        this.webService.use(atmWithDraw);


   }
}
export default new App().webService;
