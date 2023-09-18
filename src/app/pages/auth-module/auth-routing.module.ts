import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-module/login-component/login-component.component';
import { RegisterComponent } from './register-module/register-component/register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

const routes: Routes = [{ path: '', component: LoginComponentComponent },
{path: 'register', component: RegisterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
