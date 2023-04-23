import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadopagoPendienteComponent } from './mercadopago-pendiente.component';

describe('MercadopagoPendienteComponent', () => {
  let component: MercadopagoPendienteComponent;
  let fixture: ComponentFixture<MercadopagoPendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadopagoPendienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadopagoPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
