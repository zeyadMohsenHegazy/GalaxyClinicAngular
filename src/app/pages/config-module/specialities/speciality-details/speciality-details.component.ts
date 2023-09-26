import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { GeneralRequest } from 'src/models/generalRequest/general-request';
import { SpecialityService } from '../services/speciality.service';
import { DoctorResponse } from '../../doctors/models/doctor-Response/doctor-response';
import { SpecialityResponse } from '../models/specialityResponse/speciality-response';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';
import { SpecialityRequest } from '../models/specialityRequest/speciality-request';

@Component({
  selector: 'app-speciality-details',
  templateUrl: './speciality-details.component.html',
  styleUrls: ['./speciality-details.component.css'],
})
export class SpecialityDetailsComponent implements OnInit {
  formName: string = '';
  constructor(
    private fb: FormBuilder,
    private ActiveRoute: ActivatedRoute,
    private userDetails: UserInfoService,
    private specialityService: SpecialityService,
    private toast: ToasterInvokerService,
    private route: Router
  ) {}
  SpecialityId: number = 0;
  getSpecialityRequest: GeneralRequest = {
    Id: 0,
    UserId: 0,
  };
  specialityDetails: SpecialityResponse = {
    speciality_Code: 0,
    speciality_Name: '',
  };
  specialityForm: FormGroup = this.fb.group({
    speciality_Code: [''],
    speciality_Name: ['', [Validators.required, Validators.minLength(5)]],
    userId: [''],
  });
  ngOnInit(): void {
    this.SpecialityId = Number(this.ActiveRoute.snapshot.paramMap.get('id'));
    this.getSpecialityRequest.Id = this.SpecialityId;
    if (this.SpecialityId > 0) {
      this.getSpecialityRequest.UserId = this.userDetails.getUserInfo()?.userId;
      this.specialityService
        .getOneSpeciality(this.getSpecialityRequest)
        .subscribe({
          next: (value) => {
            if (value.success) {
              this.specialityDetails = value.result;
              this.formName = 'Edit Form';
            } else {
              this.toast.errorState('something went wrong');
              this.route.navigate(['/pages/cofig/specialityList']);
            }
          },
          error: () => {
            this.toast.errorState('an error occured');
          },
        });
    } else if (this.SpecialityId == 0) {
      this.formName = 'Add new Specialty';
    }
  }
  cancelBtn() {
    this.specialityForm.reset();
    this.route.navigate(['pages/cofig/specialityDetails/' + 0]);
  }
  saveSpecialityEdition() {
    const UserId = this.specialityForm.get('userId');
    UserId?.setValue(this.userDetails.getUserInfo().userId);
    this.specialityService
      .updateSpeciality(this.specialityForm.value as SpecialityRequest)
      .subscribe({
        next: (value) => {
          if (value.success) {
            this.toast.successState('updated Successfully');
            this.cancelBtn();
          }
        },
        error: () => {
          this.toast.errorState('error happened please try again later');
        },
      });
  }

  addNewSpeciality() {
    const UserId = this.specialityForm.get('userId');
    UserId?.setValue(this.userDetails.getUserInfo().userId);
    this.specialityService
      .addSpeciality(this.specialityForm.value as SpecialityRequest)
      .subscribe({
        next: (value) => {
          if (value.success) {
            this.toast.successState('added successfully');
            this.cancelBtn();
          } else {
            this.toast.errorState('an error occured');
          }
        },
        error: () => {
          this.toast.errorState('internal server error');
        },
      });
  }
  get name() {
    return this.specialityForm.get('Speciality_Name');
  }
}
