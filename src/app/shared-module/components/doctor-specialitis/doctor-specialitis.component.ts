import { Component } from '@angular/core';
import { DoctorSpecialitiesService } from '../../services/getDoctorSpecialities/doctor-specialities.service';
import { SpecialityResponse } from '../../models/speciality-response';

@Component({
  selector: 'app-doctor-specialitis',
  templateUrl: './doctor-specialitis.component.html',
  styleUrls: ['./doctor-specialitis.component.css'],
})
export class DoctorSpecialitisComponent {
  public doctorspiciality!: number;
  selectedSpeciality: any;
  constructor(private specialitiesService: DoctorSpecialitiesService) {
    this.getDoctorSpecialities();
  }
  specialities!: [SpecialityResponse];
  private getDoctorSpecialities() {
    this.specialitiesService.getSpecialities().subscribe({
      next: (value) => {
        this.specialities = value.result;
      },
      error(err) {
        console.log(err?.error);
      },
    });
  }

  public getContent(e: any) {
    this.doctorspiciality = e;
    this.specialitiesService.specialityCode = e;
  }
}
