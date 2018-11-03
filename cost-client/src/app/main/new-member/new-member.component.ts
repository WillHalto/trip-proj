import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder
} from "@angular/forms";
@Component({
  selector: "app-new-member",
  templateUrl: "./new-member.component.html",
  styleUrls: ["./new-member.component.css"]
})
export class NewMemberComponent implements OnInit {
  newMemberForm = this.fb.group({
    name: ["", Validators.required]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  onSubmit() {
    console.log("Submitting");
  }
}
