import { Component,OnInit,ElementRef } from '@angular/core';
import { MercadoPagoRequest } from 'src/app/Interfaces/mercado_pago_request';
import { MercadoPagoService } from 'src/app/servicios/mercado-pago.service';

@Component({
  selector: 'app-mercadopago',
  templateUrl: './mercadopago.component.html',
  styleUrls: ['./mercadopago.component.css']
})
export class MercadopagoComponent implements OnInit{
  orden:string;
  url:string;
  modelo:MercadoPagoRequest=
  {
    amount: 100
  };
  constructor
  (
    private mercadoPagoService: MercadoPagoService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.hacerPeticion(this.modelo);
  }
  hacerPeticion(modelo: MercadoPagoRequest)
  {
    this.mercadoPagoService.mercadopagoCrearOrden(modelo).subscribe(
      {
        next:data=>
        {
          this.orden = data.id
          //crear elementos automaticos
          var s = document.createElement("script");
          s.type="text/javascript";
          s.src ="https://www.mercadopago.com.uy/integrations/v1/web-payment-checkout.js";
          s.setAttribute('data-preference-id', data.id);
          this.elementRef.nativeElement.appendChild(s);
        },
        error:error=>
        {

        }
      });
  }
}
