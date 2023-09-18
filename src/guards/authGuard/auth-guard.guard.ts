import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from 'src/app/pages/auth-module/services/loginServices/login.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  if (authService.isLogged) return true;
  else return false;
};
