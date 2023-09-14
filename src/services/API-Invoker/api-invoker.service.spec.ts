import { TestBed } from '@angular/core/testing';

import { ApiInvokerService } from './api-invoker.service';

describe('ApiInvokerService', () => {
  let service: ApiInvokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInvokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
