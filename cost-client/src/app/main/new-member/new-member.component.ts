import { Component, OnInit } from "@angular/core";
import { MemberService } from "../../services/member.service";
import {
  Validators,
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder
} from "@angular/forms";
import { Member } from "src/app/models/member";
@Component({
  selector: "app-new-member",
  templateUrl: "./new-member.component.html",
  styleUrls: ["./new-member.component.css"]
})
export class NewMemberComponent implements OnInit {
  newMember: Member;
  newMemberForm = this.fb.group({
    name: ["", Validators.required]
  });
  constructor(private fb: FormBuilder, private memberService: MemberService) {}

  ngOnInit() {}
  onSubmit() {
    this.buildMember(this.newMemberForm.value.name);
    this.addMember();
  }

  buildMember(name: string) {
    this.newMember = new Member(name);
  }

  addMember() {
    this.memberService.addMember(this.newMember);
  }
}
