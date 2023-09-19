import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterSystemUserService {
  private methodName = 'Users/registerNewPatient';

  constructor(private apiInvoker: ApiInvokerService) {}

  registerNewSystemUser(Obj: any) {
    return this.apiInvoker.sendApiResquest(this.methodName, Obj);
  }
}
