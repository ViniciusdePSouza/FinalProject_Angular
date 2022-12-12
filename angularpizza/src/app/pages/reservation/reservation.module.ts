
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Pages
import { ReservationComponent } from './reservation.component';


//Modules
import { SharedModule } from '../../Components/shared.module'


@NgModule({
  declarations: [
    ReservationComponent,
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  providers: [],
  exports: [
    ReservationComponent
  ]
})
export class ReservationModule { }