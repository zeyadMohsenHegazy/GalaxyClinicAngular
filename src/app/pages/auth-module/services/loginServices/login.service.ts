import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';
import { LoginRequest } from '../../models/loginModels/loginRequest/login-request';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private methodeName = 'Users/login';
  isLogged = true;
  constructor(private apiInvoker: ApiInvokerService) {}

  userLogin(login: LoginRequest) {
    return this.apiInvoker.sendApiResquest(this.methodeName, login);
  }
}
