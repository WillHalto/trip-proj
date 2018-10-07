import { Component, OnInit, Input } from '@angular/core';
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
  @Input() currentTrip: Trip;

  constructor(private route: ActivatedRoute, private router: Router, private TripsService: TripsService) {
    
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => this.currentTripID=params.get('id'));
    // if(this.currentTrip){
    //   this.TripsService.getTrip(this.currentTripID)
    //   .subscribe(Trip => {
    //     this.currentTrip = Trip;
    //     this.currentTripTitle = this.currentTrip.title;
    //   });
    // }
  }
}
