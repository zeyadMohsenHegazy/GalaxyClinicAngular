import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DemoServiceService } from '../services/demo-service.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css'],
})
export class DemoPageComponent {
  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private testApi: DemoServiceService,
    private toast: ToasterInvokerService
  ) {}

  testForm = this.fb.group({
    userName: ['', Validators.required],
    userEmail: ['', Validators.required],
  });

  sumbiteForm() {
    this.testApi.func(this.testForm.value).subscribe({
      next: (value) => {
        this.toast.successState(value.message);
      },
      error: (err) => {
        this.toast.errorState(err?.error);
      },
    });
    this.resetForm();
  }

  resetForm() {
    this.testForm.reset();
  }
}
