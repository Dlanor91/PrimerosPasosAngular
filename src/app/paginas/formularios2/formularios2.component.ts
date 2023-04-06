import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
            this.usuario.nombre,
            [
              Validators.required,
              Validators.minLength(4)
            ]          
          ),
          correo: new FormControl(          
            this.usuario.correo,
            [
              Validators.required,
              Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
            ]          
          ),
          telefono: new FormControl(          
            this.usuario.telefono,
            [
              Validators.required,
              Validators.pattern("^[0-9]*$")
            ]         
          ),
          direccion: new FormControl(          
            this.usuario.direccion          
          ),   
          pais: new FormControl(          
            this.usuario.pais          
          ),        
        }
      );      
  }

  //invocacion de los metodos getters del formulario
  get nombre(){
    return this.formulario.get('nombre')!; 
  }
  get correo(){
    return this.formulario.get('correo')!; 
  }
  get direccion(){
    return this.formulario.get('direccion')!; 
  }
  get telefono(){
    return this.formulario.get('telefono')!; 
  }
  get pais(){
    return this.formulario.get('pais')!; 
  }

  enviar(){
    console.log(this.formulario.value.nombre)
  }
}
