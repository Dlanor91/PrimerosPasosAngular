import { Component, OnInit } from '@angular/core';
import { EjemploService } from 'src/app/servicios/ejemplo.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{

  texto:string;
  texto2:string;
  constructor(private ejemploService: EjemploService){

  }
  ngOnInit(): void {
    this.texto = this.ejemploService.getDato();
    this.texto2 = this.ejemploService.otroMetodo("Ronald","lima");
  }
}
