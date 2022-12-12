import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './pages/sign-in/sign-in.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component'
import { ReservationComponent } from './pages/reservation/reservation.component'

const routes: Routes = [
  {
    path: '',
    component: SignInComponent, 
  },

  {
    path: 'register',
    component: SignUpComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path:'about',
    component: AboutComponent
  },

  {
    path: 'reservation',
    component: ReservationComponent
  },
  
  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
