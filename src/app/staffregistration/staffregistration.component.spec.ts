import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffregistrationComponent } from './staffregistration.component';

describe('StaffregistrationComponent', () => {
  let component: StaffregistrationComponent;
  let fixture: ComponentFixture<StaffregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffregistrationComponent]
    });
    fixture = TestBed.createComponent(StaffregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
