import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Trip } from "../models/trip";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TripsService {
  constructor(private http: HttpClient) {
    console.log("Trip service intialized.");
  }

  getTrips() {
    console.log("get trips");
    return this.http
      .get<Trip[]>("http://localhost:3000/api/getTrips", {
        withCredentials: true
      })
      .pipe(map(res => res));
  }

  addTrip(newTrip: Trip) {
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json",
      })
    };

    return this.http
      .post("http://localhost:3000/api/addTrip", JSON.stringify(newTrip), {
        withCredentials: true, headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
      .subscribe(r => {});
  }
}
