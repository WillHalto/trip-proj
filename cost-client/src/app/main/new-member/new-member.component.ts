import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
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
  @Output()
  addingMemberEventEmitter = new EventEmitter<Member>();
  @Output()
  closeNewMemberFormEventEmitter = new EventEmitter<Member>();

  newMemberForm = this.fb.group({
    name: ["", Validators.required]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    this.buildMember(this.newMemberForm.value.name);
    this.addingMemberEventEmitter.emit(this.newMember);
    this.newMemberForm.reset();
  }

  buildMember(name: string) {
    this.newMember = new Member(name);
  }

  onCancel() {
    this.closeNewMemberFormEventEmitter.emit();
  }
}
