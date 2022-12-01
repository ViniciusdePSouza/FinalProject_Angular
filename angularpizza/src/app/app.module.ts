import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { FormComponent } from './Components/form/form.component';
import { InputFormComponent } from './Components/input-form/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    FormComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
