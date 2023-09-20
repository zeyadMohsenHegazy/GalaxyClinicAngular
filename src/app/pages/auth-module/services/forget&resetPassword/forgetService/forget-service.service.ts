import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class ForgetServiceService {
  private methodeName = 'Users/forgetPassword';
  constructor(private apiInvoker: ApiInvokerService) {}
  forgetPasswordApi(Obj : any) {
    return this.apiInvoker.sendApiResquest(this.methodeName, Obj);
  }
}
