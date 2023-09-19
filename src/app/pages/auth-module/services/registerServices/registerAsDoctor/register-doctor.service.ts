import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterDoctorService {
  private methodName = 'Users/registerNewDoctor';
  constructor(private apiInvoker: ApiInvokerService) {}

  registerNewDoctor(Obj: any) {
    return this.apiInvoker.sendApiResquest(this.methodName, Obj);
  }
}
