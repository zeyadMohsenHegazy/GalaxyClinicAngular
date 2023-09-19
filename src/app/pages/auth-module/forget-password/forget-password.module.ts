import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ForgetPassComponent, ResetPassComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class ForgetPasswordModule {}
