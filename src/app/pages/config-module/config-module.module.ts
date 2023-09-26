import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigRoutingModule } from './config-routing.module';
import { FormsModule } from '@angular/forms';
import { DoctorSpecialityComponent } from './doctors/doctor-speciality/doctor-speciality.component';
import { RouterModule } from '@angular/router';
import { DoctorsModule } from './doctors/doctors.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [],
  imports: [CommonModule, ConfigRoutingModule, FormsModule],
})
export class ConfigModuleModule {}
