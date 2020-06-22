import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import Swal from 'sweetalert2';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });

  it('deve notificar erro', () => {
    const fireSpy = spyOn(Swal, 'fire').and.stub();
    MessageService.notificarError('erro teste');
    expect(fireSpy).toHaveBeenCalledWith({
      type: 'error',
      title: 'Oops...',
      text: 'erro teste'
    });
  });

  it('deve notificar sucesso', () => {
    const spy = spyOn(Swal, 'fire').and.stub();
    MessageService.notificarSucesso('mensagem de sucesso');
    expect(spy).toHaveBeenCalledWith({
      position: 'center',
      type: 'success',
      title: 'mensagem de sucesso',
      showConfirmButton: false,
      timer: 1500
    });
  });

  it('deve notificar info com redirecionamento', () => {
    const spy = spyOn(Swal, 'fire').and.returnValue(
      new Promise(function(resolve, reject) {
        resolve({ value: true });
      })
    );
    MessageService.noticarInfoComRedirecionamento(
      'mensagem de sucesso',
      'mensagem',
      () => {}
    );
    expect(spy).toHaveBeenCalled();
  });
});
