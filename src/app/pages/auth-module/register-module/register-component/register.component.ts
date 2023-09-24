import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterDoctorService } from '../../services/registerServices/registerAsDoctor/register-doctor.service';
import { Router } from '@angular/router';
import { DoctorSpecialitiesService } from 'src/app/shared-module/services/getDoctorSpecialities/doctor-specialities.service';
import { RegisterPatientService } from '../../services/registerServices/registerAsPatient/register-patient.service';
import { RegisterSystemUserService } from '../../services/registerServices/registerAsSystemUser/register-system-user.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';
import { DoctorUserInfo } from '../../models/resgisterModels/registerRequest/doctor-user-info';
import { PatientUserInfo } from '../../models/resgisterModels/registerRequest/patient-user-info';
import { SystemUserInfo } from '../../models/resgisterModels/registerRequest/system-user-info';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { GeneralUserInfo } from '../../models/resgisterModels/registerRequest/general-user-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  doctorIsChecked = false;
  userType: any;
  selectedUserType: string = '';
  registerForm!: FormGroup;
  registerDoctorForm!: FormGroup;
  registerPatientForm!: FormGroup;
  registerSystemUserForm!: FormGroup;

  //register requests
  registerNewDoctorObj!: DoctorUserInfo;
  registerNewPatientObj!: PatientUserInfo;
  registerNewSysUserObj!: SystemUserInfo;
  ///////
  constructor(
    private fb: FormBuilder,
    private registerDoc: RegisterDoctorService,
    private registerPatient: RegisterPatientService,
    private registerSysUser: RegisterSystemUserService,
    private router: Router,
    private specialities: DoctorSpecialitiesService,
    private toast: ToasterInvokerService
  ) {}
  ngOnInit(): void {
    //general user Info form
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      userPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.pattern('^(?=.*[A-Z]).{11,}$'),
        ],
      ],
      userTypeName: ['', [Validators.required]],
    });
    //doctor info form
    this.registerDoctorForm = this.fb.group({
      doctorName: ['', [Validators.required, Validators.minLength(4)]],
      doctorMobileNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(11),
          Validators.minLength(11),
        ],
      ],
      doctorEmail: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
        ],
      ],
      doctorSpeciality: [''],
    });
    //patient info form
    this.registerPatientForm = this.fb.group({
      pateintName: ['', [Validators.required, Validators.minLength(4)]],
      patientMobileNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(11),
          Validators.minLength(11),
        ],
      ],
      patientEmail: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
        ],
      ],
      patientDateOfBirth: ['', [Validators.required]],
    });
    //system user info form
    this.registerSystemUserForm = this.fb.group({
      systemUserName: ['', [Validators.required, Validators.minLength(4)]],
      systemUserMobileNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(11),
          Validators.minLength(11),
        ],
      ],
      systemUserEmail: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
        ],
      ],
    });
  }

  register() {
    if (this.selectedUserType == 'doctor') {
      //call register as doctor api
      this.rigsterNewDoctor();
    } else if (this.selectedUserType == 'patient') {
      // call register as patient api
      this.registerNewPatient();
    } else if (this.selectedUserType == 'systemUser') {
      // call register as system user api
      this.registerNewSystemUser();
    }
  }

  getContent(e: any) {
    this.selectedUserType = e.value;
  }

  private rigsterNewDoctor() {
    const specialityCode = this.registerDoctorForm.get('doctorSpeciality');
    specialityCode?.setValue(this.specialities.specialityCode);

    this.registerNewDoctorObj = Object.assign(
      {},
      this.registerForm.value,
      this.registerDoctorForm.value
    ) as DoctorUserInfo;
    this.registerDoc
      .registerNewDoctor(this.registerNewDoctorObj as DoctorUserInfo)
      .subscribe({
        next: (value) => {
          if (value.success) {
            this.router.navigate(['pages/auth/login']);
            this.toast.successState('Account Created Successfully');
          } else {
            this.toast.errorState('please try again later');
          }
        },
        error: () => {
          this.toast.errorState(
            'internal error happend please try again later'
          );
        },
      });
  }

  private registerNewPatient() {
    this.registerNewPatientObj = Object.assign(
      {},
      this.registerForm.value,
      this.registerPatientForm.value
    ) as PatientUserInfo;
    this.registerPatient
      .registerNewPatient(this.registerNewPatientObj)
      .subscribe({
        next: (value) => {
          if (value.success) {
            this.router.navigate(['pages/auth/login']);
            this.toast.successState('Account Created Successfully');
          } else {
            this.toast.errorState('please try again later');
          }
        },
        error: () => {
          this.toast.errorState(
            'internal error happend please try again later'
          );
        },
      });
  }

  private registerNewSystemUser() {
    this.registerNewSysUserObj = Object.assign(
      {},
      this.registerForm.value,
      this.registerSystemUserForm.value
    ) as SystemUserInfo;
    this.registerSysUser
      .registerNewSystemUser(this.registerNewSysUserObj)
      .subscribe({
        next: (value) => {
          if (value.success) {
            this.router.navigate(['pages/auth/login']);
            this.toast.successState('Account Created Successfully');
          } else {
            this.toast.errorState('please try again later');
          }
        },
        error: (err) => {
          this.toast.errorState(
            'internal error happend please try again later'
          );
        },
      });
  }
}
