import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CasualRestaurantsComponent } from './Casual-Food/Casual.component';
import { RotateDetailsComponent } from './rotate-dining/rotate-details.component';
import { SharedComponent } from './shared/shared.component';
import { NavbarComponent } from './shared/navbar/NavbarComponent.';
import { PaloComponent } from './palo/palo.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome-page/welcome-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClubsLoungesComponent } from './clubs-lounges/clubs-lounges.component';
import { HttpClientModule } from '@angular/common/http';
import { CastawayCayComponent } from './castaway-cay/castaway-cay.component'
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    CasualRestaurantsComponent,
    RotateDetailsComponent,
    SharedComponent,
    NavbarComponent,
    PaloComponent,
    WelcomeComponent,
    ClubsLoungesComponent,
    CastawayCayComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    HttpClientModule, BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
