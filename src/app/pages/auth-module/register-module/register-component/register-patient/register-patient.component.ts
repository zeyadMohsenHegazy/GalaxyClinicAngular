import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css'],
})
export class RegisterPatientComponent {
  @Input() registerPatientForm!: FormGroup;
  get name() {
    return this.registerPatientForm.get('pateintName');
  }
  get mobilNumber() {
    return this.registerPatientForm.get('patientMobileNumber');
  }
  get mail() {
    return this.registerPatientForm.get('patientEmail');
  }
  get dateOfBirth() {
    return this.registerPatientForm.get('patientDateOfBirth');
  }
}
