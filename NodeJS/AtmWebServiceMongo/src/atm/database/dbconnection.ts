import { MongoClient,FilterQuery } from 'mongodb';

export class DbConnection {
   // mongodb://<dbuser>:<dbpassword>@ds119306.mlab.com:19306/mario

  /* place your own credentials here */
     private _userName   : string = "xx";
     private _passWord   : string = "xx";
     private _dbName     : string = "xx";
     private _hostName   : string = "xxx";
     private _portNumber : string = "xxx";
     private _dbAutoReconnectOption : object =  {auto_reconnect: true};

     private _connection : any;
     private  _db  : any;

    constructor() { }

      
   async  connectDb() : Promise<any> {

       let dbURI  = `mongodb://${this._userName}:${this._passWord}@${this._hostName}:${this._portNumber}/${this._dbName}`;

        console.log("URL interpolated ", dbURI);

        let resp =  await  MongoClient.connect(dbURI,this._dbAutoReconnectOption);
        this._db = resp.db(this._dbName);
        this._connection =  resp;
             
        return this._db;
    }
       
  findOne(doc:string, query : FilterQuery<any>) : Promise<any> {    
            return new Promise ( (resolve,reject) => {
                    this._db.collection(doc).findOne(query).then( (resp:any) => {
                          if (resp != null) { 
                                resolve(resp);
                            } else {
                                reject('Account not found.');
                            }
                    }, (err:any) => { reject('Account error'); });
            });
     }

    async find(doc:string, query : FilterQuery<any>) : Promise<any> {    
              return await  this._db.collection(doc).find(query).toArray();             
     }  


   async updateOne(doc:string, query: FilterQuery<any>, argValue :any ) : Promise<any> {

        return  await this._db.collection(doc).updateOne(query,{ $set : argValue });
      }

   async deleteOne(doc:string, query: FilterQuery<any>) : Promise<any> {

        return  await this._db.collection(doc).updateOne(query);
      }

    async insertOne(doc:string, record : object ) : Promise<any> {
        return  await this._db.collection(doc).insertOne(record);
      }



    close() {
        this._connection.close();
    }

    getDb() {
          return this._db;
    }


}
