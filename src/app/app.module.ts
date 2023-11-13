import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/NavbarComponent.';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

  ],
  imports: [
    HttpClientModule, BrowserModule,AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService, multi: true
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
