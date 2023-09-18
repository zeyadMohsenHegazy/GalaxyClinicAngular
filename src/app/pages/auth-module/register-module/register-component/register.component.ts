import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}
  registerForm = this.fb.group({
    name: ['Ahmed', [Validators.required]],
    userName: ['Ahmed24', [Validators.required]],
    email: ['Ahmed24@gmail.com', [Validators.required]],
    mobileNuber: ['01011583454', [Validators.required]],
    password: ['', [Validators.required]],
    userTypeId: [''],
  });

  Register() {}
}
