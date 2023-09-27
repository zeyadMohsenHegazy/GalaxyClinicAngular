import { Injectable } from '@angular/core';
import { GeneralRequest } from 'src/models/generalRequest/general-request';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class ShiftsService {
  private getAllDoctorsShifts: string = 'doctorShifts/getAllShifts';
  private getOneDoctorShift: string = 'doctorShifts/getOneShiftById';
  private getShiftDayTimes: string = 'doctorShifts/getShiftDayTimes';
  public dayCode!: number;

  constructor(private invoker: ApiInvokerService) {}
  getAllShifts() {
    return this.invoker.sendApiResquest(this.getAllDoctorsShifts, {});
  }
  getOneShift(request: GeneralRequest) {
    return this.invoker.sendApiResquest(this.getOneDoctorShift, request);
  }
  getAllShiftDayTimes(request: GeneralRequest) {
    return this.invoker.sendApiResquest(this.getShiftDayTimes, request);
  }
}
