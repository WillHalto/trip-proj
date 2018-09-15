import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;

  constructor(private router:Router, private ngZone:NgZone, private authService:AuthService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
