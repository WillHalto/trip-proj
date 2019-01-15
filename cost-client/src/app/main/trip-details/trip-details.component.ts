import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { TripsService } from "../../services/trips.service";
import { ExpenseService } from "../../services/expense.service";
import { MemberService } from "../../services/member.service";
import { Trip } from "../../models/trip";
import { Member } from "src/app/models/member";
import { Expense } from "src/app/models/expense";
import { Settlement } from "src/app/models/settlement";

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
  isTripSettled: boolean;
  settlements: Settlement[];

  constructor(
    private tripService: TripsService,
    private expenseService: ExpenseService,
    private memberService: MemberService
  ) {}

  ngOnInit() {
    this.settlements = [];
  }

  ngOnChanges() {
    this.isAddingExpense = false;
    this.isAddingMember = false;
    this.isTripSettled = false;
  }

  addMember() {
    this.isAddingMember = true;
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
    this.isAddingExpense = true;
  }

  removeExpense(expense: Expense) {
    this.expenseService.deleteExpense(this.currentTrip, expense).subscribe(
      res => {
        console.log("successfully deleted the member");
        let index = this.currentTrip.expenses.indexOf(expense);
        this.currentTrip.expenses.splice(index, 1);
      },
      error => {
        console.log("fail");
        console.log(error);
      }
    );
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

  settleUp() {
    this.tripService.settleUp(this.currentTrip).subscribe(
      res => {
        this.isTripSettled = true;
        this.settlements = this.buildSettlements(res);
        console.log("Settlement successful");
      },
      error => {
        console.log(error);
        alert("Something went wrong.");
      }
    );
  }

  //callbacks from child component's event
  onAddingMember(newMember: Member) {
    this.memberService.addMember(this.currentTrip, newMember).subscribe(
      res => {
        console.log("successfully added the member");
        this.currentTrip.members.push(newMember);
      },
      error => {
        console.log("fail");
        console.log(error);
      }
    );
  }

  onAddingExpense(newExpense: Expense) {
    this.expenseService.addExpense(this.currentTrip, newExpense).subscribe(
      res => {
        console.log("successfully added the expense");
        this.currentTrip.expenses.push(newExpense);
      },
      error => {
        console.log("fail");
        console.log(error);
      }
    );
  }
  onClosingMemberForm() {
    this.isAddingMember = false;
  }

  onClosingExpenseForm() {
    this.isAddingExpense = false;
  }

  //helper
  buildSettlements(res: object) {
    let settlements: Settlement[] = [];
    let keys = Object.keys(res);
    keys.forEach(key => {
      let settlement = new Settlement(key, res[key].toFixed(2));
      settlements.push(settlement);
    });
    return settlements;
  }
}
