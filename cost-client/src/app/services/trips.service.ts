import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Trip } from "../models/trip";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TripsService {
  constructor(private http: HttpClient) {}

  getTrips() {
    return this.http
      .get<Trip[]>("/api/getTrips", {
        withCredentials: true
      })
      .pipe(map(res => res));
  }

  addTrip(newTrip: Trip) {
    return this.http
      .post("/api/addTrip", newTrip, {
        withCredentials: true
      })
  }

  deleteTrip(trip: Trip) {
    return this.http.post("/api/deleteTrip", trip, {
      withCredentials: true
    })
  }
}
