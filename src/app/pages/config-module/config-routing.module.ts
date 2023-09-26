import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSpecialityComponent } from './doctors/doctor-speciality/doctor-speciality.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';

const routes: Routes = [
  { path: '', component: DoctorSpecialityComponent },
  { path: 'doctor/:id', component: DoctorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigRoutingModule {}
