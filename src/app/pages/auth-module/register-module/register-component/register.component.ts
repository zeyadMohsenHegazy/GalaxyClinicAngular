import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterDoctorService } from '../../services/registerServices/registerAsDoctor/register-doctor.service';
import { Router } from '@angular/router';
import { DoctorSpecialitisComponent } from 'src/app/shared-module/components/doctor-specialitis/doctor-specialitis.component';
import { DoctorSpecialitiesService } from 'src/app/shared-module/services/getDoctorSpecialities/doctor-specialities.service';
import { RegisterPatientService } from '../../services/registerServices/registerAsPatient/register-patient.service';
import { RegisterSystemUserService } from '../../services/registerServices/registerAsSystemUser/register-system-user.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  doctorIsChecked = false;
  userType: any;
  selectedUserType: string = '';
  speciality_code: number = this.specialities.specialityCode;

  constructor(
    private fb: FormBuilder,
    private registerDoc: RegisterDoctorService,
    private registerPatient: RegisterPatientService,
    private registerSysUser: RegisterSystemUserService,
    private router: Router,
    private specialities: DoctorSpecialitiesService,
    private toast: ToasterInvokerService
  ) {}
  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(4)]],
    userName: ['', [Validators.required, Validators.minLength(4)]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
      ],
    ],
    mobileNumber: [
      '',
      [Validators.required, Validators.maxLength(11), Validators.minLength(11)],
    ],
    userPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(11),
        Validators.pattern('^(?=.*[A-Z]).{11,}$'),
      ],
    ],
    userTypeName: ['', [Validators.required]],
    doctorSpeciality: [''],
  });

  register() {
    const specialityCode = this.registerForm.get('doctorSpeciality');
    specialityCode?.setValue(this.specialities.specialityCode.toString());
    if (this.selectedUserType == 'doctor') {
      //call register as doctor
      this.registerDoc.registerNewDoctor(this.registerForm.value).subscribe({
        next: () => {
          this.router.navigate(['pages/auth/login']);
          this.toast.successState('Account Created Successfully');
        },
        error: (err) => {
          this.toast.errorState(err?.error);
        },
      });
    } else if (this.selectedUserType == 'patient') {
      // call register as patient
      this.registerPatient
        .registerNewPatient(this.registerForm.value)
        .subscribe({
          next: () => {
            this.router.navigate(['pages/auth/login']);
            this.toast.successState('Account Created Successfully');
          },
          error: (err) => {
            this.toast.errorState(err?.error);
          },
        });
    } else if (this.selectedUserType == 'systemUser') {
      // call register as system user
      this.registerSysUser
        .registerNewSystemUser(this.registerForm.value)
        .subscribe({
          next: () => {
            this.router.navigate(['pages/auth/login']);
            this.toast.successState('Account Created Successfully');
          },
          error: (err) => {
            this.toast.errorState(err?.error);
          },
        });
    }
  }

  getContent(e: any) {
    this.selectedUserType = e.value;
  }
}
