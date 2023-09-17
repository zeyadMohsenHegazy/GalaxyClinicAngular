import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from 'src/models/baseResponse/base-response';
import { LoaderService } from '../Loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class ApiInvokerService {
  private apiBaseUrl = 'http://localhost:40102/';
  constructor(private http: HttpClient, private loader: LoaderService) {}

  //base Request
  //base Response
  //to send request to the api
  public sendApiResquest(methodName: string, RequestObj: any) {
    return this.http.post<any>(`${this.apiBaseUrl}${methodName}`, RequestObj);
    //return BaseResponse
  }
}
