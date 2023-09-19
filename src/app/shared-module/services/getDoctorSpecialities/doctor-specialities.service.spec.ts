import { TestBed } from '@angular/core/testing';

import { DoctorSpecialitiesService } from './doctor-specialities.service';

describe('DoctorSpecialitiesService', () => {
  let service: DoctorSpecialitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorSpecialitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
