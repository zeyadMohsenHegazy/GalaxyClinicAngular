import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from 'src/app/pages/auth-module/services/loginServices/login.service';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const userInfo = inject(UserInfoService);
  const router = inject(Router);

  if (!userInfo.isLogged()) return true;
  else {
    //to navigate to demo component
    router.navigate(['demo']);
    return false
  };
};
