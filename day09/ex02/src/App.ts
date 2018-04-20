import * as express from 'express';
import * as cors from 'cors';

class App {

    public express;


    constructor () {
        this.express = express();
        this.mountTheRoutes();
    }

    mountTheRoutes() : void {
        const mickey = express.Router();
        const pluto  = express.Router();

         mickey.get("/", (req,resp) => {
               let x = { status : 0, message : "OK"};
               resp.json (x);
        })

    

        pluto.get('/api/:accountID', (req,resp) => {
            /*
            *  We inquire the DB to retrieve the Balance for this account
            */
            resp.json({
                  account : req.params.accountID,
                  balance  : 289.23
            })
        })

        this.express.use(cors());
        this.express.use('/',mickey);
        this.express.use('/',pluto);


    } //end of mountTheRoutes method of Class APP

}

export default new App().express
