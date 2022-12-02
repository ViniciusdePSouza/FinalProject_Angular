import { NgModule } from '@angular/core';

//Pages
import { SignInComponent } from './sign-in.component';

//Modules
import { SharedModule } from '../../Components/shared.module'

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: [
    SignInComponent
  ]
})
export class SignInModule { }