import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignInModule } from './pages/sign-in/sign-in.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignInModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
