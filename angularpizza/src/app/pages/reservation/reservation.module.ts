
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Pages
import { ReservationComponent } from './reservation.component';


//Modules
import { SharedModule } from '../../Components/shared.module'
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';


@NgModule({
  declarations: [
    ReservationComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  exports: [
    ReservationComponent
  ]
})
export class ReservationModule { }