import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { TripsService } from "../../services/trips.service";
import { Trip } from "../../models/trip";
import { Member } from "src/app/models/member";

@Component({
  selector: "app-trip-details",
  templateUrl: "./trip-details.component.html",
  styleUrls: ["./trip-details.component.css"]
})
export class TripDetailsComponent implements OnInit {
  @Input()
  currentTrip: Trip;
  isAddingExpense: boolean = false;
  constructor(
  ) {}

  ngOnInit() {
  }
  addExpense() {
    this.isAddingExpense = true;
  }
}
