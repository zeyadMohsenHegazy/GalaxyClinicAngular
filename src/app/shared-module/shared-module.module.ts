import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DoctorSpecialitisComponent } from './components/doctor-specialitis/doctor-specialitis.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SpinnerComponent,
    DoctorSpecialitisComponent,
  ],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SpinnerComponent,
    DoctorSpecialitisComponent,
  ],
})
export class SharedModuleModule {}
