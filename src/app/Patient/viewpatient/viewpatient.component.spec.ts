import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatientComponent } from './viewpatient.component';

describe('ViewpatientComponent', () => {
  let component: ViewpatientComponent;
  let fixture: ComponentFixture<ViewpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewpatientComponent]
    });
    fixture = TestBed.createComponent(ViewpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
