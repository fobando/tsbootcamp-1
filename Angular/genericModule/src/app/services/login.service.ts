/**
 * This the authentication service used to provide login, logut, user information
 * and two Subject observables publishing login and logout events so that publishers
 * can subscribe and make actions based upon each action.
 *
 * /////////DON'T PLACE ANY OTHER FUNCTIONALITY IN THIS SERVICE./////
 *
 * Changes to this service should be documented below.
 * Date, Author, Description
 * 01/Junio/2018   , EyC  , Creation of the working skeleton
 *
 * FO - I added this change to test a git pull request
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { UserAuth, UserLogged } from '../models/user.interface';


import { TestUsers } from '../models/testtable.interface';

@Injectable()
export class LoginService {

  // Initialize the user object with an empty object
  public user: UserLogged = <null>{};
  public isLogged = false;

  /** These are the two Subject Observables that we will use to communicate
   * to the suscribers about the login and logout. Notice that the Login
   * observable sends the user object, this is useful if you want to enable 
   * a welcome package in app component
   */
   public onLogin$  = new Subject<UserLogged>();
   public onLogOut$ = new Subject<void>();

  constructor(public http: HttpClient) { }

  authenticateUser(user: UserAuth): Promise<UserLogged> {

   return new Promise((succ, reject) => {

      this.http.get<UserLogged>('./assets/mockup/successLogin.json').toPromise()
         .then (data => {

            if (data.status === 0) {
                  this.user = data;
                  // Assign it from the local parameter as it does not come in the response
                  this.user.username = user.username;
                  // Make it logged
                  this.isLogged = true;
                  // Emit a new onLogin$ event with the user Object
                  this.onLogin$.next(this.user);
                  succ(this.user);
            } else {
                  reject(data.message);
            }

      }).catch (err => { reject(err);  });

   });

  }

  logOut() {
        // turnOff and clean some local userobject properties
         this.isLogged = false;
         this.user = <null>{};

         // emit the logout event with a void vaue, no need to send any info
         this.onLogOut$.next();

  }

  getMockData(): Observable<TestUsers[]> {
        return this.http.get<TestUsers[]>('./assets/mockup/table.data.json');
  }

}
