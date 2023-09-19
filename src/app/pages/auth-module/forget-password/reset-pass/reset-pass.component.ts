import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css'],
})
export class ResetPassComponent {
  constructor(private fb: FormBuilder) {}

  resetForm = this.fb.group({
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });
}
