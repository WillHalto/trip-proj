import { Member } from "./member";

export class Expense {
    id: string;
    amount: number;
    paidBy: Member;
    participants: Member[];
  }