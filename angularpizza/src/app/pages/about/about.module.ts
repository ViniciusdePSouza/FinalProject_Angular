import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Pages
import { AboutComponent } from './about.component';

//Modules
import { SharedModule } from '../../Components/shared.module'
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';


@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }