import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';
import { LoginRequest } from '../../models/loginModels/loginRequest/login-request';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private methodeName = 'Users/login';
  isLogged!: boolean;
  constructor(
    private apiInvoker: ApiInvokerService,
    private userInfo: UserInfoService
  ) {
    this.checkLogged();
  }

  userLogin(login: LoginRequest) {
    return this.apiInvoker.sendApiResquest(this.methodeName, login);
  }
  private checkLogged() {
    if (this.userInfo.getUserInfo() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }

  private updateUserInfo() {
    //update user info from auth module
  }
}
