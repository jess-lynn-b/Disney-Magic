import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome-page/welcome-page.component';
import { RotateDetailsComponent } from './rotate-dining/rotate-details.component';
import { CasualRestaurantsComponent } from './Casual-Food/Casual.component';
import { PaloComponent } from './palo/palo.component';
import { ClubsLoungesComponent } from './clubs-lounges/clubs-lounges.component';
import { CastawayCayComponent } from './castaway-cay/castaway-cay.component';


const routes: Routes = [
  { path: '', redirectTo: '/Welcome', pathMatch: 'full'},
  { path: 'Welcome', component: WelcomeComponent},
  { path: 'RotationalDining', component: RotateDetailsComponent, children: [
    {path: ':id', component: RotateDetailsComponent}
  ] },
  { path: 'CasualDining', component: CasualRestaurantsComponent},
  { path: 'Palo', component: PaloComponent},
  { path: 'clubs-and-lounges', component: ClubsLoungesComponent},
  { path: 'CastawayCay', component: CastawayCayComponent},
  ];

  @NgModule({
  imports:
  [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
