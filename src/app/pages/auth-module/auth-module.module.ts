import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createtranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { LoginModuleModule } from './login-module/login-module.module';
import { RegisterModuleModule } from './register-module/register-module.module';
import { DoctorSpecialitisComponent } from 'src/app/shared-module/components/doctor-specialitis/doctor-specialitis.component';
import { ForgetPassComponent } from './forget-password/forget-pass/forget-pass.component';
import { ForgetPasswordModule } from './forget-password/forget-password.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createtranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    ForgetPasswordModule,
    LoginModuleModule,
    RegisterModuleModule,
  ],
  providers: [DoctorSpecialitisComponent],
})
export class AuthModuleModule {}
