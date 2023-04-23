import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MercadoPagoRequest } from '../Interfaces/mercado_pago_request';
import { Observable } from 'rxjs';
import { MercadoPagoRespuesta } from '../Interfaces/mercado_pago_respuesta';
@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {
  api:string;
  constructor(private http: HttpClient) { 
    this.api = environment.api;
  }

  mercadopagoCrearOrden(modelo:MercadoPagoRequest): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(`${this.api}mercado-pago`,modelo,{headers:headers});
  }

  mercadopagoRespuestaOrden(modelo:MercadoPagoRespuesta): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(`${this.api}mercado-pago-respuesta`,modelo,{headers:headers});
  }
}
