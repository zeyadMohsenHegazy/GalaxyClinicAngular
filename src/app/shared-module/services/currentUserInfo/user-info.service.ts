import { Injectable } from '@angular/core';
import { LoginResponse } from 'src/app/pages/auth-module/models/loginModels/loginResponse/login-response';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}
  public setForgetPassCode(forgetCode: string) {
    localStorage.setItem('forgetCode', forgetCode);
  }
  public getForgetPassCode(): string {
    return localStorage.getItem('forgetCode')!;
  }

  public setUserInfo(loginRespone: LoginResponse) {
    localStorage.setItem('userInfo', JSON.stringify(loginRespone));
  }

  public getUserInfo(): LoginResponse {
    return JSON.parse(localStorage.getItem('userInfo')!) as LoginResponse;
  }
}
