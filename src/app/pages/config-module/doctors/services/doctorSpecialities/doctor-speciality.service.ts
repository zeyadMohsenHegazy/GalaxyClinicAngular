import { Injectable } from '@angular/core';
import { GeneralRequest } from 'src/models/generalRequest/general-request';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';
import { DoctorRequest } from '../../models/doctor-Request/doctor-request';

@Injectable({
  providedIn: 'root',
})
export class DoctorWithSpecialityService {
  private getMethodName: string = 'Doctor/GetAllDoctors';
  private removeMethodName: string = 'Doctor/DeleteDoctor';
  private getDocMethodName: string = 'Doctor/GetOneDoctor';
  private updateDocMethodName: string = 'Doctor/EditDoctor';
  private addDoctorMethodName: string = 'Doctor/AddDoctor';
  constructor(private invoker: ApiInvokerService) {}
  getDoctorsWithSpecialites() {
    return this.invoker.getApiResponse(this.getMethodName);
  }
  removeDoctor(request: GeneralRequest) {
    return this.invoker.sendApiResquest(this.removeMethodName, request);
  }
  getOneDoctorById(request: GeneralRequest) {
    return this.invoker.sendApiResquest(this.getDocMethodName, request);
  }
  //Doctor Request
  updateDoctor(request: DoctorRequest) {
    return this.invoker.sendApiResquest(this.updateDocMethodName, request);
  }
  addDoctor(request: DoctorRequest) {
    return this.invoker.sendApiResquest(this.addDoctorMethodName, request);
  }
}
