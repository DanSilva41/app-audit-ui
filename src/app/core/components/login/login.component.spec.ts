import { AuthService } from './../../security/auth/auth.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowlModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Observable, defer } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        HttpModule,
        RouterTestingModule,
        GrowlModule
      ],
      providers: [AuthService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('fazerLogin', () => {
    component.fazerLogin(undefined);
    expect(component).toBeTruthy();
  });
});
