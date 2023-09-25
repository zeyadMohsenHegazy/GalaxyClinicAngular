import { Component, OnInit } from '@angular/core';
import { DoctorResponse } from '../models/doctor-Response/doctor-response';
import { DoctorWithSpecialityService } from '../services/doctorSpecialities/doctor-speciality.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';

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
    private toast: ToasterInvokerService
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
}
