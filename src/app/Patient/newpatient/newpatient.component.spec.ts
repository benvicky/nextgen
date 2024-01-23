import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpatientComponent } from './newpatient.component';

describe('NewpatientComponent', () => {
  let component: NewpatientComponent;
  let fixture: ComponentFixture<NewpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewpatientComponent]
    });
    fixture = TestBed.createComponent(NewpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
