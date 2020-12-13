import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }
  
  showSuccess(message, title, config){
      this.toastr.success(message, title,config)
  }
  
  showError(message, title, config){
      this.toastr.error(message, title, config)
  }
  
  showInfo(message, title, config){
      this.toastr.info(message, title, config)
  }
  
  showWarning(message, title, config){
      this.toastr.warning(message, title, config)
  }
}
