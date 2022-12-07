import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
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
    FormsModule,
    RouterModule
  ],
  providers: [],
  exports: [
    SignInComponent
  ]
})
export class SignInModule { }