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
      'onsuccess':  googleUser => this.ngZone.run(() => this.onSignIn(googleUser))
    });
    //this.assignUser("TEST");
    //this.router.navigate(['postlogin',this.user]);
  }

 onSignIn(googleUser) {
   var id_token = googleUser.getAuthResponse().id_token;
   var xhr = new XMLHttpRequest();
   xhr.withCredentials = true;
   xhr.open('POST', 'http://localhost:3000/login',true);
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
   xhr.onload = function () {
     console.log('Signed in as: ' + xhr.responseText);
   };
   xhr.send('idtoken=' + id_token);
 }

  assignUser(s:string){
    this.user=s;
  }

}
