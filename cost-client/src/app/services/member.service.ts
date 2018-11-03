import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Member } from "../models/member";

@Injectable({
  providedIn: "root"
})
export class MemberService {
  constructor(private http: HttpClient) {}

  addMember(newMember: Member) {
    return this.http
      .post("/api/addMember", newMember, {
        withCredentials: true
      })
  }

  deleteMember(member: Member) {
    return this.http.post("/api/deleteMember", member, {
      withCredentials: true
    })
  }
}
