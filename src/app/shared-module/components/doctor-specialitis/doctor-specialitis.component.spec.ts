import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSpecialitisComponent } from './doctor-specialitis.component';

describe('DoctorSpecialitisComponent', () => {
  let component: DoctorSpecialitisComponent;
  let fixture: ComponentFixture<DoctorSpecialitisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorSpecialitisComponent]
    });
    fixture = TestBed.createComponent(DoctorSpecialitisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
