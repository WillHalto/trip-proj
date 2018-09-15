import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {

  userProfile;
  auth0;

  constructor(private route: ActivatedRoute, public auth: AuthService) {
    this.auth0 = auth.auth0;
   }

  ngOnInit() {
    this.getProfile();
  }

  ngAfterViewInit(){

  }
  
  private getProfile() {
    if (!this.userProfile) {
      var accessToken = localStorage.getItem('access_token');
  
      if (!accessToken) {
        console.log('Access Token must exist to fetch profile');
      }
  
      this.auth0.client.userInfo(accessToken, (function(err, profile) {
        if (profile) {
          this.userProfile = profile;
        }
      }).bind(this));
    }
  }
}
