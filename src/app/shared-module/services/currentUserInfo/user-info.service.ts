import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/pages/auth-module/models/loginModels/loginResponse/login-response';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(private route: Router) {}
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
  public signOut() {
    localStorage.clear();
    this.route.navigate(['pages/auth/login']);
  }
  isLogged(): boolean {
    return !!localStorage.getItem('userInfo');
  }
}
