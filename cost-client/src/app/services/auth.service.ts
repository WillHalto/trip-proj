import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  constructor(public router: Router) {}

  public onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("POST", "/api/login", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
      console.log("Signed in");
      this.router.navigate(["postlogin"]);
    }.bind(this);

    xhr.send("idtoken=" + id_token);
  }

  public onSignOut(): void {
    // Go back to the home route
    // TODO: clear cookie
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("POST", "/api/logout", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
      console.log("Signed out");
      this.router.navigate(["/"]);
    }.bind(this);
    xhr.send("idtoken=");
  }
}
