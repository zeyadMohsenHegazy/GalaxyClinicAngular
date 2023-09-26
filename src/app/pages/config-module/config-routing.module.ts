import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSpecialityComponent } from './doctors/doctor-speciality/doctor-speciality.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { SpecialityListComponent } from './specialities/speciality-list/speciality-list.component';
import { SpecialityDetailsComponent } from './specialities/speciality-details/speciality-details.component';

const routes: Routes = [
  { path: '', component: DoctorSpecialityComponent },
  { path: 'doctor/:id', component: DoctorDetailsComponent },
  { path: 'specialityList', component: SpecialityListComponent },
  { path: 'specialityDetails/:id', component: SpecialityDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigRoutingModule {}
