import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formularios2',
  templateUrl: './formularios2.component.html',
  styleUrls: ['./formularios2.component.css']
})
export class Formularios2Component implements OnInit{
formulario:FormGroup;
usuario ={
  nombre:"",
  correo:"",
  direccion:"",
  telefono:"",
  pais:""
}
paises:Array<any>;

  constructor(){
    this.paises = [
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
      {
        nombre: "Cuba",
        dominio: "cu"
      },
      {
        nombre: "Puerto Rico",
        dominio: "pr"
      },
    ]; 
  }
  ngOnInit(): void {
      this.formulario = new FormGroup(
        {
          nombre: new FormControl(          
            this.usuario.nombre          
          ),
          correo: new FormControl(          
            this.usuario.correo          
          ),
          telefono: new FormControl(          
            this.usuario.telefono          
          ),
          direccion: new FormControl(          
            this.usuario.direccion          
          ),          
        }
      );
  }
}
