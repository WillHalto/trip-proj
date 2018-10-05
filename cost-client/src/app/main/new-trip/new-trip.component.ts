import { Component, OnInit } from '@angular/core';
import {Trip} from '../../models/trip';
import { Validators,FormControl,FormGroup,FormArray,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {
  newTrip: Trip;
  name = new FormControl('');
  // newTripForm = new FormGroup({
  //   name: new FormControl(''),
  //   dates: new FormGroup({
  //       startDate: new FormControl(''),
  //       endDate: new FormControl(''),
  //     }),
  //   number: new FormControl(''),
  //   isAboard: new FormControl('')
  // });

  newTripForm = this.fb.group({
    name: ['', Validators.required],
    dates: this.fb.group({
      startDate: [''],
      endDate: ['']
    }),
    number: [''],
    isAboard: [''],
    invites: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) {
    this.newTrip = new Trip(null,null);
   }

  ngOnInit() {
  }
  submit() {
    this.newTrip.title = this.name.value;
    console.log("A new trip called "+this.newTrip.title+" created.");
  }

  clearName() {
    this.name.setValue('');
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newTripForm.value);
  }

  get invites() {
    return this.newTripForm.get('invites') as FormArray;
  }

  addInvite() {
    this.invites.push(this.fb.control(''));
  }
}
