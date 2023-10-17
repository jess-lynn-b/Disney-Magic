import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RotateDetailsComponent } from './rotate-dining/rotate-details.component';
import { CasualRestaurantsComponent } from './Casual-Food/Casual.component';
import { PaloComponent } from './palo/palo.component';


const routes: Routes = [
  { path: '', redirectTo: '/Welcome', pathMatch: 'full'},
  { path: 'Welcome', component: WelcomePageComponent},
  { path: 'RotationalDining', component: RotateDetailsComponent },
  { path: 'CasualDining', component: CasualRestaurantsComponent},
  { path: 'Palo', component: PaloComponent},
  ];

  @NgModule({
  imports:
  [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
