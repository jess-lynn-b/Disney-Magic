import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RotateDetailsComponent } from './rotate-dining/rotate-details.component';
import { RotationalDiningService } from './rotate-dining/rotational.service';
import { CasualRestaurantsComponent } from './Casual-Food/Casual.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: RotationalDiningService },
  { path: 'casualDining', component: CasualRestaurantsComponent},
  ];

  @NgModule({
  declarations: [
    AppComponent,
    CommonModule,
    NgModule,
    RotateDetailsComponent,
    RotationalDiningService
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
