import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityDetailsComponent } from './speciality-details.component';

describe('SpecialityDetailsComponent', () => {
  let component: SpecialityDetailsComponent;
  let fixture: ComponentFixture<SpecialityDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialityDetailsComponent]
    });
    fixture = TestBed.createComponent(SpecialityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
