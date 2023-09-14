import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class DemoServiceService {
  constructor(private invoker: ApiInvokerService) {}

  //How to use the service invoker
  public func() {
    this.invoker.sendApiResquest('users/getUser', Object);
  }
}
