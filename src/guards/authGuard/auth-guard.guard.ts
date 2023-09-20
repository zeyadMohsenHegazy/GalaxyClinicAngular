import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from 'src/app/pages/auth-module/services/loginServices/login.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);

  if (!authService.isLogged) return true;
  else {
    //to navigate to demo component
    router.navigate(['demo']);
    return false
  };
};
