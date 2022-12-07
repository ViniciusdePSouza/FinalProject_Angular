import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Pages
import { HomeComponent } from './home.component';

//Modules
import { SharedModule } from '../../Components/shared.module'


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }