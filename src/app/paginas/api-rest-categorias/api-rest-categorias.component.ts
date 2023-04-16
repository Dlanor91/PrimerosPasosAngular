import { Component, OnInit } from '@angular/core';
import { CategoriasResponse } from 'src/app/Interfaces/categorias_response';
import { ApiRestService } from 'src/app/servicios/api-rest.service';

@Component({
  selector: 'app-api-rest-categorias',
  templateUrl: './api-rest-categorias.component.html',
  styleUrls: ['./api-rest-categorias.component.css']
})
export class ApiRestCategoriasComponent implements OnInit{
  datos:Array<CategoriasResponse>;
  constructor(private servicio: ApiRestService){  

  }
  ngOnInit(): void {
    this.getDatosCategorias();
  }

  getDatosCategorias()
  {
    this.servicio.getCategorias().subscribe(
      {
        next:data => {
          this.datos = data
        },
        error:error=>{
          console.log(error);
        }
      }
    );
  }

}
