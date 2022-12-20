import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

//Pages
import { MenuComponent } from './menu.component'

//Modules
import { SharedModule } from '../../Components/shared.module'
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    TranslateModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }