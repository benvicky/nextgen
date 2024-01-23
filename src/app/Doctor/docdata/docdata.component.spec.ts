import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdataComponent } from './docdata.component';

describe('DocdataComponent', () => {
  let component: DocdataComponent;
  let fixture: ComponentFixture<DocdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocdataComponent]
    });
    fixture = TestBed.createComponent(DocdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
