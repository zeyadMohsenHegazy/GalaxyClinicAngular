import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorWithSpecialityService {
  private methodName: string = 'Doctor/GetAllDoctors';
  constructor(private invoker: ApiInvokerService) {}
  getDoctorsWithSpecialites() {
    return this.invoker.getApiResponse(this.methodName);
  }
}
