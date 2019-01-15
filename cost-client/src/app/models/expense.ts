import { Member } from "./member";

export class Expense {
  constructor(
    public id: string,
    public amount: number,
    public paidBy: Member,
    public participants: Member[]
  ) {}
}
