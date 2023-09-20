import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { ResetServiceService } from '../../services/forget&resetPassword/resetService/reset-service.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css'],
})
export class ResetPassComponent {
  constructor(
    private fb: FormBuilder,
    private userInfo: UserInfoService,
    private resetPass: ResetServiceService,
    private toast: ToasterInvokerService,
    private router: Router
  ) {}

  resetForm = this.fb.group({
    userId: [''],
    userPassword: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  resetPassword() {
    const UserId = this.resetForm.get('userId');
    UserId?.setValue(this.userInfo.getUserIdLocalStorage());

    this.resetPass.resetPasswordApi(this.resetForm.value).subscribe({
      next: () => {
        this.toast.successState('Your password resetted successfully');
        this.router.navigate(['pages/auth/login']);
      },
      error: () => {
        this.toast.errorState('An Error Occured please try again');
      },
    });
  }
}
