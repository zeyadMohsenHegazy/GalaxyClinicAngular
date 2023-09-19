import { TestBed } from '@angular/core/testing';

import { RegisterSystemUserService } from './register-system-user.service';

describe('RegisterSystemUserService', () => {
  let service: RegisterSystemUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterSystemUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
