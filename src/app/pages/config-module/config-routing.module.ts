import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSpecialityComponent } from './doctors/doctor-speciality/doctor-speciality.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { SpecialityListComponent } from './specialities/speciality-list/speciality-list.component';
import { SpecialityDetailsComponent } from './specialities/speciality-details/speciality-details.component';
import { ShiftsListComponent } from './shifts/components/shifts-list/shifts-list.component';
import { ShiftsDetailsComponent } from './shifts/components/shifts-details/shifts-details.component';
import { ShiftTimesDetailsComponent } from './shifts/components/shift-times-details/shift-times-details.component';

const routes: Routes = [
  { path: '', component: DoctorSpecialityComponent },
  { path: 'doctor/:id', component: DoctorDetailsComponent },
  { path: 'specialityList', component: SpecialityListComponent },
  { path: 'specialityDetails/:id', component: SpecialityDetailsComponent },
  { path: 'shifts', component: ShiftsListComponent },
  { path: 'shiftDetails/:id', component: ShiftsDetailsComponent },
  { path: 'shiftTimes/:dayId', component: ShiftTimesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigRoutingModule {}
