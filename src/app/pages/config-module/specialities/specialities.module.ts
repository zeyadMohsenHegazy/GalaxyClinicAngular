import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { SpecialityDetailsComponent } from './speciality-details/speciality-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SpecialityListComponent, SpecialityDetailsComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModuleModule,
    RouterModule,
  ],
  providers: [SpecialityListComponent],
})
export class SpecialitiesModule {}
