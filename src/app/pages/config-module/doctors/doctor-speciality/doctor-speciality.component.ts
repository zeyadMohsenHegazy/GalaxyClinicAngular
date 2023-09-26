import { Component, OnInit } from '@angular/core';
import { DoctorResponse } from '../models/doctor-Response/doctor-response';
import { DoctorWithSpecialityService } from '../services/doctorSpecialities/doctor-speciality.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';
import { GeneralRequest } from 'src/models/generalRequest/general-request';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-speciality',
  templateUrl: './doctor-speciality.component.html',
  styleUrls: ['./doctor-speciality.component.css'],
})
export class DoctorSpecialityComponent implements OnInit {
  doctors: DoctorResponse[] = [];
  allDoctors: number = 0;
  pagination: number = 1;
  constructor(
    private doctorService: DoctorWithSpecialityService,
    private toast: ToasterInvokerService,
    private userInfo: UserInfoService,
    private rout: Router
  ) {}
  ngOnInit(): void {
    this.fetchDoctors();
  }
  fetchDoctors() {
    this.doctorService.getDoctorsWithSpecialites().subscribe({
      next: (value) => {
        this.doctors = value.result;
        this.allDoctors = this.doctors.length;
      },
      error: () => {
        this.toast.errorState('please refresh the page or try again later');
      },
    });
    console.log(this.doctors);
  }
  renderPage(event: number) {
    this.pagination = event;
    this.fetchDoctors();
  }
  private deleteRequest: GeneralRequest = { Id: 0, UserId: 0 };
  //Deletion of a doctor
  deleteRow(Id: number) {
    if (this.confirmDelete()) {
      this.deleteRequest.Id = Id;
      this.deleteRequest.UserId = this.userInfo.getUserInfo()?.userId;
      this.doctorService.removeDoctor(this.deleteRequest).subscribe({
        next: (value) => {
          if (value.success) {
            this.toast.successState('deleted successflly');
            this.fetchDoctors();
          } else {
            this.toast.errorState('please try again later');
          }
        },
        error: () => {
          this.toast.errorState('something went wrong please try again later');
        },
      });
    }
  }
  confirmDelete(): boolean {
    if (confirm('Are You sure that you want delete this doctor??') == true) {
      return true;
    } else {
      return false;
    }
  }
  //---//
  //Edition of a doctor
  editRow(Id: number) {
    this.rout.navigate(['pages/cofig/doctor/' + Id]);
  }
  //---//
  //add new doctor
  addNewDoctor() {
    this.rout.navigate(['pages/cofig/doctor/' + 0]);
  }
  //--//
}
