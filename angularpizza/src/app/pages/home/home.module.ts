import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Pages
import { HomeComponent } from './home.component';

//Modules
import { SharedModule } from '../../Components/shared.module'
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }