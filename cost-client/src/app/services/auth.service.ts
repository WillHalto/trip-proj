import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  constructor(public router: Router) {}
  
  public onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('POST', 'http://localhost:3000/login',true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
      console.log('Signed in');
      this.router.navigate(['postlogin']);
    }.bind(this);

    xhr.send('idtoken=' + id_token);
  
    //  var xhr2 = new XMLHttpRequest();
    //  xhr2.withCredentials = true;
    //  xhr2.open('GET', 'http://localhost:3000/api/trips',true);
    //  xhr2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //  //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    //  xhr2.onload = function () {
    //    console.log('GOT: ' + xhr.responseText);
    //  };
    //  xhr2.send();
  
  }

  public logout(): void {
    // Go back to the home route
    this.router.navigate(['/']);
  }

}