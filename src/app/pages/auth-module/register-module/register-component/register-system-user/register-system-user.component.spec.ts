import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSystemUserComponent } from './register-system-user.component';

describe('RegisterSystemUserComponent', () => {
  let component: RegisterSystemUserComponent;
  let fixture: ComponentFixture<RegisterSystemUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterSystemUserComponent]
    });
    fixture = TestBed.createComponent(RegisterSystemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
