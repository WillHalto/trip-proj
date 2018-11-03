import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder
} from "@angular/forms";
@Component({
  selector: "app-new-expense",
  templateUrl: "./new-expense.component.html",
  styleUrls: ["./new-expense.component.css"]
})
export class NewExpenseComponent implements OnInit {
  newExpenseForm = this.fb.group({
    title: ["", Validators.required],
    amount: ["", Validators.required]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  onSubmit() {
    console.log("Submitting");
  }
}
