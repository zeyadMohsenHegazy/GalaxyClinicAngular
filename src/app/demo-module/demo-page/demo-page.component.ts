import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DemoServiceService } from '../services/demo-service.service';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css'],
})
export class DemoPageComponent {
  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private testApi: DemoServiceService
  ) {}

  testForm = this.fb.group({
    userName: ['', Validators.required],
    userEmail: ['', Validators.required],
  });

  sumbiteForm() {
    // this.testApi.func(this.testForm.value);
    this.testApi.func(this.testForm.value).subscribe({
      next(value) {
        alert(value.message);
      },
      error(err) {
        console.log(err?.error);
      },
    });
    this.resetForm();
  }

  resetForm() {
    this.testForm.reset();
  }
}
