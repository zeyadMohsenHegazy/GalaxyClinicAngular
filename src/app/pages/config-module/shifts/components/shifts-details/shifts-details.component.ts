import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';
import { ShiftsResponse } from '../../models/shiftResponse/shifts-response';
import { ShiftsService } from '../../services/shifts.service';
import { GeneralRequest } from 'src/models/generalRequest/general-request';
import { ShiftDayResponse } from '../../models/shiftResponse/shift-day-response';
import { ShiftDayTimeResponse } from '../../models/shiftResponse/shift-day-time-response';

@Component({
  selector: 'app-shifts-details',
  templateUrl: './shifts-details.component.html',
  styleUrls: ['./shifts-details.component.css'],
})
export class ShiftsDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private toast: ToasterInvokerService,
    private userDetails: UserInfoService,
    private shiftService: ShiftsService
  ) {}
  shiftDayCode = 0;
  doctorShiftId: number = 0;
  shiftDetails: ShiftDayResponse[] = [];
  request: GeneralRequest = { Id: 0, UserId: 0 };
  ngOnInit(): void {
    this.doctorShiftId = Number(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
    this.request.Id = this.doctorShiftId;
    this.request.UserId = this.userDetails.getUserInfo()?.userId;
    this.shiftService.getOneShift(this.request).subscribe({
      next: (value) => {
        if (value.success) {
          this.shiftDetails = value.result.shiftDays;
          console.log(this.shiftDetails);
        } else {
          this.toast.errorState('something went wrong');
          this.route.navigate(['/pages/config/shifts']);
        }
      },
    });
  }
  cancelShift(id: number) {}
  selectedShiftDayCode!: number;

  showDayTimesDetails(id: number) {
    this.shiftService.dayCode = id;
    this.selectedShiftDayCode = id;
    this.shiftDayCode = id;
    console.log(this.shiftService.dayCode);
    this.getTimes();
  }
  Times: ShiftDayTimeResponse[] = [];
  getTimes() {
    this.request.Id = this.shiftDayCode;
    this.request.UserId = this.userDetails.getUserInfo()?.userId;
    this.shiftService.getAllShiftDayTimes(this.request).subscribe({
      next: (value) => {
        this.Times = value.result;
        console.log(this.Times);
      },
    });
  }
}
