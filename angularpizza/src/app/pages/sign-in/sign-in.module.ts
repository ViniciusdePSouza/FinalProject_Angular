import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Pages
import { SignInComponent } from './sign-in.component';

//Modules
import { SharedModule } from '../../Components/shared.module'


@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  providers: [],
  exports: [
    SignInComponent
  ]
})
export class SignInModule { }