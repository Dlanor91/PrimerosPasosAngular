import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadopagoErrorComponent } from './mercadopago-error.component';

describe('MercadopagoErrorComponent', () => {
  let component: MercadopagoErrorComponent;
  let fixture: ComponentFixture<MercadopagoErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadopagoErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadopagoErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
