import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
 //{ path: '',
 //redirectTo: '/Welcome',
 //pathMatch: 'full'},
 { path: 'auth',
 canActivate: [authGuard],
 loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
},
  {
    path: 'Welcome',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./welcome-page/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'RotationalDining',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./rotate-dining/rotate.module').then((m) => m.RotateModule),
  },
  {
    path: 'CasualDining',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./Casual-Food/casual.module').then((m) => m.CasualModule),
  },
  {
    path: 'Palo',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./palo/palo.module').then((m) => m.PaloModule),
  },
  {
    path: 'clubs-and-lounges',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./clubs-lounges/club-lounges.module').then((m) => m.ClubsLoungesModuel),
  },
  {
    path: 'CastawayCay',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./castaway-cay/castaway.module').then((m) => m.CastawayModule),
  },
  {
    path: 'Favorites',
    component: FavoritesComponent
  },

  ];

  @NgModule({
  imports:
  [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
