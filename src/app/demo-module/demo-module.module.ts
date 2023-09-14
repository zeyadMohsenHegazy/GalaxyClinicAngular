import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [DemoPageComponent],
  imports: [CommonModule, SharedModuleModule, TranslateModule],
})
export class DemoModuleModule {
  
}
