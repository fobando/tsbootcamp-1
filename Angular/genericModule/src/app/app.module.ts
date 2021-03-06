import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { MaterialModule } from './app.material';
import { RoutingModule } from './router.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
 import { LoginService } from './services/login.service';
import { MainComponent } from './components/main/main.component';
import { RouteGuardService } from './services/route-guard.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { UtilService } from './services/util.service';
import { TesttableComponent } from './components/testtable/testtable.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ConfirmationDialogComponent,
    TesttableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  entryComponents : [ ConfirmationDialogComponent ],
  providers: [LoginService, RouteGuardService, UtilService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi : true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
