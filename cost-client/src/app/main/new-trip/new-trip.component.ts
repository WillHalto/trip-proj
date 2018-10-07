import { Component, OnInit } from '@angular/core';
import {Trip} from '../../models/trip';
import { Validators,FormControl,FormGroup,FormArray,FormBuilder } from '@angular/forms';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {
  newTrip: Trip;
  name = new FormControl('');

  newTripForm = this.fb.group({
    title: ['', Validators.required],
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

  constructor(private fb: FormBuilder, private tripService: TripsService) {
    this.newTrip = new Trip(null,null);
   }

  ngOnInit() {
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.newTripForm.value);
    this.buildTrip();
    this.tripService.addTrip(this.newTrip);
  }

  buildTrip(){
    this.newTrip.title = this.newTripForm.value.title;
    this.newTrip.id = "";
  }

  get invites() {
    return this.newTripForm.get('invites') as FormArray;
  }

  addInvite() {
    this.invites.push(this.fb.control(''));
  }
}
