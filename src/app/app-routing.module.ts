import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './demo-module/demo-page/demo-page.component';
import { HeaderComponent } from './shared-module/components/header/header.component';
import { authGuardGuard } from 'src/guards/authGuard/auth-guard.guard';
import { RegisterComponent } from './pages/auth-module/register-module/register-component/register.component';
import { LoginComponentComponent } from './pages/auth-module/login-module/login-component/login-component.component';
import { ErrorPageComponent } from './shared-module/components/error-page/error-page.component';
//can deactivate on the
const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((z) => z.PagesModule),
    canActivate: [authGuardGuard],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
