import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorSpecialitiesService {
  //get doctors specialites
  private methodName = 'Speciality/GetAllSpecialities';
  public specialityCode: number = 0;
  constructor(private apiInvoker: ApiInvokerService) {}
  getSpecialities() {
    return this.apiInvoker.getApiResponse(this.methodName);
  }
}
