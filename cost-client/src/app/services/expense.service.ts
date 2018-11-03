import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Expense } from "../models/expense";

@Injectable({
  providedIn: "root"
})
export class ExpenseService {
  constructor(private http: HttpClient) {}

  addExpense(newExpense: Expense) {
    return this.http.post("/api/addExpense", newExpense, {
      withCredentials: true
    });
  }

  deleteExpense(expense: Expense) {
    return this.http.post("/api/deleteExpense", expense, {
      withCredentials: true
    });
  }
}
