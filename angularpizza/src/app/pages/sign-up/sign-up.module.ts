import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
//Pages
import { SignUpComponent } from './sign-up.component';

//Modules
import { SharedModule } from '../../Components/shared.module'
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }