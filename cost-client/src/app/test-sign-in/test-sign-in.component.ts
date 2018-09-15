import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-test-sign-in',
  templateUrl: './test-sign-in.component.html',
  styleUrls: ['./test-sign-in.component.css']
})
export class TestSignInComponent implements OnInit {

  user: string;

  constructor(private router:Router, private ngZone:NgZone, private authService:AuthService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }


  assignUser(s:string){
    this.user=s;
  }

}
