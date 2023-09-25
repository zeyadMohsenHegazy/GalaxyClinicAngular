import { CanActivateFn } from '@angular/router';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { inject } from '@angular/core';

export const demoGuardGuard: CanActivateFn = (route, state) => {
  const userInfo = inject(UserInfoService);

  if (!userInfo.isLogged()) {
    return false;
  } else {
    //update the user data
    userInfo.updateUserData();

    return true;
  }
};
