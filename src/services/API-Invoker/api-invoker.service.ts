import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from 'src/models/baseResponse/base-response';

@Injectable({
  providedIn: 'root',
})
export class ApiInvokerService {
  private apiBaseUrl = '';
  constructor(private http: HttpClient) {}

  //base Request
  //base Response
  //to send request to the api
  public sendApiResquest(methodName: string, RequestObj: any) {
    this.http.post<any>(`${this.apiBaseUrl}${methodName}`, RequestObj);
    //return BaseResponse
    return null;
  }
}
