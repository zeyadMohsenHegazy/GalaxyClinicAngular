import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { demoGuardGuard } from './demo-guard.guard';

describe('demoGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => demoGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
