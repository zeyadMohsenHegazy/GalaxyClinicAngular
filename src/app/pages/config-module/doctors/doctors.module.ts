import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorSpecialityComponent } from './doctor-speciality/doctor-speciality.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorSpecialitisComponent } from 'src/app/shared-module/components/doctor-specialitis/doctor-specialitis.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  declarations: [DoctorSpecialityComponent, DoctorDetailsComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModuleModule
  ],
  providers:[DoctorSpecialitisComponent]
})
export class DoctorsModule {}
