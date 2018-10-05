import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http:Http) { 
    console.log("Trip service intialized.");
  }

  getTrips(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
            .pipe(map(res => res.json()));
  }

  getTrip(index: string){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/'+index)
            .pipe(map(res => res.json()));
  }
}
