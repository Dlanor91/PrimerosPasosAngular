import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasRequest } from 'src/app/Interfaces/categorias_request';
import { ApiRestService } from 'src/app/servicios/api-rest.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-api-rest-categorias-edit',
  templateUrl: './api-rest-categorias-edit.component.html',
  styleUrls: ['./api-rest-categorias-edit.component.css']
})
export class ApiRestCategoriasEditComponent implements OnInit{
  
  datos:any={};
  id:string;

  formulario!: FormGroup;

  form = {
    nombre:''
  };

  constructor(private servicio:ApiRestService,private router:Router, private route:ActivatedRoute){};
  
  ngOnInit(): void {   
    let params:any=this.route.snapshot.params;
    this.id = params.id;
    this.hacerPeticion(this.id);

    this.formulario = new FormGroup({

      nombre: new FormControl(
        this.form.nombre,
        [
          Validators.required,
          Validators.minLength(4)
        ]
      )
    });
  }

  get nombre() {return this.formulario.get('nombre')!;}

  hacerPeticion(id:any){
    this.servicio.getCategoriasPorId(id).subscribe({
      next:data =>{
        this.datos = data;
        this.formulario.get('nombre')?.setValue(this.datos.nombre);
      },
      error:error =>{
        this.router.navigate(['/error']).then(()=> {
          window.location.reload();
         });
       }
       
      });
  };

  enviar(){
    let modelo : CategoriasRequest = {nombre: this.formulario.value.nombre};
    this.servicio.editCategorias(modelo,this.id).subscribe({
      next:data =>{
        swal.fire({
          icon:'success',
          timer:2000,
          title:'OK',
          text:'Se creo el registro exitosamente.'
         });
         this.router.navigate(['api/categorias']);
      },
      error:error =>{
       swal.fire({
        icon:'error',
        title:'Ops...',
        text:'Se produjo un error.'
       });
       this.router.navigate(['api/categorias/add']).then(()=> {
        window.location.reload();
       });
      }
    })
  }

}
