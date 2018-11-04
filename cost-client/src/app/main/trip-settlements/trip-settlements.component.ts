import { Component, OnInit, Input } from "@angular/core";
import { Settlement } from "src/app/models/settlement";

@Component({
  selector: "app-trip-settlements",
  templateUrl: "./trip-settlements.component.html",
  styleUrls: ["./trip-settlements.component.css"]
})
export class TripSettlementsComponent implements OnInit {
  @Input()
  settlements: Settlement[];

  constructor() {}

  ngOnInit() {}
}
