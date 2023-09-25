import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorSpecialityComponent } from './doctor-speciality/doctor-speciality.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DoctorSpecialityComponent],
  imports: [CommonModule],
})
export class DoctorsModule {}
