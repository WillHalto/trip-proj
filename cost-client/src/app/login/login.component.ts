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

  user: string;

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
      'onsuccess':  googleUser => this.ngZone.run(() => this.authService.onSignIn(googleUser))
    });
    //this.assignUser("TEST");
    //this.router.navigate(['postlogin',this.user]);
  }

  assignUser(s:string){
    this.user=s;
  }

}
