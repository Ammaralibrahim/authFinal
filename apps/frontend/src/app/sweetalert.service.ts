// sweetalert.service.ts

import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  showSuccess(message: string) {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: message
    });
  }

  showError(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: message
    });
  }

}
