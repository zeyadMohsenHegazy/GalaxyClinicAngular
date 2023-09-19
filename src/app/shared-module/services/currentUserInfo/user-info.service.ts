import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}

  public setUserIdLocalStorage(userId: string) {
    localStorage.setItem('userId', userId);
  }
  public setUserTypeLocalStorage(userTypeName: string) {
    localStorage.setItem('userType', userTypeName);
  }
  public getUserTypeLocalStorage(): string {
    return localStorage.getItem('userType')!;
  }
  public getUserIdLocalStorage(): string {
    return localStorage.getItem('userId')!;
  }
}
