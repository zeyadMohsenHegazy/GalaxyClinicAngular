import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/pages/auth-module/models/loginModels/loginRequest/login-request';
import { LoginResponse } from 'src/app/pages/auth-module/models/loginModels/loginResponse/login-response';
import { LoginService } from 'src/app/pages/auth-module/services/loginServices/login.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private loginRequest: LoginRequest = { userName: '', password: '' };
  public loginCounter: number = 0;
  constructor(
    private route: Router,
    private loginService: LoginService,
    private toast: ToasterInvokerService
  ) {}
  public setForgetPassCode(forgetCode: string) {
    localStorage.setItem('forgetCode', forgetCode);
  }
  public getForgetPassCode(): string {
    return localStorage.getItem('forgetCode')!;
  }
  public clearForgetPassCode() {
    localStorage.removeItem('forgetCode');
  }
  public setUserInfo(loginRespone: LoginResponse) {
    localStorage.setItem('userInfo', JSON.stringify(loginRespone));
    this.loginCounter = 1;
  }
  get loginCount() {
    return this.loginCounter;
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
  updateUserData() {
    this.loginRequest.userName = this.getUserInfo().userName;
    this.loginRequest.password = this.getUserInfo().userToken;
    this.loginService.userLogin(this.loginRequest).subscribe({
      next: (value) => {
        this.setUserInfo(value.result);
        this.toast.successState('user info updated successfully');
      },
      error: () => {
        this.toast.errorState('something went wrong while updating the data');
      },
    });
  }
}
