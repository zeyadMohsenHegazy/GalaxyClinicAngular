import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class ShiftsService {
  private getAllDoctorsShifts: string = 'doctorShifts/getAllShifts';
  constructor(private invoker: ApiInvokerService) {}
  getAllShifts() {
    return this.invoker.sendApiResquest(this.getAllDoctorsShifts, {});
  }
}
