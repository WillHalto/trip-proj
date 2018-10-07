import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: gapi.auth2.GoogleUser;
  constructor(private authService:AuthService,private ngZone:NgZone,private http:Http) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'light',
      'onsuccess':  googleUser => this.ngZone.run(() => this.hanldeSuccess(googleUser))
    });
  }

  hanldeSuccess(googleUser: gapi.auth2.GoogleUser){
    this.user = googleUser;
    this.authService.onSignIn(this.user);
  }

  getUser(){
    return this.user;
  }
}
