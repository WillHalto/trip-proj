import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Member } from "../models/member";
import { Trip } from "../models/Trip";

@Injectable({
  providedIn: "root"
})
export class MemberService {
  constructor(private http: HttpClient) {}

  addMember(currentTrip: Trip, newMember: Member) {
    return this.http.post(
      "/api/addMember",
      { trip: currentTrip, member: newMember },
      {
        withCredentials: true
      }
    );
  }

  deleteMember(member: Member) {
    return this.http.post("/api/deleteMember", member, {
      withCredentials: true
    });
  }
}
