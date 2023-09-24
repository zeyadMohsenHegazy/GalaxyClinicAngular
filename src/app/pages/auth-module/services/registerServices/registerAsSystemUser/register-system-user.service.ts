import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';
import { SystemUserInfo } from '../../../models/resgisterModels/registerRequest/system-user-info';

@Injectable({
  providedIn: 'root',
})
export class RegisterSystemUserService {
  private methodName = 'Users/registerNewPatient';

  constructor(private apiInvoker: ApiInvokerService) {}

  registerNewSystemUser(Obj: SystemUserInfo) {
    return this.apiInvoker.sendApiResquest(this.methodName, Obj);
  }
}
