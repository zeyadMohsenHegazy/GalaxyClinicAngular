import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-module/login-component/login-component.component';
import { RegisterComponent } from './register-module/register-component/register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ResetPassComponent } from './forget-password/reset-pass/reset-pass.component';
import { ForgetPassComponent } from './forget-password/forget-pass/forget-pass.component';
import { ErrorPageComponent } from 'src/app/shared-module/components/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resetPassword', component: ResetPassComponent },
  { path: 'forgetPassword', component: ForgetPassComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
