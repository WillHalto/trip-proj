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
      .get<Trip[]>("http://localhost:3000/api/getTrips", {
        withCredentials: true
      })
      .pipe(map(res => res));
  }

  addTrip(newTrip: Trip) {
    return this.http
      .post("http://localhost:3000/api/addTrip", JSON.stringify(newTrip), {
        withCredentials: true,
        headers: new HttpHeaders().set("Content-Type", "application/json")
      })
      .subscribe(r => {});
  }
}
