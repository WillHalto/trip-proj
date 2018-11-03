import {Expense} from "./expense";
import {Member} from "./member";

export class Trip {
    constructor(
      public id: string,
      public title: string,
      public owner: Member,
      public members?: Member[],
      public expenses?: Expense[]
      ) { }
  }