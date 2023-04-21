import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FotosResponse } from 'src/app/Interfaces/fotos_response';
import { ApiRestService } from 'src/app/servicios/api-rest.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-api-rest-productos-fotos',
  templateUrl: './api-rest-productos-fotos.component.html',
  styleUrls: ['./api-rest-productos-fotos.component.css']
})
export class ApiRestProductosFotosComponent implements OnInit{
  id : string;
  datos : any={};
  fotos:Array<FotosResponse>

  constructor(private servicio:ApiRestService,private router:Router, private route : ActivatedRoute){}

  ngOnInit(): void {
    let params : any = this.route.snapshot.params;
    this.id = params.id;
    this.getProducto(this.id);
    this.getFotos(this.id);
  }

  getProducto(id:any){
    this.servicio.getProductosPorId(id).subscribe({
      next:data =>{
        this.datos = data;
      },
      error:error=>{        
        this.router.navigate(['/error']).then(()=> {
          window.location.reload();
         });
      }
    });
  }

  getFotos(id:any){
    this.servicio.getProductosFotos(id).subscribe({
      next:data =>{
        this.fotos = data;
      },
      error:error=>{
        console.error('Error',error)
      }
    });
  }

}
