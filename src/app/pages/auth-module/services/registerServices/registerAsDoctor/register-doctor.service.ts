import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';
import { DoctorUserInfo } from '../../../models/resgisterModels/registerRequest/doctor-user-info';

@Injectable({
  providedIn: 'root',
})
export class RegisterDoctorService {
  private methodName = 'Users/registerNewDoctor';
  constructor(private apiInvoker: ApiInvokerService) {}

  registerNewDoctor(Obj: DoctorUserInfo) {
    return this.apiInvoker.sendApiResquest(this.methodName, Obj);
  }
}
