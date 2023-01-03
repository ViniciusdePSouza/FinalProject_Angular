import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SignInModule } from './pages/sign-in/sign-in.module';
import { SignUpModule } from './pages/sign-up/sign-up.module';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { ReservationModule } from './pages/reservation/reservation.module';
import { MenuModule } from './pages/menu/menu.module';
import { SharedModule } from './Components/shared.module';
import { AuthInterceptor } from 'src/auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SignInModule,
    SignUpModule,
    HomeModule,
    AboutModule,
    ReservationModule,
    MenuModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}