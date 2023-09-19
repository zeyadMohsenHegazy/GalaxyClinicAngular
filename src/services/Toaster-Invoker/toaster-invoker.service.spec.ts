import { TestBed } from '@angular/core/testing';

import { ToasterInvokerService } from './toaster-invoker.service';

describe('ToasterInvokerService', () => {
  let service: ToasterInvokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasterInvokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
