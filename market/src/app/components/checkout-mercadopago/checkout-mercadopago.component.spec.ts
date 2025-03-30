import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutMercadopagoComponent } from './checkout-mercadopago.component';

describe('CheckoutMercadopagoComponent', () => {
  let component: CheckoutMercadopagoComponent;
  let fixture: ComponentFixture<CheckoutMercadopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutMercadopagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutMercadopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
