import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//We have to import the Service as a regular typescript library
import { AtmServiceService } from './services/atm-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule  
  ],
  //We have to import the service as a provider in the NGModule ecosystem
  //otherwise it won´t be available in the Angular Application
  providers: [AtmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
