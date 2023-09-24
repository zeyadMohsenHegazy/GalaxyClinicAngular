import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register-component/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { RegisterDoctorComponent } from './register-component/register-doctor/register-doctor.component';
import { RegisterPatientComponent } from './register-component/register-patient/register-patient.component';
import { RegisterSystemUserComponent } from './register-component/register-system-user/register-system-user.component';

@NgModule({
  declarations: [RegisterComponent, RegisterDoctorComponent, RegisterPatientComponent, RegisterSystemUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule,
    TranslateModule,
    RouterModule,
  ],
})
export class RegisterModuleModule {}
