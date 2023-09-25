import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from 'src/guards/authGuard/auth-guard.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth-module/auth-module.module').then(
        (z) => z.AuthModuleModule
      ),
    canActivate: [authGuardGuard],
  },
  {
    path: 'cofig',
    loadChildren: () =>
      import('./config-module/config-module.module').then(
        (z) => z.ConfigModuleModule
      ),
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./transaction-module/transaction-module.module').then(
        (z) => z.TransactionModuleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
