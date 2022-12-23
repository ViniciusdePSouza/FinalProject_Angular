import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
//Pages
import { SignUpComponent } from './sign-up.component';

//Modules
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../../Components/shared.module'
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }