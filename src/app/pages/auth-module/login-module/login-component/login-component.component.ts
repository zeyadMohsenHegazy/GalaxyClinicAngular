import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/loginServices/login.service';
import { LoginRequest } from '../../models/loginModels/loginRequest/login-request';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {
  constructor(private fb: FormBuilder, private loginService: LoginService) {}
  loginForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  //login Api
  loginRequest: LoginRequest = { userName: '', password: '' };
  login() {
    // this.loginRequest.userName = this.loginForm.get('userName')?.value ??'';
    // this.loginRequest.password = this.loginForm.get('password')?.value ?? '';
    this.loginService
      .userLogin(this.loginForm.value as LoginRequest)
      .subscribe({
        next: (value) => {
          //checks that the api return success is true
          if (value.success == true) {
            this.loginService.isLogged = true;
            alert(value.result.userType);
            alert(value.result.userId);
            //navigate to the home
          }
        },
        error(err) {
          console.log(err?.error);
        },
      });
  }
}
