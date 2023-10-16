import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CasualRestaurantsComponent } from './Casual-Food/Casual.component';
import { RotateDetailsComponent } from './rotate-dining/rotate-details.component';
import { SharedComponent } from './shared/shared.component';
import { NavbarComponent } from './shared/navbar/NavbarComponent.';
import { PaloComponent } from './palo/palo.component';

@NgModule({
  declarations: [
    AppComponent,
    CasualRestaurantsComponent,
    RotateDetailsComponent,
    SharedComponent,
    NavbarComponent,
    PaloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
