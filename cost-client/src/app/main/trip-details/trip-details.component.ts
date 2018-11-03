import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { TripsService } from "../../services/trips.service";
import { ExpenseService } from "../../services/expense.service";
import { MemberService } from "../../services/member.service";
import { Trip } from "../../models/trip";
import { Member } from "src/app/models/member";
import { Expense } from "src/app/models/expense";

@Component({
  selector: "app-trip-details",
  templateUrl: "./trip-details.component.html",
  styleUrls: ["./trip-details.component.css"]
})
export class TripDetailsComponent implements OnInit {
  @Input()
  currentTrip: Trip;

  @Output()
  tripDeletedEventEmitter = new EventEmitter<Trip>();

  isAddingExpense: boolean;
  isAddingMember: boolean;

  constructor(
    private tripService: TripsService,
    private expenseService: ExpenseService,
    private memberService: MemberService
  ) {}

  ngOnInit() {}

  ngOnChanges() {
    this.isAddingExpense = false;
    this.isAddingMember = false;
  }

  addMember() {
    this.isAddingMember = true;
  }

  onAddingMember(newMember: Member) {
    this.memberService.addMember(this.currentTrip, newMember).subscribe(
      member => {
        console.log("successfully added the member");
        this.currentTrip.members.push(newMember);
      },
      error => {
        console.log("fail");
        console.log(error);
      }
    );
  }

  removeMember(member: Member) {
    this.memberService.deleteMember(this.currentTrip, member).subscribe(
      res => {
        console.log("successfully deleted the member");
        let index = this.currentTrip.members.indexOf(member);
        this.currentTrip.members.splice(index, 1);
      },
      error => {
        console.log("fail");
        console.log(error);
      }
    );
  }

  addExpense() {
    console.log("Adding expense");
    this.isAddingExpense = true;
    let newExpense: Expense = new Expense(null, null, null, null);
    this.expenseService.addExpense(newExpense);
  }

  removeExpense() {
    console.log("Removing expense");
  }

  deleteTrip() {
    this.tripService.deleteTrip(this.currentTrip).subscribe(
      res => {
        console.log("Deletion successful");
        this.tripDeletedEventEmitter.emit(this.currentTrip);
      },
      error => {
        console.log(error);
        alert("Something went wrong.");
      }
    );
  }

  onClosingMemberForm() {
    this.isAddingMember = false;
  }
}
