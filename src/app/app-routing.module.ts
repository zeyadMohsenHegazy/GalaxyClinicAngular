import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './demo-module/demo-page/demo-page.component';
import { HeaderComponent } from './shared-module/components/header/header.component';

const routes: Routes = [
  { path: '', component: DemoPageComponent },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
