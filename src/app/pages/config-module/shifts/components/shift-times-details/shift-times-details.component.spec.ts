import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftTimesDetailsComponent } from './shift-times-details.component';

describe('ShiftTimesDetailsComponent', () => {
  let component: ShiftTimesDetailsComponent;
  let fixture: ComponentFixture<ShiftTimesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftTimesDetailsComponent]
    });
    fixture = TestBed.createComponent(ShiftTimesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
