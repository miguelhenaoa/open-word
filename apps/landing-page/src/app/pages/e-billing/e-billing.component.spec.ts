import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBillingComponent } from './e-billing.component';

describe('EBillingComponent', () => {
  let component: EBillingComponent;
  let fixture: ComponentFixture<EBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EBillingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
