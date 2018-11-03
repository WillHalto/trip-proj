import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Trip } from "../models/trip";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
    let status = 0
    return this.http
      .post("/api/addTrip", JSON.stringify(newTrip), {
        withCredentials: true,
        headers: new HttpHeaders().set("Content-Type", "application/json")
      })
  }
}
