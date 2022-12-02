import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Pages
import { SignInComponent } from './pages/sign-in/sign-in.component';

//Components
import { InputFormComponent } from './Components/input-form/input-form.component';
import { ButtonComponent } from './Components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    InputFormComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
