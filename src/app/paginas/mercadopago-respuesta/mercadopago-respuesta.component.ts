import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MercadoPagoRespuesta } from 'src/app/Interfaces/mercado_pago_respuesta';
import { MercadoPagoService } from 'src/app/servicios/mercado-pago.service';

@Component({
  selector: 'app-mercadopago-respuesta',
  templateUrl: './mercadopago-respuesta.component.html',
  styleUrls: ['./mercadopago-respuesta.component.css']
})
export class MercadopagoRespuestaComponent implements OnInit{
  modelo: MercadoPagoRespuesta;
  preference_id: string;
  estado: string;
  constructor(private mercadoPagoService: MercadoPagoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let params: any = this.route.snapshot.queryParams;
    this.preference_id = params.preference_id;
    this.modelo = {
      "preference_id": params.preference_id,
      "collection_id": params.collection_id,
      "collection_status": params.collection_status,
      "payment_id": params.payment_id,
      "status": params.status,
      "external_reference": params.external_reference,
      "payment_type": params.payment_type,
      "merchant_order_id": params.merchant_order_id,
      "site_id": params.site_id,
      "processing_mode": params.processing_mode,
      "merchant_account_id": params.merchant_account_id
    };
    this.hacerPeticion(this.modelo);
  }
  hacerPeticion(modelo: MercadoPagoRespuesta)
  {
    /*
    http://192.168.1.88:8080/mercado-pago-respuesta?collection_id=1311316335&collection_status=approved&payment_id=1311316335&status=approved&external_reference=null&payment_type=credit_card&merchant_order_id=6808708743&preference_id=1249226080-5dbf93e4-b5da-43b5-b792-c66b96e16686&site_id=MLC&processing_mode=aggregator&merchant_account_id=null
    */
    this.mercadoPagoService.mercadopagoRespuestaOrden(modelo).subscribe(
      {
        next:data=>
        {
          this.estado = data.estado;
        },
        error:error=>
        {

        }
      });
  }
}
