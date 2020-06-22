import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Subscription } from 'rxjs';
import { NotificacaoService } from './notificacao.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit, OnDestroy {
  msgs: Message[] = [];
  subscription: Subscription;

  constructor(private notificationsService: NotificacaoService) {}

  ngOnInit() {
    this.subscribeToNotifications();
  }

  subscribeToNotifications() {
    this.subscription = this.notificationsService.notificationChange.subscribe(
      notification => {
        this.msgs.length = 0;
        this.msgs.push(notification);
        setTimeout(() => {
          this.msgs.splice(this.msgs.indexOf(notification), 1);
        }, 6000);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
