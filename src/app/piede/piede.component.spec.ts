import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedeComponent } from './piede.component';

describe('PiedeComponent', () => {
  let component: PiedeComponent;
  let fixture: ComponentFixture<PiedeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiedeComponent]
    });
    fixture = TestBed.createComponent(PiedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
