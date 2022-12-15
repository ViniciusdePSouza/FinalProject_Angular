import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

//Pages
import { MenuComponent } from './menu.component'

//Modules
import { SharedModule } from '../../Components/shared.module'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    TranslateModule,
  ],
  providers: [],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }