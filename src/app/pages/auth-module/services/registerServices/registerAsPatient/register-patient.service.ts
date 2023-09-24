import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';
import { PatientUserInfo } from '../../../models/resgisterModels/registerRequest/patient-user-info';

@Injectable({
  providedIn: 'root',
})
export class RegisterPatientService {
  private methodName = 'Users/registerNewPatient';
  constructor(private apiInvoker: ApiInvokerService) {}

  registerNewPatient(Obj: PatientUserInfo) {
    return this.apiInvoker.sendApiResquest(this.methodName, Obj);
  }
}
