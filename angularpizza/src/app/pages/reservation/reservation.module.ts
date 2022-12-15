
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Pages
import { ReservationComponent } from './reservation.component';

//Modules
import { SharedModule } from '../../Components/shared.module'
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ReservationComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    ReservationComponent
  ]
})
export class ReservationModule { }