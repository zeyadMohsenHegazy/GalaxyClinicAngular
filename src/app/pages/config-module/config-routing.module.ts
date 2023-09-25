import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSpecialityComponent } from './doctors/doctor-speciality/doctor-speciality.component';

const routes: Routes = [{ path: '', component: DoctorSpecialityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigRoutingModule {}
