import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../app/services/login.service';
import { UserLogged } from '../app/models/user.interface';
import { ROUTE } from './models/route.constants';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
      title = environment.applicationName;
      displayMenu = false;
      userInfo: UserLogged = <null>{};

      constructor( public loginService: LoginService,
      public router: Router) {
      }

 ngOnInit() {
      this.loginService.onLogin$.subscribe(data => {
           this.displayMenu = true;
           this.userInfo = data;
      });

      this.loginService.onLogOut$.subscribe(data =>{
           this.displayMenu = false;
      });
 }


 ngOnDestroy() {
        this.loginService.onLogin$.unsubscribe();
        this.loginService.onLogOut$.unsubscribe();
 }

 logOut(){
     this.loginService.logOut();
     this.router.navigate([ROUTE.ROOT]);
 }

 goHome(){
   this.router.navigate([ROUTE.MAIN]);
 }

}
