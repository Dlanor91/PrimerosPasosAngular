import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadopagoRespuestaComponent } from './mercadopago-respuesta.component';

describe('MercadopagoRespuestaComponent', () => {
  let component: MercadopagoRespuestaComponent;
  let fixture: ComponentFixture<MercadopagoRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadopagoRespuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadopagoRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
