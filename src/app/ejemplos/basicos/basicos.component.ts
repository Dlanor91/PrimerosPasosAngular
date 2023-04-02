import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombre? : string;
  nombreMio : string = "Ronald lima";
  correo : any = "rli@gmail.com";
  edad:number = 19;  
  fecha = new Date();
  html : string = `<strong>texto en negritas</strong>`;
  paises : Array<any>;
  ejemplo : string;
  constructor(){
    this.nombre = "Ridchel"
    this,this.paises = [
      {
        nombre: "Chile",
        dominio: "cl"
      },
      {
        nombre: "Uruguay",
        dominio: "uy"
      },
      {
        nombre: "Argentina",
        dominio: "ar"
      },
    ];
  }
}
