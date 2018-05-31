import * as  ActiveDirectory from 'activedirectory';
import { environment } from '../environment/environment';
 
interface user {
       status: number,
       message: string,
       displayName? : string
       
}

export class LDAP {

    public ad : ActiveDirectory;
 
    constructor(){
        this.ad = new ActiveDirectory(environment.ldapConfig);
    }


    public authenticate(username:string,password:string,group:string) {

        var retObj : user =  <null>{};

         retObj = environment.INVALID_CREDENTIALS;        

        this.ad.authenticate(username, password, (err,auth) =>{
            if (auth) {
                this.ad.isUserMemberOf(username, group, (err, isMember) => {
                    if (isMember) {

                        this.ad.findUser(username, (err,retuser) => {

                            
                             if (retuser) {
                                console.log(retuser.displayName);
                                 retObj =environment.OK_MESSAGE;
                                 retObj.displayName = retuser.displayName;
                             }
                        });
                     
                    }
                    else {
                         retObj= environment.UNAUTHORIZED_USE;
                     }
                });
            }
        });
       console.log(retObj);
        return retObj;
    }
    
}