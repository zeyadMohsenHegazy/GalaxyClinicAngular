import { Component, OnInit } from '@angular/core';
import { SpecialityResponse } from 'src/app/shared-module/models/speciality-response';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { DoctorSpecialitiesService } from 'src/app/shared-module/services/getDoctorSpecialities/doctor-specialities.service';
import { GeneralRequest } from 'src/models/generalRequest/general-request';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';
import { SpecialityService } from '../services/speciality.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.css'],
})
export class SpecialityListComponent implements OnInit {
  constructor(
    private specialitiesService: DoctorSpecialitiesService,
    private userInfo: UserInfoService,
    private specialityService: SpecialityService,
    private toast: ToasterInvokerService,
    private route : Router
  ) {}
  specialities: SpecialityResponse[] = [];
  pagination: number = 1;
  allSpecialities: number = 0;
  ngOnInit(): void {
    this.fetchSpecialities();
  }
  fetchSpecialities() {
    this.specialitiesService.getSpecialities().subscribe({
      next: (value) => {
        this.specialities = value.result;
        this.allSpecialities = this.specialities.length;
      },
      error(err) {},
    });
  }
  renderPage(event: number) {
    this.pagination = event;
    this.fetchSpecialities();
  }
  editRow(ID: number) {
    this.route.navigate(['pages/cofig/specialityDetails/' + ID]);
  }
  //delete
  private deleteRequest: GeneralRequest = { Id: 0, UserId: 0 };

  deleteRow(ID: number) {
    if (this.confirmDelete()) {
      this.deleteRequest.Id = ID;
      this.deleteRequest.UserId = this.userInfo.getUserInfo()?.userId;
      this.specialityService.removeSpeciality(this.deleteRequest).subscribe({
        next: (value) => {
          if (value.success) {
            this.toast.successState('deleted successfully');
            this.fetchSpecialities();
          } else {
            this.toast.errorState('something went wrong');
          }
        },
        error: () => {
          this.toast.errorState('enternal server error');
        },
      });
    }
  }
  confirmDelete(): boolean {
    if (
      confirm('Are You sure that you want delete this Speciality??') == true
    ) {
      return true;
    } else {
      return false;
    }
  }
  //--//
  addNewSpeciality() {}
}
