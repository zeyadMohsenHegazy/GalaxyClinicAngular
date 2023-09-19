import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterPatientService {
  private methodName = 'Users/registerNewPatient';
  constructor(private apiInvoker: ApiInvokerService) {}

  registerNewPatient(Obj: any) {
    return this.apiInvoker.sendApiResquest(this.methodName, Obj);
  }
}
