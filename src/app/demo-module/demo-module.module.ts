import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from '../shared-module/components/spinner/spinner.component';

@NgModule({
  declarations: [DemoPageComponent],
  imports: [CommonModule, SharedModuleModule, TranslateModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class DemoModuleModule {
  
}
