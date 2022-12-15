import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
//Pages
import { SignInComponent } from './sign-in.component';

//Modules
import { SharedModule } from '../../Components/shared.module'
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    SignInComponent
  ]
})
export class SignInModule { }