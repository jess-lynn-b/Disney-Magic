import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { map, take } from "rxjs";


export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.currUser.pipe(
      take(1),
      map((user) => {
        const isAuthenticated = !!user;

        if (isAuthenticated) {
          if (route.routeConfig?.path === 'auth') {
            return router.createUrlTree(['/Welcome']);
          }
          return true;
        } else {
          if (route.routeConfig?.path === 'auth' ) {
            return true;
          }
          return router.createUrlTree(['/auth']);
        }
      })
    );
  };


