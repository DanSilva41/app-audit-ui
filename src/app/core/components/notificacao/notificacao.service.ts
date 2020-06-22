import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Subject } from 'rxjs';

type Severities = 'success' | 'info' | 'warn' | 'error';

@Injectable()
export class NotificacaoService {

  constructor(private messageService: MessageService) {}

  notificationChange: Subject<Object> = new Subject<Object>();

  notify(severity: Severities, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }

}
