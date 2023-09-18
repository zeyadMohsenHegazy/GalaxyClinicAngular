import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './demo-module/demo-page/demo-page.component';
import { HeaderComponent } from './shared-module/components/header/header.component';
import { authGuardGuard } from 'src/guards/authGuard/auth-guard.guard';
import { RegisterComponent } from './pages/auth-module/register-module/register-component/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((z) => z.PagesModule),
    canActivate: [authGuardGuard],
  },
  { path: '**', component: DemoPageComponent },
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
