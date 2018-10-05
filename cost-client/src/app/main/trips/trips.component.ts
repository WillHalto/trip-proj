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
  test: any;

  constructor(private TripsService: TripsService, private route: ActivatedRoute) {
    this.TripsService.getTrips()
      .subscribe(Trips => {
        this.Trips = Trips;
      });
  }

  ngOnInit() {
  }

}
