import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder
} from "@angular/forms";
import { Expense } from "src/app/models/expense";
import { Trip } from "src/app/models/trip";
import { Member } from "src/app/models/member";
import * as uuid from "uuid";

@Component({
  selector: "app-new-expense",
  templateUrl: "./new-expense.component.html",
  styleUrls: ["./new-expense.component.css"]
})
export class NewExpenseComponent implements OnInit {
  newExpenseForm = this.fb.group({
    title: ["", Validators.required],
    amount: ["", Validators.required],
    paidBy: ["", Validators.required],
    participants: ["", Validators.required]
  });
  @Input()
  currentTrip: Trip;

  @Output()
  closeNewExpenseFormEventEmitter = new EventEmitter<Expense>();

  @Output()
  addingExpenseEventEmitter = new EventEmitter<Expense>();

  members: Member[];
  newExpense: Expense;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.members = [];
    this.members.push(this.currentTrip.owner);
    this.currentTrip.members.forEach(member => {
      this.members.push(member);
    });
  }

  onSubmit() {
    this.buildExpense();
    this.addingExpenseEventEmitter.emit(this.newExpense);
    this.newExpenseForm.reset();
  }

  onCancel() {
    this.closeNewExpenseFormEventEmitter.emit();
  }

  buildExpense() {
    let title = this.newExpenseForm.value.title;
    let amount = this.newExpenseForm.value.amount;
    let paidByMember: Member = this.newExpenseForm.value.paidBy as Member;
    let particiatedMembers: Member[] = this.newExpenseForm.value.participants;
    this.newExpense = new Expense(
      uuid.v4(),
      amount,
      paidByMember,
      particiatedMembers
    );
  }
}
