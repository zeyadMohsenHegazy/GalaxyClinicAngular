import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/loginServices/login.service';
import { LoginRequest } from '../../models/loginModels/loginRequest/login-request';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private userInfo: UserInfoService,
    private toast: ToasterInvokerService
  ) {}
  loginForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  //login Api
  loginRequest: LoginRequest = { userName: '', password: '' };
  login() {
    this.loginService
      .userLogin(this.loginForm.value as LoginRequest)
      .subscribe({
        next: (value) => {
          //checks that the api return success is true
          if (value.success == true) {
            this.loginService.isLogged = true;
            this.userInfo.setUserIdLocalStorage(value.result.userId);
            this.userInfo.setUserTypeLocalStorage(value.result.userType);
            this.toast.successState('logged Successfully');
            //navigate to the home
          }
        },
        error(err) {
          console.log(err?.error);
        },
      });
  }
}
