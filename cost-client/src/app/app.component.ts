import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'Cost App';
  
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngAfterViewInit() {
    
  }
}
