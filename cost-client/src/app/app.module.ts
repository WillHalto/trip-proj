import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, Headers, HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostLoginComponent } from './main/post-login/post-login.component';
import { AppRoutingModule } from './/app-routing.module';
import { TripsComponent } from './main//trips/trips.component';
import { NewTripComponent } from './main/new-trip/new-trip.component';
import { TripDetailsComponent } from './main/trip-details/trip-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostLoginComponent,
    TripsComponent,
    NewTripComponent,
    TripDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
