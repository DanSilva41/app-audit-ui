/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, AuthService],
      imports: [MatDialogModule]
    });
  });

  it('should ...', inject([AuthGuard, AuthService], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
