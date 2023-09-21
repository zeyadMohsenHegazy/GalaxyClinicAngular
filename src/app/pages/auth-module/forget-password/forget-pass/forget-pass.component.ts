import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForgetServiceService } from '../../services/forget&resetPassword/forgetService/forget-service.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css'],
})
export class ForgetPassComponent {
  //I will request with userTypeId and mobile number or email
  constructor(
    private fb: FormBuilder,
    private forgetApi: ForgetServiceService,
    private toast: ToasterInvokerService,
    private router: Router,
    private userInfo: UserInfoService
  ) {}
  forgetForm = this.fb.group({
    userTypeName: ['', [Validators.required]],
    userEmailOrMobile: ['', [Validators.required]],
  });

  forgetPassword() {
    this.forgetApi.forgetPasswordApi(this.forgetForm.value).subscribe({
      next: (value) => {
        if (value.success) {
          this.toast.infoState('Now time to reset the password');
          this.userInfo.setForgetPassCode(value.result.userId);
          this.router.navigate(['pages/auth/resetPassword']);
        } else {
          this.toast.warrningState(
            "You don't have account .. You can register now"
          );
          this.router.navigate(['pages/auth/register']);
        }
      },
      error: (err) => {
        this.toast.errorState('error ocured pleas try again');
      },
    });
  }
}
