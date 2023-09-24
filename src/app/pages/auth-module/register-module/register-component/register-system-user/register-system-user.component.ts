import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-system-user',
  templateUrl: './register-system-user.component.html',
  styleUrls: ['./register-system-user.component.css'],
})
export class RegisterSystemUserComponent {
  @Input() registerSystemUserForm!: FormGroup;
  get name() {
    return this.registerSystemUserForm.get('systemUserName');
  }
  get mobilNumber() {
    return this.registerSystemUserForm.get('systemUserMobileNumber');
  }
  get mail() {
    return this.registerSystemUserForm.get('systemUserEmail');
  }
}
