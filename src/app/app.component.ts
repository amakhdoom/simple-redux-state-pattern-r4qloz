import { Component } from '@angular/core';
import { AirportService } from './airports/airport.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(private service: AirportService){}

  addAirport(code: string, name: string) {
      this.service.addAirport(code, name);
  }
}
