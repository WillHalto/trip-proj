import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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
  newTripSelected = false;
  constructor(private TripsService: TripsService, private route: ActivatedRoute, public router: Router) {
   
  }

  ngOnInit() { 
    this.TripsService.getTrips()
    .subscribe(
      Trips => {
      this.Trips = Trips;
      },
      error => {
        console.log(error);
        alert("Please log in first.")
        this.router.navigate(['/']);
      },
    );
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
