import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TripsService} from '../../services/trips.service';
import {Trip} from '../../models/trip';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  Trips: Trip[];
  selectedTrip: Trip = null;
  newTripSelected = true;
  constructor(private TripsService: TripsService, private route: ActivatedRoute) {
   
  }

  ngOnInit() { 
    this.TripsService.getTrips()
    .subscribe(Trips => {
      this.Trips = Trips;
    });
  }
  onSelect(trip: Trip): void{
    this.selectedTrip = trip;
    this.newTripSelected = false;
  }
  onCreateNewTrip(){
    this.selectedTrip = null;
    this.newTripSelected = true;
  }
}
