import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';

@Injectable({
  providedIn: 'root',
})
export class DemoServiceService {
  constructor(private invoker: ApiInvokerService, private http: HttpClient) {}

  //How to use the service invoker
  public func(Obj: Object) {
    return this.invoker.sendApiResquest('test/testApi', Obj);
  }

  private LoginUrl = 'http://localhost:40102/test/testApi';
  sumbit(Obj: any) {
    return this.http.post<any>(`${this.LoginUrl}`, Obj);
  }
}
