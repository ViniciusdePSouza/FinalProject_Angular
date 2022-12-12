import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Pages
import { MenuComponent } from './menu.component'

//Modules
import { SharedModule } from '../../Components/shared.module'


@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  providers: [],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }