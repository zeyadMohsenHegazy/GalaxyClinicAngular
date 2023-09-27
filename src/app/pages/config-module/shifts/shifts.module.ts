import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftsListComponent } from './components/shifts-list/shifts-list.component';
import { ShiftsDetailsComponent } from './components/shifts-details/shifts-details.component';
import { ShiftTimesDetailsComponent } from './components/shift-times-details/shift-times-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShiftsListComponent,
    ShiftsDetailsComponent,
    ShiftTimesDetailsComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class ShiftsModule {}
