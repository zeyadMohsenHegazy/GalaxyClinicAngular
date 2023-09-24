import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css'],
})
export class RegisterDoctorComponent {
  @Input() registerDoctorForm!: FormGroup;

  constructor() {}
  get name() {
    return this.registerDoctorForm.get('doctorName');
  }
  get mobilNumber() {
    return this.registerDoctorForm.get('doctorMobileNumber');
  }
  get mail() {
    return this.registerDoctorForm.get('doctorEmail');
  }
}
