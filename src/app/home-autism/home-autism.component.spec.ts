import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAutismComponent } from './home-autism.component';

describe('HomeAutismComponent', () => {
  let component: HomeAutismComponent;
  let fixture: ComponentFixture<HomeAutismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAutismComponent]
    });
    fixture = TestBed.createComponent(HomeAutismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
