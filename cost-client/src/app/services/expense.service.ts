import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Expense } from "../models/expense";
import { Trip } from "../models/trip";

@Injectable({
  providedIn: "root"
})
export class ExpenseService {
  constructor(private http: HttpClient) {}

  addExpense(currentTrip: Trip, newExpense: Expense) {
    return this.http.post(
      "/api/addExpense",
      { trip: currentTrip, expense: newExpense },
      {
        withCredentials: true
      }
    );
  }

  deleteExpense(currentTrip: Trip, expense: Expense) {
    return this.http.post(
      "/api/deleteExpense",
      { trip: currentTrip, expense: expense },
      {
        withCredentials: true
      }
    );
  }
}
