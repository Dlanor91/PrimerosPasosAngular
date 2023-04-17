import { Component, OnInit } from '@angular/core';
import { CategoriasResponse } from 'src/app/Interfaces/categorias_response';
import { ApiRestService } from 'src/app/servicios/api-rest.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-rest-categorias',
  templateUrl: './api-rest-categorias.component.html',
  styleUrls: ['./api-rest-categorias.component.css']
})
export class ApiRestCategoriasComponent implements OnInit{
  datos:Array<CategoriasResponse>;
  largo:any;

  constructor(private servicio: ApiRestService,private router:Router){  

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
          this.largo = Object.keys(this.datos).length;
        },
        error:error=>{
          console.log(error);
        }
      }
    );
  }

  eliminar(id:any)
  {
    swal.fire({
      title: 'Realmente desea eliminar este registro?',      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'SI'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.deleteCategorias(id).subscribe({
          next: data =>{
            if(data.estado == 'ok'){
              swal.fire({
                icon:'success',
                timer:3000,
                title:'OK',
                text:'Se elimino el registro correctamente.'
              });              
            }else{
              swal.fire({
                icon:'error',
                timer:3000,
                title:'Ups!',
                text:'No es posible eliminar el registro.'
              });
            }
            this.router.navigate(['api/categorias']).then(()=>{
              window.location.reload();
            });
          },
          error:error=>
          {
            console.error('ERROR',error);
          }
        })
      }
    })
  }

}
