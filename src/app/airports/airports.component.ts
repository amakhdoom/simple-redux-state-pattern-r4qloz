import { Component } from '@angular/core';
import { AirportService } from './airport.service';
import { Airport } from './airport';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent {

  airportsObs: Observable<ReadonlyArray<Airport>>

  constructor(private service: AirportService) {
    this.airportsObs = service.getAirports();
   }

}