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
  constructor(
    private doctorService: DoctorWithSpecialityService,
    private toast: ToasterInvokerService
  ) {}
  ngOnInit(): void {
    this.doctorService.getDoctorsWithSpecialites().subscribe({
      next: (value) => {
        this.doctors = value.result ;
      },
      error: () => {
        this.toast.errorState('please refresh the page or try again later');
      },
    });
    console.log(this.doctors);
  }
}
