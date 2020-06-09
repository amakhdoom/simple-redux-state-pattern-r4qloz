import { Injectable } from '@angular/core';
import { Airport } from './airport';
import { AirportStateContainer } from './airport.state';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private readonly airportState: AirportStateContainer) {}

  addAirport(code: string, name: string) {
    this.airportState.setState({
      airports: [...this.airportState.getValue().airports, {code, name}],
      });
  }

  getAirports(): Observable<ReadonlyArray<Airport>> {
    return this.airportState.getState().pipe(map(state => state.airports));
  }
}