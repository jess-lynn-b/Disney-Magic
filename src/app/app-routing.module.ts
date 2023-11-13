import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '',
  redirectTo: '/Welcome',
  pathMatch: 'full'},
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
    path: 'rotateDining',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./rotate-dining/rotate.module').then((m) => m.RotateModule),
  },
  {
    path: 'casual',
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
    path: 'clubs-lounges',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./clubs-lounges/club-lounges.module').then((m) => m.ClubsLoungesModuel),
  },
  {
    path: 'CastawayCay',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./castaway-cay/castaway.module').then((m) => m.CastawayModule),
  }
  ];


  @NgModule({
  imports:
  [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
