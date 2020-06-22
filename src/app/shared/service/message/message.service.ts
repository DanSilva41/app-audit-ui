import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {}

  static notificarError(msg: string) {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: msg
    });
  }

  static notificarSucesso(msg: string) {
    Swal.fire({
      position: 'center',
      type: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    });
  }

  static noticarInfoComRedirecionamento(
    titulo: string,
    mensagem: string,
    onClose
  ) {
    Swal.fire({
      title: titulo,
      type: 'warning',
      html: mensagem,
      timer: 5000,
      onBeforeOpen: () => {
        Swal.showLoading();
        setInterval(() => {
          Swal.getContent().querySelector('strong').textContent = (
            Swal.getTimerLeft() / 1000
          )
            .toFixed(0)
            .toString();
        }, 100);
      },
      onClose: () => {
        onClose();
      }
    }).then(result => {
      onClose();
    });
  }
}
