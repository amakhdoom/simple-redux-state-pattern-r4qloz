import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {Airport} from './airport';

export interface AirportState {
  readonly airports: ReadonlyArray<Airport>;
}

@Injectable({
  providedIn: 'root'
})
export class AirportStateContainer {

    private state$: BehaviorSubject<AirportState>;

    protected constructor () {
        this.state$ = new BehaviorSubject({
          airports: [],
        });
    }

    getValue(): AirportState {
        return this.state$.getValue();
    }

    getState(): Observable<AirportState> {
      return this.state$.asObservable();
    }

    setState(nextState: AirportState): void {
        this.state$.next(nextState);
    }
}