import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpatientformComponent } from './newpatientform.component';

describe('NewpatientformComponent', () => {
  let component: NewpatientformComponent;
  let fixture: ComponentFixture<NewpatientformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewpatientformComponent]
    });
    fixture = TestBed.createComponent(NewpatientformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
