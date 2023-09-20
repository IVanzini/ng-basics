import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciatorePreviewComponent } from './calciatore-preview.component';

describe('CalciatorePreviewComponent', () => {
  let component: CalciatorePreviewComponent;
  let fixture: ComponentFixture<CalciatorePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalciatorePreviewComponent]
    });
    fixture = TestBed.createComponent(CalciatorePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
