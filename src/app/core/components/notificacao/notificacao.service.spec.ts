import { inject, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/primeng';
import { NotificacaoService } from './notificacao.service';


describe('NotificacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificacaoService, MessageService]
    });
  });

  it('should be created', inject([NotificacaoService], (service: NotificacaoService) => {
    expect(service).toBeTruthy();
  }));
});
