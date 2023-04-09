import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  constructor() { }

  getDato(){
    return "hola desde servicio"
  }

  otroMetodo(nombre:string,apellido:string){
    return `Minombre es ${nombre} y mi Apellido es ${apellido}`
  }
}

