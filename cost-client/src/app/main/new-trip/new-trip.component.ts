import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Trip } from "../../models/trip";
import { Member } from "../../models/member";
import {
  Validators,
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder
} from "@angular/forms";
import { TripsService } from "../../services/trips.service";
import * as uuid from "uuid";
@Component({
  selector: "app-new-trip",
  templateUrl: "./new-trip.component.html",
  styleUrls: ["./new-trip.component.css"]
})
export class NewTripComponent implements OnInit {
  newTrip: Trip;
  name = new FormControl("");

  newTripForm = this.fb.group({
    title: ["", Validators.required],
    members: this.fb.array([])
  });
  @Output() tripAddedEventEmitter = new EventEmitter<Trip>();

  constructor(private fb: FormBuilder, private tripService: TripsService) {
  }

  ngOnInit() {}

  onSubmit() {
    this.buildTrip();
    this.tripService.addTrip(this.newTrip)
      .subscribe(
        trip=> {
          console.log("successfully added the trip");
          this.newTrip.owner = (trip as Trip).owner;
          this.tripAddedEventEmitter.emit(this.newTrip);
        },
        error => {
          console.log(error);
          alert("Something went wrong.");
        }
      )
  }

  buildTrip() {
    let title: string, id: string, members: Member[];
    title = this.newTripForm.value.title;
    id = uuid.v4();
    members = this.buildMembers(this.newTripForm.value.members);
    this.newTrip = new Trip(id, title, null ,members);
  }

  buildMembers(membersArray: Array<string>) {
    let members: Member[] = [];
    for (let member of membersArray) {
      if (member !== "") {
        members.push(new Member(member));
      }
    }
    return members;
  }

  get members() {
    return this.newTripForm.get("members") as FormArray;
  }

  addMember() {
    this.members.push(this.fb.control(""));
  }
}
