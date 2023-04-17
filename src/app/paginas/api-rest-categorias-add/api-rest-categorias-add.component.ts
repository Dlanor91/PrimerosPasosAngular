import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriasRequest } from 'src/app/Interfaces/categorias_request';
import { ApiRestService } from 'src/app/servicios/api-rest.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-api-rest-categorias-add',
  templateUrl: './api-rest-categorias-add.component.html',
  styleUrls: ['./api-rest-categorias-add.component.css']
})
export class ApiRestCategoriasAddComponent implements OnInit{

  formulario!: FormGroup;

  form = {
    nombre:''
  };

  constructor(private servicio:ApiRestService,private router:Router){};
  
  ngOnInit(): void {   
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

  enviar(){
    let modelo : CategoriasRequest = {nombre: this.formulario.value.nombre};
    this.servicio.addCategorias(modelo).subscribe({
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
