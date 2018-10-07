import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { LoginComponent} from'../../login/login.component';
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
    //this.userProfile = getUser().getBasicProfile();
  }

  ngAfterViewInit(){
  }
}
