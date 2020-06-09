import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AirportsComponent } from './airports/airports.component';
import { AirportService } from './airports/airport.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AirportsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AirportService]
})
export class AppModule { }
