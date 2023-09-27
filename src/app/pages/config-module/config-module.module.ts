import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigRoutingModule } from './config-routing.module';
import { FormsModule } from '@angular/forms';
import { ShiftsModule } from './shifts/shifts.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ConfigRoutingModule, FormsModule, ShiftsModule],
})
export class ConfigModuleModule {}
