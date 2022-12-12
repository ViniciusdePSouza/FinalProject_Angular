import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Pages
import { AboutComponent } from './about.component';

//Modules
import { SharedModule } from '../../Components/shared.module'


@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  providers: [],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }