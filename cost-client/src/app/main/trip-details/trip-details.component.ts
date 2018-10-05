import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {TripsService} from '../../services/trips.service';
import { map } from 'rxjs/operators';
import {Trip} from '../../models/trip';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  currentTrip: Trip;
  currentTripID: string;
  currentTripTitle: string;

  constructor(private route: ActivatedRoute, private router: Router, private TripsService: TripsService) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.currentTripID=params.get('id'));
    this.TripsService.getTrip(this.currentTripID)
      .subscribe(Trip => {
        this.currentTrip = Trip;
        this.currentTripTitle = this.currentTrip.title;
      });
  }
}
