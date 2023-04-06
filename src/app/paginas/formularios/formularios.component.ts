import { Component,OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit{

  usuario:any;
  paises:Array<any>;

  constructor(private setearTitle:Title){
    this.usuario={
      nombre:"",
      correo:"",
      telefono:"",
      direccion:"",
      pais:""
    },
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

  ngOnInit():void{
    this.cambiarTitulo("Curso Angular - Formularios");
  }

  public cambiarTitulo(titulo:string){
    this.setearTitle.setTitle(titulo);
  }

  enviar(){
    console.log(this.usuario.nombre + " | " + this.usuario.correo + " | " + this.usuario.telefono 
    +" | " + this.usuario.direccion +" | " + this.usuario.pais);
  }
}
