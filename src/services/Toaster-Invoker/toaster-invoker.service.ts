import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterInvokerService {
  constructor(private toast: ToastrService) {}

  public successState(message: string, title?: string) {
    this.toast.success(message, title);
  }

  public errorState(message: string, title?: string) {
    this.toast.error(message, title);
  }

  public warrningState(message: string, title?: string) {
    this.toast.warning(message, title);
  }

  public infoState(message: string, title?: string) {
    this.toast.info(message, title);
  }
}
