import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';
import { ShiftsService } from '../../services/shifts.service';
import { GeneralRequest } from 'src/models/generalRequest/general-request';
import { ShiftDayTimeResponse } from '../../models/shiftResponse/shift-day-time-response';

@Component({
  selector: 'app-shift-times-details',
  templateUrl: './shift-times-details.component.html',
  styleUrls: ['./shift-times-details.component.css'],
})
export class ShiftTimesDetailsComponent {
  @Input() shiftDayCode: number = 0;
  @Input() times: ShiftDayTimeResponse[] = [];
  constructor() {}
}
