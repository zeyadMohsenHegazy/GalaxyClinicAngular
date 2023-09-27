import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsDetailsComponent } from './shifts-details.component';

describe('ShiftsDetailsComponent', () => {
  let component: ShiftsDetailsComponent;
  let fixture: ComponentFixture<ShiftsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftsDetailsComponent]
    });
    fixture = TestBed.createComponent(ShiftsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
