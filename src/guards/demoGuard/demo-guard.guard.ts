import { CanActivateFn, Router } from '@angular/router';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { inject } from '@angular/core';

export const demoGuardGuard: CanActivateFn = (route, state) => {
  const userInfo = inject(UserInfoService);
  const router = inject(Router);

  if (!userInfo.isLogged()) {
    router.navigate(['']);
    return false;
  } else {
    //update the user data
    if (userInfo.loginCount != 1) {
      userInfo.updateUserData();
    }
    return true;
  }
};
