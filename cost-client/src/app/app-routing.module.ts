import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostLoginComponent } from './main/post-login/post-login.component';
import { NewTripComponent } from './main/new-trip/new-trip.component';

const routes: Routes = [
  { path: 'postlogin', component: PostLoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
