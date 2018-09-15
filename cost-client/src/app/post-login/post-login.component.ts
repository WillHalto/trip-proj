import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {

  username: string;

  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     of(params.get('username'))
    //   )
    // ).subscribe((d) => {
    //   this.assignUserName(d);

    // });

    //console.log(auth2.isSignedIn.get());
    // this.route.params
    // .forEach(params => {
    //   this.username = params['username'];
    // });
      
  }

  assignUserName(name: string){
    this.username=name;
  }

  ngAfterViewInit(){

  }

}
