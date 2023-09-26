import { Injectable } from '@angular/core';
import { GeneralRequest } from 'src/models/generalRequest/general-request';
import { ApiInvokerService } from 'src/services/API-Invoker/api-invoker.service';
import { SpecialityRequest } from '../models/specialityRequest/speciality-request';

@Injectable({
  providedIn: 'root',
})
export class SpecialityService {
  private getOneMethodeName = 'Speciality/GetOne';
  private removeMethodName: string = 'Speciality/deleteSpeciality';
  private addSpecialityMethodeName = 'Speciality/AddSpeciality';
  private updateSpecialityMethodeName = 'Speciality/editSpeciality';

  constructor(private invoker: ApiInvokerService) {}
  removeSpeciality(request: GeneralRequest) {
    return this.invoker.sendApiResquest(this.removeMethodName, request);
  }
  getOneSpeciality(request: GeneralRequest) {
    return this.invoker.sendApiResquest(this.getOneMethodeName, request);
  }
  addSpeciality(request: SpecialityRequest) {
    return this.invoker.sendApiResquest(this.addSpecialityMethodeName, request);
  }
  updateSpeciality(request: SpecialityRequest) {
    return this.invoker.sendApiResquest(
      this.updateSpecialityMethodeName,
      request
    );
  }
}
