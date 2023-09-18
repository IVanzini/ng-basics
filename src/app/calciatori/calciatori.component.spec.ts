import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciatoriComponent } from './calciatori.component';

describe('CalciatoriComponent', () => {
  let component: CalciatoriComponent;
  let fixture: ComponentFixture<CalciatoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalciatoriComponent]
    });
    fixture = TestBed.createComponent(CalciatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
