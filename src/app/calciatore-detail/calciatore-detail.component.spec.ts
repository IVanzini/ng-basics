import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciatoreDetailComponent } from './calciatore-detail.component';

describe('CalciatoreDetailComponent', () => {
  let component: CalciatoreDetailComponent;
  let fixture: ComponentFixture<CalciatoreDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalciatoreDetailComponent]
    });
    fixture = TestBed.createComponent(CalciatoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
