import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Pages
import { SignUpComponent } from './sign-up.component';

//Modules
import { SharedModule } from '../../Components/shared.module'


@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  providers: [],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }