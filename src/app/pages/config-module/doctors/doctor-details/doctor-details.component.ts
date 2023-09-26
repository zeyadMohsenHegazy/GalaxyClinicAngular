import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorWithSpecialityService } from '../services/doctorSpecialities/doctor-speciality.service';
import { DoctorResponse } from '../models/doctor-Response/doctor-response';
import { GeneralRequest } from 'src/models/generalRequest/general-request';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorRequest } from '../models/doctor-Request/doctor-request';
import { DoctorSpecialitiesService } from 'src/app/shared-module/services/getDoctorSpecialities/doctor-specialities.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'],
})
export class DoctorDetailsComponent implements OnInit {
  constructor(
    private ActiveRoute: ActivatedRoute,
    private doctorService: DoctorWithSpecialityService,
    private toast: ToasterInvokerService,
    private rout: Router,
    private userDetails: UserInfoService,
    private fb: FormBuilder,
    private specilatyService: DoctorSpecialitiesService
  ) {}
  formName!: string;
  editDoctorForm: FormGroup = this.fb.group({
    Id: [''],
    Doctor_Name: ['', [Validators.required, Validators.minLength(4)]],
    Speciality_Code: [''],
    mobileNumber: [
      '',
      [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    ],
    doctorEmail: ['', [Validators.required, Validators.email]],
    UserId: [''],
  });
  doctorDetails: DoctorResponse = {
    doctor_Code: 0,
    doctor_Name: '',
    speciality_Name: '',
    mobileNumber: '',
    doctorEmail: '',
  };
  getDoctorRequest: GeneralRequest = {
    Id: 0,
    UserId: 0,
  };
  DoctorId: number = 0;
  ngOnInit(): void {
    this.DoctorId = Number(this.ActiveRoute.snapshot.paramMap.get('id'));
    this.getDoctorRequest.Id = this.DoctorId;
    if (this.DoctorId > 0) {
      this.getDoctorRequest.UserId = this.userDetails.getUserInfo()?.userId;
      this.doctorService.getOneDoctorById(this.getDoctorRequest).subscribe({
        next: (value) => {
          if (value.success) {
            this.doctorDetails = value.result;
            this.formName = 'Edit Form';
            // this.specilatyService.specialityCode = value.result.Speciality_Name
          } else {
            this.toast.errorState('something went wrong');
            this.rout.navigate(['/pages/cofig/']);
          }
        },
        error: () => {
          this.toast.errorState('an error occured');
          this.rout.navigate(['/pages/cofig/']);
        },
      });
    } else if (this.DoctorId == 0) {
      this.formName = 'Add New Doctor';
    }
  }
  saveDoctorEdition() {
    const userID = this.editDoctorForm.get('UserId');
    userID?.setValue(this.userDetails.getUserInfo()?.userId);
    console.log(this.editDoctorForm.value);
    const SpecialityID = this.editDoctorForm.get('Speciality_Code');
    SpecialityID?.setValue(this.specilatyService.specialityCode);
    this.doctorService
      .updateDoctor(this.editDoctorForm.value as DoctorRequest)
      .subscribe({
        next: (value) => {
          if (value.success) {
            this.toast.successState('updated successfully');
            this.cancelBtn();
          }
        },
        error: () => {
          this.toast.errorState('error');
        },
      });
  }
  cancelBtn() {
    this.editDoctorForm.reset();
    this.rout.navigate(['pages/cofig/doctor/' + 0]);
  }
  addNewDoctor() {
    //create doctor
    const userID = this.editDoctorForm.get('UserId');
    userID?.setValue(this.userDetails.getUserInfo()?.userId);
    const SpecialityID = this.editDoctorForm.get('Speciality_Code');
    SpecialityID?.setValue(this.specilatyService.specialityCode);
    this.doctorService
      .addDoctor(this.editDoctorForm.value as DoctorRequest)
      .subscribe({
        next: (value) => {
          if (value.success) {
            this.toast.successState('new doctor added');
            this.cancelBtn();
          } else {
            this.toast.errorState('error happened');
          }
        },
        error: () => {
          this.toast.errorState('enternal server error');
        },
      });
  }

  get name() {
    return this.editDoctorForm.get('Doctor_Name');
  }
  get mobilNumber() {
    return this.editDoctorForm.get('mobileNumber');
  }
  get mail() {
    return this.editDoctorForm.get('doctorEmail');
  }
}
