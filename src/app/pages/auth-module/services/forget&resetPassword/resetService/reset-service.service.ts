import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class ResetServiceService {
  private methodeName = 'Users/resetPassword';
  constructor(private apiInvoker: ApiInvokerService) {}
  resetPasswordApi(Obj: any) {
    return this.apiInvoker.sendApiResquest(this.methodeName, Obj);
  }
}
