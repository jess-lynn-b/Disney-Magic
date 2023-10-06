import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RotationalDiningComponent } from './restaurants/rotational-dining/rotational-dining.component';
import { SharedComponent } from './shared/shared.component';
import { DineModelComponent } from './shared/dine-model/dine-model.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RotateDetailsComponent } from './rotate-details/rotate-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RotationalDiningComponent,
    SharedComponent,
    NavbarComponent,
    SidebarComponent,
    RotateDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
