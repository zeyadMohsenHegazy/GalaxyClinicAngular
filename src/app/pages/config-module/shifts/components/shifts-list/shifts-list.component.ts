import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/shared-module/services/currentUserInfo/user-info.service';
import { ToasterInvokerService } from 'src/services/Toaster-Invoker/toaster-invoker.service';
import { ShiftsResponse } from '../../models/shiftResponse/shifts-response';
import { ShiftsService } from '../../services/shifts.service';

@Component({
  selector: 'app-shifts-list',
  templateUrl: './shifts-list.component.html',
  styleUrls: ['./shifts-list.component.css'],
})
export class ShiftsListComponent implements OnInit {
  constructor(
    private toast: ToasterInvokerService,
    private route: Router,
    private userInfo: UserInfoService,
    private shiftService: ShiftsService
  ) {}
  shiftsList: ShiftsResponse[] = [];
  allShifts: number = 0;
  pagination: number = 1;
  ngOnInit(): void {
    this.fetchAllDoctorsWithShifts();
    console.log(this.shiftsList);
  }
  fetchAllDoctorsWithShifts() {
    this.shiftService.getAllShifts().subscribe({
      next: (value) => {
        this.shiftsList = value.result;
        this.allShifts = this.shiftsList.length;
      },
      error: () => {
        this.toast.errorState('something went wrong');
      },
    });
  }
  renderPage(event: number) {
    this.pagination = event;
    this.fetchAllDoctorsWithShifts();
  }
}
