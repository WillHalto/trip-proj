import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {

  userProfile;
  auth0;

  constructor(private route: ActivatedRoute, public auth: AuthService) {
   }

  ngOnInit() {
    this.getProfile();
  }

  ngAfterViewInit(){

  }
  
  private getProfile() {
    }
  }
