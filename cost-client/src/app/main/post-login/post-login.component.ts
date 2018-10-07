import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {
  constructor(public authService: AuthService) {
   }

  ngOnInit() {   
  }

  ngAfterViewInit(){
  }
}
