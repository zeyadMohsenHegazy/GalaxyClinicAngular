import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsListComponent } from './shifts-list.component';

describe('ShiftsListComponent', () => {
  let component: ShiftsListComponent;
  let fixture: ComponentFixture<ShiftsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftsListComponent]
    });
    fixture = TestBed.createComponent(ShiftsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
