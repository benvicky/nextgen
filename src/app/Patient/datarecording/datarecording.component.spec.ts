import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatarecordingComponent } from './datarecording.component';

describe('DatarecordingComponent', () => {
  let component: DatarecordingComponent;
  let fixture: ComponentFixture<DatarecordingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatarecordingComponent]
    });
    fixture = TestBed.createComponent(DatarecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
