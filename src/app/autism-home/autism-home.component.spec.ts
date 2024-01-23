import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutismHomeComponent } from './autism-home.component';

describe('AutismHomeComponent', () => {
  let component: AutismHomeComponent;
  let fixture: ComponentFixture<AutismHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutismHomeComponent]
    });
    fixture = TestBed.createComponent(AutismHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
