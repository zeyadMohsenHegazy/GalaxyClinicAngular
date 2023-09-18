import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createtranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { SpinnerComponent } from 'src/app/shared-module/components/spinner/spinner.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    SharedModuleModule,
    TranslateModule,
    RouterModule
  ],
})
export class LoginModuleModule {}
