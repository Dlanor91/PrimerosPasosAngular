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
  users:Array<any> = [];
  checkboxMarca: boolean = false; 

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

  seleccionaCheck(evento:any){
    if(evento.target.checked){
      this.checkboxMarca = true;
      alert("si");
    }else{
      this.checkboxMarca = false;
      alert("no");
    }
  }

  enviar(){
    this.users.push({
      nombre:this.usuario.nombre,
      correo:this.usuario.correo,
      telefono:this.usuario.telefono,
      direccion:this.usuario.direccion,
      pais:this.usuario.pais
    });
  }
}
