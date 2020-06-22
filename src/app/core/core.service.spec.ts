import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { AuthService } from './security/auth/auth.service';
import { CoreService } from './core.service';


describe('ComumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreService, AuthService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([CoreService], (service: CoreService) => {
    expect(service).toBeTruthy();
  }));
});
