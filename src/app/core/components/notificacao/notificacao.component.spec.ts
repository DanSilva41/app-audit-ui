import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowlModule, MessageService } from 'primeng/primeng';
import { NotificacaoComponent } from './notificacao.component';
import { NotificacaoService } from './notificacao.service';


describe('NotificacaoComponent', () => {
  let component: NotificacaoComponent;
  let fixture: ComponentFixture<NotificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacaoComponent ],
      imports: [GrowlModule],
      providers: [NotificacaoService, MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
