import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http:Http) { 
    console.log("Trip service intialized.");
  }

  getTrips(){
    return this.http.get('http://localhost:3000/api/trips',{ withCredentials: true })
            .pipe(map(res => res.json()));
  }

  getTrip(index: string){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/'+index)
            .pipe(map(res => res.json()));
  }

  addTrip(newTrip: Trip){
    return this.http.post('http://localhost:3000/api/newtrip',{ withCredentials: true, newTrip})
            .pipe(map(res => console.log(res)));  
  }
}
