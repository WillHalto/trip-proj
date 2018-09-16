import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
