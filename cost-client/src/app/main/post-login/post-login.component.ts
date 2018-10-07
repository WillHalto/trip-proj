import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {
  userProfile: gapi.auth2.BasicProfile;

  constructor(private route: ActivatedRoute, public authService: AuthService) {
   }

  ngOnInit() {
    //this.userProfile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
  }

  ngAfterViewInit(){
  }
}
